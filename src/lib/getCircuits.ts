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

export interface CircuitPosition {
  position: string;
  number: string;
  driver: string;
  car: string;
  laps: string;
  timeRetired: string;
  points: string;
}

export interface CircuitInfo {
  id: string;
  circuitName: string;
  fllagUrl: string;
  circuitImageUrl: string;
  circuitInfo: {
    firstGrandPrix: string;
    numberOfLaps: string;
    circuitLength: string;
    raceDistance: string;
    lapRecord: {
      time: string;
      diver: string;
    };
  };
  description: string;
  results: CircuitPosition[];
  date: string;
}

export interface CircuitResults {
  raceResults: CircuitPosition[];
  date: string;
}

// Helper to check if we're during build/SSR
const isServer = typeof window === 'undefined';

export async function getCircuits(): Promise<Circuit[] | null> {
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log('Skipping API call during build for /api/schedule');
    return [];
  }

  try {
    const response = await fetch(`${process.env.BASE_URL || 'http://localhost:3000'}/api/schedule`);
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
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log('Skipping API call during build for /api/schedule/next-round');
    return null;
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/schedule/next-round`
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

export async function getCircuitResults(
  circuitId: string,
  sessionId: string,
  season: string = '2025'
): Promise<CircuitResults | null> {
  try {
    const response = await fetch(
      `${
        process.env.BASE_URL || 'http://localhost:3000'
      }/api/schedule/results?circuitId=${circuitId}&sessionId=${sessionId}&season=${season}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch circuit results');
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCircuitInfo(circuitId: string): Promise<CircuitInfo | null> {
  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/schedule/${circuitId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch circuit info');
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
