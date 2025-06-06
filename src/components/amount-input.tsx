import { Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AmountInput() {
  return (
    <div className='bg-[#F5F5FF] py-4 px-[18px] rounded-[10px] flex flex-col gap-2'>
      <p>Enter loan amount between €1000 and €20,000</p>
      <div className='flex items-center justify-between gap-2'>
        {/* icon container */}
        <div className='h-full'>
          <Button
            size='icon'
            className='rounded-full bg-[#E0E0FF] text-foreground'
          >
            <Minus />
          </Button>
        </div>

        {/* input container */}
        <div className='flex-1'>
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
        <div className='h-full'>
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
