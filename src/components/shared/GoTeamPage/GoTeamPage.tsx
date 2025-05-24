import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GoTeamPage({ teamId }: { teamId: string | undefined }) {
  return (
    <Link
      href={`${teamId ? `/team-info/${teamId}` : '/'}`}
      className="w-fit flex items-center justify-end gap-2 hover:font-bold hover:scale-105 transition-all duration-300"
    >
      <span className="text-base font-medium">Team info</span>
      <ArrowRight />
    </Link>
  );
}
