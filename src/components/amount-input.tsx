import { Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AmountInput() {
  return (
    <div>
      <p>Enter loan amount between €1000 and €20,000</p>
      <div>
        {/* icon container */}
        <div>
          <Button
            size='icon'
            className='rounded-full bg-[#E0E0FF] text-foreground'
          >
            <Minus />
          </Button>
        </div>

        {/* input container */}
        <div>
          <Input
            type='number'
            placeholder='Amount'
            min='1000'
            max='20000'
            step='1000'
            className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          />
          <p>Must be with intervals of €1000 only</p>
        </div>

        {/* icon container */}
        <div>
          <Button
            size='icon'
            className='rounded-full bg-[#E0E0FF] text-foreground'
          >
            <Minus />
          </Button>
        </div>
      </div>
    </div>
  );
}
