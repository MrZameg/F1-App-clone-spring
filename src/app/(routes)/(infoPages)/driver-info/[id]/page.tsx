export default async function DriverInfoPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <h1> Info about driver {id}</h1>
    </div>
  );
}
