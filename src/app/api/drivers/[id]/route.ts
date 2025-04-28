import { NextResponse } from 'next/server';
import { chromium } from 'playwright';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const driverData = {
      id,
      name: '',
      driverNumber: '',
      driverImageUrl: '',
      countryFlagUrl: '',
      biography: '',
      team: '',
      country: '',
      podiums: '',
      points: '',
      grandsPrixEntered: '',
      worldChampionships: '',
      highestRaceFinish: '',
      highestGridPosition: '',
      dateOfBirth: '',
      placeOfBirth: '',
    };
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`https://www.formula1.com/en/drivers/${id}`);

    const name = (await page.locator('h1.f1-heading').textContent()) || '';
    const driverNumber =
      (await page
        .locator(
          'p.f1-heading.tracking-normal.text-fs-24px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne.f1-utils-inline-image--loose.text-greyDark'
        )
        .textContent()) || '';
    const countryFlagUrl =
      (await page
        .locator(
          'p.f1-heading.tracking-normal.text-fs-24px.leading-tight.normal-case.font-normal.non-italic.f1-heading__body.font-formulaOne.f1-utils-inline-image--loose.text-greyDark img'
        )
        .getAttribute('src')) || '';

    const biography = await page.locator('.f1-atomic-wysiwyg').textContent();
    const driverImageUrl = await page
      .locator('img.f1-c-image.aspect-square.w-full.overflow-hidden.object-cover.object-top')
      .getAttribute('src');
    const driverInfo = await page.locator('.f1-dl').evaluate((el) => {
      const rows = Array.from(el.querySelectorAll('dd'));

      const team = rows[0].textContent;
      const country = rows[1].textContent;
      const podiums = rows[2].textContent;
      const points = rows[3].textContent;
      const grandsPrixEntered = rows[4].textContent;
      const worldChampionships = rows[5].textContent;
      const highestRaceFinish = rows[6].textContent;
      const highestGridPosition = rows[7].textContent;
      const dateOfBirth = rows[8].textContent;
      const placeOfBirth = rows[9].textContent;

      return {
        team,
        country,
        podiums,
        points,
        grandsPrixEntered,
        worldChampionships,
        highestRaceFinish,
        highestGridPosition,
        dateOfBirth,
        placeOfBirth,
      };
    });

    driverData.name = name;
    driverData.driverNumber = driverNumber;
    driverData.countryFlagUrl = countryFlagUrl;
    driverData.biography = biography || '';
    driverData.driverImageUrl = driverImageUrl || '';
    driverData.team = driverInfo.team || '';
    driverData.country = driverInfo.country || '';
    driverData.podiums = driverInfo.podiums || '';
    driverData.points = driverInfo.points || '';
    driverData.grandsPrixEntered = driverInfo.grandsPrixEntered || '';
    driverData.worldChampionships = driverInfo.worldChampionships || '';
    driverData.highestRaceFinish = driverInfo.highestRaceFinish || '';
    driverData.highestGridPosition = driverInfo.highestGridPosition || '';
    driverData.dateOfBirth = driverInfo.dateOfBirth || '';
    driverData.placeOfBirth = driverInfo.placeOfBirth || '';

    await browser.close();

    return NextResponse.json(driverData);
  } catch (error) {
    console.error('Error fetching drivers data:', error);
    return NextResponse.json({ error: 'Error fetching drivers data' }, { status: 500 });
  }
}
