'use server';

import { auth, clerkClient } from '@clerk/nextjs/server';

export const addOrRemoveFromFavorites = async (type: string, id: string) => {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    return { message: 'No Logged In User' };
  }

  const client = await clerkClient();

  let currentUserFavoriteTeams = (sessionClaims?.metadata?.favoriteTeams as string[]) || [];
  let currentUserFavoriteDrivers = (sessionClaims?.metadata?.favoriteDrivers as string[]) || [];

  if (type === 'team') {
    if (currentUserFavoriteTeams.includes(id)) {
      currentUserFavoriteTeams = currentUserFavoriteTeams.filter((t) => t !== id);
    } else {
      currentUserFavoriteTeams.push(id);
    }
  }

  if (type === 'driver') {
    if (currentUserFavoriteDrivers.includes(id)) {
      currentUserFavoriteDrivers = currentUserFavoriteDrivers.filter((d) => d !== id);
    } else {
      currentUserFavoriteDrivers.push(id);
    }
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
