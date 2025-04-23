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

export async function getDrivers(): Promise<Driver[] | null> {
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
