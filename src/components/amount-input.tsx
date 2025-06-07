'use client';

import { Ban, CheckCheck, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function AmountInput({ value, onChange }: AmountInputProps) {
  const [error, setError] = React.useState('');
  const [correctionMessage, setCorrectionMessage] = React.useState('');

  const handleIncrement = () => {
    if (value < 20000) {
      onChange(Math.min(value + 1000, 20000));
    }
  };

  const handleDecrement = () => {
    if (value > 1000) {
      onChange(Math.max(value - 1000, 1000));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/[^0-9]/g, '');

    // Clear previous messages
    setError('');
    setCorrectionMessage('');

    // Check for non-numeric input
    if (e.target.value && !rawInput) {
      setError('Please enter numbers only');
      return;
    }

    const numValue = parseInt(rawInput) || 0;

    // Handle values exceeding maximum
    if (numValue > 20000) {
      onChange(20000);
      setCorrectionMessage('Maximum amount is €20,000. Amount set to €20,000.');
      return;
    }

    // Handle values below minimum
    if (numValue > 0 && numValue < 1000) {
      onChange(1000);
      setCorrectionMessage('Minimum amount is €1,000. Amount set to €1,000.');
      return;
    }

    // Handle valid range but not in 1000 intervals
    if (numValue >= 1000 && numValue <= 20000 && numValue % 1000 !== 0) {
      const correctedValue = Math.round(numValue / 1000) * 1000;
      onChange(correctedValue);
      setCorrectionMessage(
        `Amount adjusted to nearest €1,000 interval: €${correctedValue.toLocaleString()}`
      );
      return;
    }

    // Valid input
    if (numValue >= 1000 && numValue <= 20000 && numValue % 1000 === 0) {
      onChange(numValue);
    }
  };

  return (
    <div className='bg-[#F5F5FF] py-4 px-[18px] rounded-[10px] flex flex-col gap-3'>
      <p>Enter loan amount between €1000 and €20,000</p>
      <div className='flex items-center justify-between gap-2'>
        {/* icon container */}
        <div className='h-full mb-6'>
          <Button
            type='button'
            size='icon'
            className='rounded-full bg-[#E0E0FF] shadow-none text-foreground hover:bg-primary/30'
            onClick={handleDecrement}
          >
            <Minus />
          </Button>
        </div>

        {/* input container */}
        <div className='flex-1 flex flex-col gap-1'>
          <Input
            type='text'
            placeholder='€1000'
            value={value ? `€${value}` : ''}
            onChange={handleInputChange}
            style={{ fontSize: '45px' }}
            className='font-semibold py-8 border-[#CCCBFF] border-[1.5px] bg-white'
          />
          {error ? (
            <p className='text-red-600 flex items-center gap-1'>
              <Ban className='size-4' />
              {error}
            </p>
          ) : correctionMessage ? (
            <p className='text-yellow-500 flex items-center gap-1'>
              <CheckCheck className='size-4' />
              {correctionMessage}
            </p>
          ) : (
            <p className='text-[#45454E]'>
              Must be with intervals of €1000 only
            </p>
          )}
        </div>

        {/* icon container */}
        <div className='h-full mb-6'>
          <Button
            type='button'
            size='icon'
            className='rounded-full bg-[#E0E0FF] shadow-none text-foreground hover:bg-primary/30'
            onClick={handleIncrement}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
