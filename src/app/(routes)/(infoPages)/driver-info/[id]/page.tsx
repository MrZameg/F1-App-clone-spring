import { getDriverInfo } from '@/lib/getDrivers';
import DriverInfoTable from './components/DriverInfoTable/DriverInfoTable';
import DriverImageSection from './components/DriverImageSection/DriverImageSection';

export default async function DriverInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const driverInfo = await getDriverInfo(id);

  if (!driverInfo) {
    return <div>Driver not found</div>;
  }

  return (
    <div className="w-full pt-12 flex gap-5 items-start max-w-7xl mx-auto md:flex-row flex-col">
      <DriverImageSection driverInfo={driverInfo} />
      <div className="w-full md:w-1/2">
        <DriverInfoTable driverInfo={driverInfo} />
      </div>
    </div>
  );
}
