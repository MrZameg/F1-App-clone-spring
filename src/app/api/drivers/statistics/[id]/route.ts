import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id }: { id: string } = await params;
  const { searchParams } = new URL(request.url);
  const seasonDriverId: string | null = searchParams.get('id');
  const season: string | null = searchParams.get('season') || new Date().getFullYear().toString();
  if (!seasonDriverId) {
    return NextResponse.json({ error: 'No seasonDriverId provided' }, { status: 400 });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(
      `https://www.formula1.com/en/results/${season}/drivers/${seasonDriverId}/${id}`
    );

    await page.waitForSelector('table');

    const name = await page
      .locator(
        'h1.f1-heading.tracking-normal.text-fs-24px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne'
      )
      ?.textContent();
    const driverName = name?.split(':')[1].trim();
    const driverResults = await page
      .locator('table tbody tr')
      .evaluateAll((rows: Element[], currentSeason: string) => {
        return rows.map((row: Element) => {
          const grandPrixElement = row.querySelector('td:nth-child(1) a');
          const grandPrixName = grandPrixElement?.textContent?.trim() || '';
          const grandPrixHref = grandPrixElement?.getAttribute('href') || '';

          const urlParts = grandPrixHref.split('/');

          const gpId = urlParts.at(-2) || '';
          const gpSessionId = urlParts.at(-3) || '';
          const gpSeason = currentSeason;

          const date = row.querySelector('td:nth-child(2)')?.textContent?.trim() || '';
          const car = row.querySelector('td:nth-child(3)')?.textContent?.trim() || '';
          const positionText = row.querySelector('td:nth-child(4)')?.textContent?.trim() || '0';
          const pointsText = row.querySelector('td:nth-child(5)')?.textContent?.trim() || '0';

          return {
            grandPrix: {
              name: grandPrixName,
              season: gpSeason,
              sessionId: gpSessionId,
              id: gpId,
            },
            date: date,
            car: car,
            racePosition: parseInt(positionText, 10),
            points: parseInt(pointsText, 10),
          };
        });
      }, season);

    await browser.close();
    return NextResponse.json({ driverName, driverId: id, season, driverResults });
  } catch (error) {
    console.error('Error scraping driver statistics:', error);
    await browser.close();
    return NextResponse.json(
      { error: 'An error occurred while scraping the data' },
      { status: 500 }
    );
  }
}
