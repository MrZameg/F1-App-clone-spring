import { chromium } from 'playwright';

export async function GET(req: Request) {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto('https://www.formula1.com/en/racing/2025');

  const scheduleCards = await page.locator('.outline-offset-4').evaluateAll((cards) => {
    return cards.map((card) => {
      const id = card.getAttribute('href')?.split('/').pop();
      const name =
        card.querySelector(
          'p.f1-heading.tracking-normal.text-fs-18px.leading-tight.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne.overflow-hidden'
        )?.textContent ||
        card.querySelector(
          'p.f1-heading.tracking-normal.text-fs-22px.leading-tight.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne.flex.items-center'
        )?.textContent;
      const circuitName = card.querySelector(
        'p.f1-heading.tracking-normal.text-fs-12px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne'
      )?.textContent;
      const date = card.querySelector(
        'p.f1-heading-wide.font-formulaOneWide.tracking-normal.font-normal.non-italic.text-fs-18px.leading-none.normal-case.text-brand-black > span'
      )?.textContent;
      const month = card.querySelector(
        '.f1-inner-wrapper.flex.flex-col.gap-xxs > :nth-child(2) .whitespace-nowrap'
      )?.textContent;

      const roundString = card.querySelector(
        'p.f1-text.font-titillium.tracking-normal.font-bold.non-italic.uppercase.leading-snug.f1-text__micro.text-fs-15px.text-brand-primary'
      )?.textContent;
      const roundParsed = Number(roundString?.match(/\d+/)?.[0]);
      const flagImageUrl =
        card
          .querySelector('img.f1-c-image.ml-auto.mr-0.rounded-xxs.border.border-greyDark')
          ?.getAttribute('src') ||
        card.querySelector('img.f1-c-image.ml-auto.mr-0.rounded-xxs')?.getAttribute('src');
      const circuitImageUrl =
        card.querySelector('img.f1-c-image.h-full.w-full.object-contain')?.getAttribute('src') ||
        `https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/${name}.png`;

      const podiumElement = card.querySelector('.grid.grid-cols-3.gap-micro.items-end');

      const firstPlaceName = podiumElement?.querySelector('.order-2 img')?.getAttribute('alt');
      const firstPlaceImageUrl = podiumElement?.querySelector('.order-2 img')?.getAttribute('src');
      const secondPlaceName = podiumElement?.querySelector('.order-1 img')?.getAttribute('alt');
      const secondPlaceImageUrl = podiumElement?.querySelector('.order-1 img')?.getAttribute('src');
      const thirdPlaceName = podiumElement?.querySelector('.order-3 img')?.getAttribute('alt');
      const thirdPlaceImageUrl = podiumElement?.querySelector('.order-3 img')?.getAttribute('src');

      return {
        id,
        name,
        circuitName,
        date,
        month,
        round: Number.isNaN(roundParsed) ? roundString : roundParsed,
        flagImageUrl,
        circuitImageUrl,
        finished: podiumElement ? true : false,
        ...(podiumElement && {
          podium: {
            firstPlace: {
              name: firstPlaceName,
              imageUrl: firstPlaceImageUrl,
            },
            secondPlace: {
              name: secondPlaceName,
              imageUrl: secondPlaceImageUrl,
            },
            thirdPlace: {
              name: thirdPlaceName,
              imageUrl: thirdPlaceImageUrl,
            },
          },
        }),
      };
    });
  });

  await browser.close();

  return Response.json(scheduleCards);
}
