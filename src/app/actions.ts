import { auth, clerkClient } from '@clerk/nextjs/server';

export const addOrRemoveFromFavorites = async (formData: FormData) => {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  const client = await clerkClient();

  let currentUserFavoriteTeams = (sessionClaims?.metadata?.favoriteTeams as string[]) || [];
  let currentUserFavoriteDrivers = (sessionClaims?.metadata?.favoriteDrivers as string[]) || [];

  const team = formData.get('teamId') as string;
  const driver = formData.get('driverId') as string;

  if (currentUserFavoriteTeams.includes(team)) {
    currentUserFavoriteTeams = currentUserFavoriteTeams.filter((t) => t !== team);
  } else {
    currentUserFavoriteTeams.push(team);
  }

  if (currentUserFavoriteDrivers.includes(driver)) {
    currentUserFavoriteDrivers = currentUserFavoriteDrivers.filter((d) => d !== driver);
  } else {
    currentUserFavoriteDrivers.push(driver);
  }

  try {
    const res = await client.users.updateUser(userId, {
      publicMetadata: {
        favoriteTeams: currentUserFavoriteTeams,
        favoriteDrivers: currentUserFavoriteDrivers,
      },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' };
  }
};
