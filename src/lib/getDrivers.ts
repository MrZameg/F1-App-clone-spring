interface Driver {
  id: string;
  name: string;
  surname: string;
  position: string;
  points: string;
  team: string;
  imageUrl: string;
  country: string;
}

interface DriverStatistics {
  position: string;
  driver: {
    id: string;
    statisticsHandle: string;
    name: string;
    lastName: string;
    abbreviated: string;
  };
  country: string;
  team: {
    id: string;
    name: string;
  };
  points: string;
}

export interface DriverInfo {
  id: string;
  name: string;
  driverNumber: string;
  driverImageUrl: string;
  countryFlagUrl: string;
  biography: string;
  team: string;
  country: string;
  podiums: string;
  points: string;
  grandsPrixEntered: string;
  worldChampionships: string;
  highestRaceFinish: string;
  highestGridPosition: string;
  dateOfBirth: string;
  placeOfBirth: string;
}

const isServer = typeof window === 'undefined';

export async function getDrivers(): Promise<Driver[] | null> {
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log('Skipping API call during build for /api/drivers');
    return [];
  }

  try {
    const response = await fetch(`${process.env.BASE_URL || 'http://localhost:3000'}/api/drivers`);
    const data = await response.json();

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getDriverStatistics(season: string): Promise<DriverStatistics[] | null> {
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log(`Skipping API call during build for /api/drivers/statistics?season=${season}`);
    return [];
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/drivers/statistics?season=${season}`
    );
    const data = await response.json();

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getDriverInfo(id: string): Promise<DriverInfo | null> {
  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/drivers/${id}`
    );
    const data = await response.json();

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
