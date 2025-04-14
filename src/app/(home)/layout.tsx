import { DashboardSidebard } from '@/app/(home)/Components/DashboardSidebard';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <DashboardSidebard />
      <div className="p-3 w-full">{children}</div>
    </div>
  );
}
