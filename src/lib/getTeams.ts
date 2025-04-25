interface Team {
  id: string;
  name: string;
  position: string;
  points: string;
  logoUrl: string;
  carUrl: string;
}

interface TeamStatistics {
  position: string;
  team: string;
  points: string;
  id: string;
}

// Helper to determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export async function getTeams(): Promise<Team[] | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log('Skipping API call during build for /api/teams');
      return [];
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/teams`
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

export async function getTeamStatistics(season: string): Promise<TeamStatistics[] | null> {
  try {
    // Skip fetch during build/SSR if we're not in the browser
    if (!isBrowser && process.env.NODE_ENV === 'production') {
      console.log(`Skipping API call during build for /api/teams/statistics?season=${season}`);
      return [];
    }

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      }/api/teams/statistics?season=${season}`
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
