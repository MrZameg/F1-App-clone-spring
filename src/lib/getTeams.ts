interface Team {
  id: string;
  name: string;
  position: string;
  points: string;
  logoUrl: string;
  carUrl: string;
}

export async function getTeams(): Promise<Team[] | null> {
  try {
    const response = await fetch('http://localhost:3000/api/teams');
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
