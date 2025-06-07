'use client';

import { Ban, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function AmountInput({ value, onChange }: AmountInputProps) {
  const [error, setError] = React.useState('');

  const handleIncrement = () => {
    if (value < 20000) {
      onChange(Math.min(value + 1000, 20000));
      setError('');
    }
  };

  const handleDecrement = () => {
    if (value > 1000) {
      onChange(Math.max(value - 1000, 1000));
      setError('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow empty input for better UX
    if (inputValue === '') {
      onChange(0);
      setError('');
      return;
    }

    const numValue = parseInt(inputValue, 10);

    // Check if it's a valid number
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      return;
    }

    // Check range
    if (numValue < 1000) {
      setError('Minimum amount is €1000');
      onChange(numValue);
      return;
    }

    if (numValue > 20000) {
      setError('Maximum amount is €20,000');
      onChange(numValue);
      return;
    }

    // Check if it's in intervals of 1000
    if (numValue % 1000 !== 0) {
      setError('Amount must be in intervals of €1000');
      onChange(numValue);
      return;
    }

    // Valid input
    setError('');
    onChange(numValue);
  };

  const handleInputBlur = () => {
    // If the value is invalid or empty on blur, reset to nearest valid value
    if (value === 0 || value < 1000) {
      onChange(1000);
      setError('');
    } else if (value > 20000) {
      onChange(20000);
      setError('');
    } else if (value % 1000 !== 0) {
      // Round to nearest 1000
      const rounded = Math.round(value / 1000) * 1000;
      const clamped = Math.max(1000, Math.min(20000, rounded));
      onChange(clamped);
      setError('');
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
            disabled={value <= 1000}
          >
            <Minus />
          </Button>
        </div>

        {/* input container */}
        <div className='flex-1 flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <Input
              type='text'
              value='€'
              readOnly
              style={{ fontSize: '45px' }}
              className='font-semibold py-8 border-none bg-white w-[65px]'
            />
            <Input
              type='number'
              placeholder='1000'
              min='1000'
              max='20000'
              step='1000'
              pattern='[0-9]*'
              inputMode='numeric'
              value={value || ''}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              style={{
                fontSize: '45px',
              }}
              className='font-semibold py-8 border-[#CCCBFF] border-[1.5px] bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
          </div>
          <div className='pl-[65px]'>
            {error ? (
              <p className='text-red-600 flex items-center gap-1'>
                <Ban className='size-4' />
                {error}
              </p>
            ) : (
              <p className='text-[#45454E]'>
                Must be with intervals of €1000 only
              </p>
            )}
          </div>
        </div>

        {/* icon container */}
        <div className='h-full mb-6'>
          <Button
            type='button'
            size='icon'
            className='rounded-full bg-[#E0E0FF] shadow-none text-foreground hover:bg-primary/30'
            onClick={handleIncrement}
            disabled={value >= 20000}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
