import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get('season') || new Date().getFullYear().toString();
  const sessionId = searchParams.get('sessionId') || null;
  const circuitId = searchParams.get('circuitId') || null;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    if (sessionId && circuitId) {
      await page.goto(
        `https://www.formula1.com/en/results/${season}/races/${sessionId}/${circuitId}/race-result`
      );

      await page.waitForSelector('table');

      const raceResults = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table tbody tr'));

        return rows.map((row) => {
          const cells = row.querySelectorAll('td');

          return {
            position: cells[0]?.textContent?.trim() || '',
            number: cells[1]?.textContent?.trim() || '',
            driver: cells[2]?.textContent?.trim() || '',
            car: cells[3]?.textContent?.trim() || '',
            laps: cells[4]?.textContent?.trim() || '',
            timeRetired: cells[5]?.textContent?.trim() || '',
            points: cells[6]?.textContent?.trim() || '',
          };
        });
      });

      const date = await page
        .locator(
          'p.f1-text.font-titillium.tracking-normal.font-bold.non-italic.normal-case.leading-snug.f1-text__micro.text-fs-15px'
        )
        .textContent();

      return NextResponse.json({ raceResults, date });
    } else {
      return NextResponse.json({ error: 'No sessionId or circuitId provided' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
  } finally {
    await browser.close();
  }
}
