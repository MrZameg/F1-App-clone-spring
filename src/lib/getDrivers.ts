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

// Helper to determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export async function getDrivers(): Promise<Driver[] | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log('Skipping API call during build for /api/drivers');
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/drivers`
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

export async function getDriverStatistics(season: string): Promise<DriverStatistics[] | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log(`Skipping API call during build for /api/drivers/statistics?season=${season}`);
      return [];
    }

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      }/api/drivers/statistics?season=${season}`
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
