import { getTeamInfo, TeamInfo } from '@/lib/getTeams';
import TeamImageSection from '../components/TeamImageSection/TeamImageSection';
import TeamDriversSection from '../components/TeamDriversSection/TeamDriversSection';
import TeamInfoSection from '../components/TeamInfoSection/TeamInfoSection';
import { AddRemoveFavorites } from '@/components/shared/AddRemoveFavorites';
import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';
export default async function TeamInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teamInfo: TeamInfo | null = await getTeamInfo(id);

  return (
    <div className="w-full pt-12 flex gap-5 items-start max-w-7xl mx-auto md:flex-row flex-col">
      <div className="w-full flex flex-col gap-5 md:w-1/2">
        <div className="flex justify-between items-center">
          <GoBackPage />
          <div className="flex justify-end items-center gap-2">
            <span className="text-lg font-bold text-gray-300">
              Add {teamInfo?.name} to favorites
            </span>
            <AddRemoveFavorites type="team" id={id} />
          </div>
        </div>
        <TeamImageSection teamInfo={teamInfo} />
        <TeamDriversSection teamInfo={teamInfo} />
      </div>

      <div className="w-full md:w-1/2">
        <TeamInfoSection teamInfo={teamInfo} />
      </div>
    </div>
  );
}
