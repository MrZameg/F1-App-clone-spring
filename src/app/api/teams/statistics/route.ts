import { chromium } from 'playwright';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const season = searchParams.get('season') || new Date().getFullYear();

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://www.formula1.com/en/results/${season}/team`);

    const teamsData = await page.$$eval('table tbody tr', (rows) => {
      return rows.map((row) => {
        const cells = Array.from(row.querySelectorAll('td'));

        const teamLink = cells[1]?.querySelector('a')?.getAttribute('href');
        const id = teamLink ? teamLink.split('/').pop() : '';

        const position = cells[0]?.textContent?.trim() || '';
        const team = cells[1]?.textContent?.trim() || '';
        const points = cells[2]?.textContent?.trim() || '';

        return {
          position,
          team,
          points,
          id,
        };
      });
    });

    await browser.close();

    return NextResponse.json(teamsData);
  } catch (error) {
    console.error('Error fetching teams data:', error);
    return NextResponse.json({ error: 'Error fetching teams data' }, { status: 500 });
  }
}
