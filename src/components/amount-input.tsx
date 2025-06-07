'use client';

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
        <div className='flex-1 flex flex-col gap-1'>
          <Input
            type='text'
            placeholder='€1000'
            style={{ fontSize: '45px' }}
            className='font-semibold py-8 border-[#CCCBFF] bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          />
          <p className='text-[#45454E]'>Must be with intervals of €1000 only</p>
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
