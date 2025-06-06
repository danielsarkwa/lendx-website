import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  return (
    <Select defaultValue='en'>
      <SelectTrigger hideChevron>
        <Languages />
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value='en'>Eng</SelectItem>
          <SelectItem value='fi'>Fin</SelectItem>
          <SelectItem value='sv'>Swe</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
