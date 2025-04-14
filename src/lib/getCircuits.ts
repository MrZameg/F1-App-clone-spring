interface Circuit {
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

export async function getCircuits(): Promise<Circuit[] | null> {
  return null;
}

export async function getNextRound(): Promise<Circuit | null> {
  try {
    const response = await fetch('http://localhost:3000/api/schedule/next-round');
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
