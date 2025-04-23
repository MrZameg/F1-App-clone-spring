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

export async function getTeams(): Promise<Team[] | null> {
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

export async function getTeamStatistics(season: string): Promise<TeamStatistics[] | null> {
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
