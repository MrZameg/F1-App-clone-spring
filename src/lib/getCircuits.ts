export interface Circuit {
  id: string;
  name: string;
  circuitName: string;
  date: string;
  month: string;
  round: number;
  qualifyingDay?: string;
  qualifyingHour?: string;
  raceDay?: string;
  raceHour?: string;
  flagImageUrl: string;
  circuitImageUrl: string;
  finished?: boolean;
  podium?: {
    firstPlace: {
      name: string;
      imageUrl: string;
    };
    secondPlace: {
      name: string;
      imageUrl: string;
    };
    thirdPlace: {
      name: string;
      imageUrl: string;
    };
  };
}

// Helper to determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export async function getCircuits(): Promise<Circuit[] | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log('Skipping API call during build for /api/schedule');
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch circuits');
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getNextRound(): Promise<Circuit | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log('Skipping API call during build for /api/schedule/next-round');
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/schedule/next-round`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch next round');
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
