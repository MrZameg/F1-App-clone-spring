import { chromium } from 'playwright';

export async function GET(req: Request) {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('https://www.formula1.com/en/racing/2025');

  await page.waitForSelector('#featuredCard');

  const featuredCard = await page.locator('#featuredCard').evaluate((card) => {
    const id = card.querySelector('a')?.getAttribute('href')?.split('/').pop();

    const name = card.querySelector(
      'p.f1-heading.tracking-normal.text-fs-22px.leading-tight.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne.flex.items-center'
    )?.textContent;

    const circuitName = card.querySelector(
      'p.f1-heading.tracking-normal.text-fs-12px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne'
    )?.textContent;

    const date = card.querySelector(
      'p.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-18px.leading-none.normal-case.text-brand-black > span'
    )?.textContent;

    const month =
      card.querySelector(
        'span.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-12px.leading-none.uppercase.inline-flex.items-center.px-xs.py-micro.rounded-xxs.bg-brand-white.text-brand-black > span'
      )?.textContent ||
      card.querySelector(
        'p.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-12px.leading-none.uppercase.flex.items-center.px-xs.py-micro.rounded-xxs.bg-brand-white.text-brand-black > span'
      )?.textContent;

    const roundString = card.querySelector(
      'p.f1-text.font-titillium.tracking-normal.font-bold.non-italic.uppercase.leading-snug.f1-text__micro.text-fs-15px.text-brand-primary'
    )?.textContent;
    const roundParsed = Number(roundString?.match(/\d+/)?.[0]);

    const flagImageUrl = card
      .querySelector('img.f1-c-image.ml-auto.mr-0.rounded-xxs')
      ?.getAttribute('src');
    const circuitImageUrl = card
      .querySelector('img.f1-c-image.h-full.w-full.object-contain')
      ?.getAttribute('src');

    const timeElements = [
      ...card.querySelectorAll(
        'p.f1-heading.tracking-normal.text-fs-12px.leading-tight.uppercase.font-normal.non-italic.f1-heading__body.font-formulaOne'
      ),
    ];
    const qualifyingElement = timeElements.find((element) => element.textContent === 'Qualifying');
    const raceElement = timeElements.find((element) => element.textContent === 'Race');

    const qualifyingDay = qualifyingElement
      ?.closest('.grid.items-center.mb-xxs')
      ?.querySelector('.text-center.grid.text-grey-60 > p')?.textContent;
    const qualifyingHour = qualifyingElement
      ?.closest('.grid.items-center.mb-xxs')
      ?.querySelector('.rounded-xs.bg-greyDark.text-center.grid.p-xxs.w-full > p')?.textContent;

    const raceDay = raceElement
      ?.closest('.grid.items-center.mb-xxs')
      ?.querySelector('.text-center.grid.text-grey-60 > p')?.textContent;
    const raceHour = raceElement
      ?.closest('.grid.items-center.mb-xxs')
      ?.querySelector('.rounded-xs.bg-greyDark.text-center.grid.p-xxs.w-full > p')?.textContent;

    return {
      id,
      name,
      circuitName,
      date,
      month,
      round: roundParsed,
      qualifyingDay,
      qualifyingHour,
      raceDay,
      raceHour,
      flagImageUrl,
      circuitImageUrl,
    };
  });

  await browser.close();

  return Response.json(featuredCard);
}
