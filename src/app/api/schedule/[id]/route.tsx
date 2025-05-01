import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(`https://www.formula1.com/en/racing/2025/${id}/circuit`);

  const circuitName = await page
    .locator(
      'h2.f1-heading.tracking-normal.text-fs-20px.leading-none.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne.hidden'
    )
    .textContent();
  const fllagUrl = await page
    .locator('img.f1-c-image.max-w-14.rounded.object-cover')
    .getAttribute('src');
  const circuitImageUrl = await page
    .locator('img.f1-c-image.w-full.h-auto.object-cover')
    .getAttribute('src');

  const circuitInfo = await page.locator('.grid.grid-cols-12.gap-normal').evaluate((element) => {
    const infoItems = element.querySelectorAll(
      '.border-r-double.border-b-double.rounded-br-s.f1-utils-inner-padding-br--half.border-gray20'
    );

    const firstGrandPrix = infoItems[0].querySelector('h2')?.textContent;
    const numberOfLaps = infoItems[1].querySelector('h2')?.textContent;
    const circuitLength = infoItems[2].querySelector('h2')?.textContent;
    const raceDistance = infoItems[3].querySelector('h2')?.textContent;
    const lapRecord = {
      time: infoItems[4].querySelector('h2')?.childNodes[0].textContent,
      diver: infoItems[4].querySelector('h2')?.childNodes[1].textContent,
    };

    return {
      firstGrandPrix,
      numberOfLaps,
      circuitLength,
      raceDistance,
      lapRecord,
    };
  });

  const description = await page
    .locator(
      '.border-t-thin.border-r-thin.border-b-thin.rounded-tr-l.rounded-br-l.f1-utils-inner-padding-tr--half.f1-utils-inner-padding-br--half.border-d0d0d2'
    )
    .textContent();

  const resultsLink = ''; // GET RESULT LINK AND GET RESULTS

  await browser.close();

  return NextResponse.json({
    circuitName,
    fllagUrl,
    circuitImageUrl,
    circuitInfo,
    description,
  });
}
