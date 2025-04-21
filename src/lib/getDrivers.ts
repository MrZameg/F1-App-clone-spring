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

export async function getDrivers(): Promise<Driver[] | null> {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/drivers`);
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
