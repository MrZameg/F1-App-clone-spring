import { currentUser } from '@clerk/nextjs/server';
import { DriverCards } from './components/DriverCards';
import { TeamCards } from './components/TeamCards';

export default async function FavoritesPage() {
  const user = await currentUser();
  const { favoriteTeams, favoriteDrivers } = user?.publicMetadata as {
    favoriteTeams: string[];
    favoriteDrivers: string[];
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mt-4 mb-12 text-center">
        The favorites of {user?.firstName} {user?.lastName}
      </h1>

      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col gap-3 border border-border rounded-lg p-2">
          <DriverCards favoriteDrivers={favoriteDrivers} />
        </div>

        <div className="w-full flex flex-col gap-3 border border-border rounded-lg p-2">
          <TeamCards favoriteTeams={favoriteTeams} />
        </div>
      </div>
    </div>
  );
}
