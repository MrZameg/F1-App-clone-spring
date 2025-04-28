export default async function TeamInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>TeamInfoPage {id}</div>;
}
