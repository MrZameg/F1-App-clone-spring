import { chromium } from 'playwright';

export async function GET(req: Request) {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('https://www.formula1.com/en/drivers');

  const drivers = await page.$$eval('.group.focus-visible\\:outline-0', (drivers) =>
    drivers.map((el) => {
      const id = el.getAttribute('href')?.split('/').pop();

      const name = el.querySelector(
        '.f1-heading.tracking-normal.text-fs-12px.leading-tight.uppercase.font-normal.non-italic.f1-heading__body.font-formulaOne'
      )?.textContent;
      const surname = el.querySelector(
        '.f1-heading.tracking-normal.text-fs-18px.leading-tight.uppercase.font-bold.non-italic.f1-heading__body.font-formulaOne'
      )?.textContent;
      const position = el.querySelector(
        '.f1-heading-black.font-formulaOne.tracking-normal.font-black.non-italic.text-fs-42px.leading-none'
      )?.textContent;
      const points = el.querySelector(
        '.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-18px.leading-none.normal-case'
      )?.textContent;

      const team = el.querySelector(
        '.f1-heading.tracking-normal.text-fs-12px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne.text-greyDark'
      )?.textContent;

      const imageUrl = el
        .querySelector('img.f1-c-image.ml-0.mr-0.pr-s.max-w-3\\/4')
        ?.getAttribute('src');

      const country = el
        .querySelector('img.f1-c-image.h-\\[2em\\].ml-auto.mr-0.border.border-greyDark.rounded-xxs')
        ?.getAttribute('alt');

      return { id, name, surname, position, points, team, imageUrl, country };
    })
  );

  await browser.close();

  return Response.json(drivers);
}
