import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`https://www.formula1.com/en/teams/${id}`);

  try {
    // Team name and logo
    const name = (await page.locator('h1.f1-heading').textContent()) || '';
    const logoUrl =
      (await page.locator('img.f1-c-image.w-full.h-full.object-cover').getAttribute('src')) || '';

    // Extracting team details
    const fullTeamName =
      (await page.locator('dt:has-text("Full Team Name") + dd').textContent()) || '';
    const base = (await page.locator('dt:has-text("Base") + dd').textContent()) || '';
    const teamChief = (await page.locator('dt:has-text("Team Chief") + dd').textContent()) || '';
    const technicalChief =
      (await page.locator('dt:has-text("Technical Chief") + dd').textContent()) || '';
    const chassis = (await page.locator('dt:has-text("Chassis") + dd').textContent()) || '';
    const powerUnit = (await page.locator('dt:has-text("Power Unit") + dd').textContent()) || '';
    const firstTeamEntry =
      (await page.locator('dt:has-text("First Team Entry") + dd').textContent()) || '';
    const worldChampionships =
      (await page.locator('dt:has-text("World Championships") + dd').textContent()) || '';
    const highestRaceFinish =
      (await page.locator('dt:has-text("Highest Race Finish") + dd').textContent()) || '';
    const polePositions =
      (await page.locator('dt:has-text("Pole Positions") + dd').textContent()) || '';
    const fastestLaps =
      (await page.locator('dt:has-text("Fastest Laps") + dd').textContent()) || '';

    const drivers = await page
      .locator('.grid.gap-micro.f1-grid.grid-cols-2.bg-brand-offWhite figure')
      .evaluateAll((elements) => {
        return elements.map((element) => {
          const id = element.querySelector('a')?.getAttribute('href')?.split('/').pop();
          const numberElement = element.querySelector(
            'p.f1-heading.tracking-normal.text-fs-24px.leading-tight.normal-case.font-bold.non-italic.f1-heading__body.font-formulaOne'
          );
          const nameElement = element.querySelector(
            'p.f1-heading.tracking-normal.text-fs-18px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne.mt-xs'
          );
          const imgElement = element.querySelector('img');

          return {
            id: id || '',
            number: numberElement?.textContent?.trim() || '',
            name: nameElement?.textContent?.trim() || '',
            imageUrl: imgElement?.getAttribute('src') || '',
          };
        });
      });

    const description = await page.locator('.f1-atomic-wysiwyg').textContent();

    // Create complete team data object
    const teamData = {
      id,
      name,
      logoUrl,
      details: {
        fullTeamName,
        base,
        teamChief,
        technicalChief,
        chassis,
        powerUnit,
        firstTeamEntry,
        worldChampionships,
        highestRaceFinish,
        polePositions,
        fastestLaps,
      },
      drivers,
      description,
    };

    return NextResponse.json(teamData);
  } catch (error) {
    console.error('Error scraping team data:', error);
    return NextResponse.json({ error: 'Failed to retrieve team data' }, { status: 500 });
  } finally {
    await browser.close();
  }
}
