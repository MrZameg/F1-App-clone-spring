import { chromium } from 'playwright';

export async function GET() {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('https://www.formula1.com/en/teams');

  const teams = await page.$$eval('.group.focus-visible\\:outline-0', (teams) =>
    teams.map((el) => {
      const id = el.getAttribute('href')?.split('/').pop();

      const name = el.querySelector(
        'span.f1-heading.tracking-normal.text-fs-20px.leading-tight.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne'
      )?.textContent;

      const position = el.querySelector(
        'p.f1-heading-black.font-formulaOne.tracking-normal.font-black.non-italic.text-fs-42px.leading-none'
      )?.textContent;
      const points = el.querySelector(
        'p.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-18px.leading-none.normal-case'
      )?.textContent;

      const logoUrl = el.querySelector('img.f1-c-image.ml-auto.mr-0')?.getAttribute('src');

      const carUrl = el
        .querySelector('.flex.items-baseline.justify-center.bg-plusPattern64 .f1-c-image')
        ?.getAttribute('src');

      return { id, name, position, points, logoUrl, carUrl };
    })
  );

  await browser.close();

  return Response.json(teams);
}
