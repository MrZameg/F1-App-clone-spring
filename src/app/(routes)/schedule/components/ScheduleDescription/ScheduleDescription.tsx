export default function ScheduleDescription({ description }: { description: string }) {
  return (
    <div className="w-full gap-4 flex flex-col">
      <h3 className="text-xl font-bold">Circuit Info:</h3>
      <p className="text-base">{description}</p>
    </div>
  );
}
