'use client';

import { useUser } from '@clerk/nextjs';
import { AddRemoveFavoritesProps } from './AddRemoveFavorites.types';
import { useAuth } from '@clerk/clerk-react';
import { startTransition, useEffect, useOptimistic, useState } from 'react';
import { HeartIcon } from 'lucide-react';
import { addOrRemoveFromFavorites } from '@/app/actions';

export function AddRemoveFavorites({ type, id, className }: AddRemoveFavoritesProps) {
  const { user } = useUser();
  const { sessionClaims } = useAuth();
  const metadata = sessionClaims?.metadata;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [optimisticIsFavorite, changeOptimisticIsFavorite] = useOptimistic(
    isFavorite,
    (prev) => !prev
  );

  useEffect(() => {
    if (type === 'team') {
      setIsFavorite(metadata?.favoriteTeams?.includes(id) ?? false);
    }
    if (type === 'driver') {
      setIsFavorite(metadata?.favoriteDrivers?.includes(id) ?? false);
    }
  }, [metadata]);

  const handleSubmit = async (id: string, type: string) => {
    changeOptimisticIsFavorite(!optimisticIsFavorite);
    startTransition(async () => {
      await addOrRemoveFromFavorites(type, id);
      await user?.reload();
    });
  };

  return (
    <form
      action={() => handleSubmit(id, type)}
      className={`flex justify-center items-center p-2 w-fit border border-gray-300 rounded-md ${className}`}
    >
      <button type="submit" className="cursor-pointer">
        {isFavorite ? (
          <HeartIcon className="fill-white hover:fill-gray-300 transition-all duration-300 hover:opacity-80" />
        ) : (
          <HeartIcon className="hover:fill-white transition-all duration-300 hover:opacity-80" />
        )}
      </button>
    </form>
  );
}
