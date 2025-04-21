import { chromium } from 'playwright';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get('season') || new Date().getFullYear().toString();

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://www.formula1.com/en/results/${season}/drivers`);

    const driversData = await page.locator('table tbody tr').evaluateAll((rows) => {
      return rows.map((row) => {
        const cells = Array.from(row.querySelectorAll('td'));

        const driverLink = cells[1]?.querySelector('a')?.getAttribute('href') || '';
        const statisticsHandle = driverLink.split('/').slice(-2, -1)[0] || '';
        const driverId = driverLink.split('/').pop() || '';
        const driverNames = cells[1]?.querySelector('a')?.querySelectorAll('span');
        const driverCode = driverNames?.[2]?.textContent?.trim() || '';

        const lastName = driverNames?.[1]?.textContent?.trim() || '';
        const name = driverNames?.[0]?.textContent?.trim() || '';

        const teamLink = cells[3]?.querySelector('a')?.getAttribute('href') || '';
        const teamId = teamLink.split('/').pop() || '';
        const teamName = cells[3]?.querySelector('a')?.textContent?.trim() || '';

        const position = cells[0]?.textContent?.trim() || '';
        const country = cells[2]?.textContent?.trim() || '';
        const points = cells[4]?.textContent?.trim() || '';

        return {
          position,
          driver: {
            id: driverId,
            statisticsHandle,
            name,
            lastName,
            abbreviated: driverCode,
          },
          country,
          team: {
            id: teamId,
            name: teamName,
          },
          points,
        };
      });
    });

    await browser.close();

    return NextResponse.json(driversData);
  } catch (error) {
    console.error('Error fetching drivers data:', error);
    return NextResponse.json({ error: 'Error fetching drivers data' }, { status: 500 });
  }
}
