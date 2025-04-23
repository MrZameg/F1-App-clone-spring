import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectSeasonProps } from './SelectSeason.types';

export default function SelectSeason(props: SelectSeasonProps) {
  const { setSeason } = props;
  const seasons = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 2024 - i);

  return (
    <Select onValueChange={(value) => setSeason(value)}>
      <SelectTrigger className="w-full max-w-2xs">
        <p className="text-base font-bold"> Season of the year: </p>
        <SelectValue placeholder="Season" />
      </SelectTrigger>
      <SelectContent className="max-h-96">
        {seasons.map((season) => (
          <SelectItem key={season} value={season.toString()}>
            {season}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
