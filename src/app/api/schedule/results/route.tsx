import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get('year') || new Date().getFullYear().toString();
  const sessionId = searchParams.get('sessionId') || null;
  const circuitId = searchParams.get('circuitId') || null;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    if (sessionId && circuitId) {
      await page.goto(
        `https://www.formula1.com/en/results/${year}/races/${sessionId}/${circuitId}/race-result`
      );

      await page.waitForSelector('table');

      const raceResults = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table tbody tr'));

        return rows.map((row) => {
          const cells = row.querySelectorAll('td');

          return {
            POS: cells[0]?.textContent?.trim() || '',
            NO: cells[1]?.textContent?.trim() || '',
            DRIVER: cells[2]?.textContent?.trim() || '',
            CAR: cells[3]?.textContent?.trim() || '',
            LAPS: cells[4]?.textContent?.trim() || '',
            TIME_RETIRED: cells[5]?.textContent?.trim() || '',
            PTS: cells[6]?.textContent?.trim() || '',
          };
        });
      });

      return NextResponse.json(raceResults);
    } else {
      return NextResponse.json({ error: 'No sessionId or circuitId provided' }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'An unknown error occurred' },
      { status: 500 }
    );
  } finally {
    await browser.close();
  }
}
