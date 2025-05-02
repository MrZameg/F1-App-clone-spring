import { getTeamInfo, TeamInfo } from '@/lib/getTeams';
import TeamImageSection from '../components/TeamImageSection/TeamImageSection';
import TeamDriversSection from '../components/TeamDriversSection/TeamDriversSection';
import TeamInfoSection from '../components/TeamInfoSection/TeamInfoSection';

export default async function TeamInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teamInfo: TeamInfo | null = await getTeamInfo(id);

  return (
    <div className="w-full pt-12 flex gap-5 items-start max-w-7xl mx-auto md:flex-row flex-col">
      <div className="w-full flex flex-col gap-5 md:w-1/2">
        <TeamImageSection teamInfo={teamInfo} />
        <TeamDriversSection teamInfo={teamInfo} />
      </div>

      <div className="w-full md:w-1/2">
        <TeamInfoSection teamInfo={teamInfo} />
      </div>
    </div>
  );
}
