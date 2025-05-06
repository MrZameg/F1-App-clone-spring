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

export interface TeamInfo {
  id: string;
  name: string;
  logoUrl: string;
  details: {
    fullTeamName: string;
    base: string;
    teamChief: string;
    technicalChief: string;
    chassis: string;
    powerUnit: string;
    firstTeamEntry: string;
    worldChampionships: string;
    highestRaceFinish: string;
    polePositions: string;
    fastestLaps: string;
  };
  drivers: {
    id: string;
    number: string;
    name: string;
    imageUrl: string;
  }[];
  description: string;
}

export interface TeamsStatistics {
  teamId: string;
  season: string;
  teamResults: TeamStatisticResult[];
}

interface TeamStatisticResult {
  grandPrix: {
    name: string;
    season: string;
    sessionId: string;
    id: string;
  };
  date: string;
  points: number;
}

// Helper to check if we're during build/SSR
const isServer = typeof window === 'undefined';

export async function getTeams(): Promise<Team[] | null> {
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log('Skipping API call during build for /api/teams');
    return [];
  }

  try {
    const response = await fetch(`${process.env.BASE_URL || 'http://localhost:3000'}/api/teams`);
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

export async function getTeamsStatistics(season: string): Promise<TeamStatistics[] | null> {
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log(`Skipping API call during build for /api/teams/statistics?season=${season}`);
    return [];
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/teams/statistics?season=${season}`
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

export async function getTeamInfo(id: string): Promise<TeamInfo | null> {
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log(`Skipping API call during build for /api/teams/info?id=${id}`);
    return null;
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/teams/${id}`
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

export async function getTeamStatistics(
  id: string,
  season: string = new Date().getFullYear().toString()
): Promise<TeamsStatistics | null> {
  // Skip during build/SSR in production
  if (isServer && process.env.NODE_ENV === 'production') {
    console.log(`Skipping API call during build for /api/teams/statistics/${id}?season=${season}`);
    return null;
  }

  try {
    const response = await fetch(
      `${
        process.env.BASE_URL || 'http://localhost:3000'
      }/api/teams/statistics/${id}?season=${season}`
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
