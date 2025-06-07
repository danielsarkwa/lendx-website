'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PaymentSummary from '@/components/payment-summary';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import AmountInput from '@/components/amount-input';

import { useState } from 'react';
import CoApplicantForm from './co-applicant-forn';

export default function LoanForm() {
  const [hasCoApplicant, setHasCoApplicant] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className='bg-white rounded-[10px] shadow-[0_4px_12.8px_0px_rgba(124,124,124,0.1)] py-[30px] px-[35px] flex flex-col gap-[30px]'>
      {/* header */}
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-[32px] font-semibold text-foreground leading-tight'>
          Take a loan
        </h2>
        <p className='text-lg text-[#647581] font-regular leading-tight'>
          Complete this form to take a loan. Your information will be reviewed
          and approved in 3 days max.
        </p>
      </div>

      {/* form */}
      <form className='flex flex-col gap-[30px]'>
        <AmountInput />

        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='name' className='text-foreground'>
            Full name *
          </Label>
          <Input
            type='text'
            placeholder='eg: Janiel Jokkinen'
            className='py-5 text-[16px] placeholder:text-[16px]'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='email' className='text-foreground'>
            Email address *
          </Label>
          <Input
            type='email'
            placeholder='eg: janiel@mail.com'
            className='py-5 text-[16px] placeholder:text-[16px]'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='phone' className='text-foreground'>
            Phone number *
          </Label>
          <Input
            type='tel'
            placeholder='eg: +358 44 857 6689'
            className='py-5 text-[16px] placeholder:text-[16px]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='terms-1'
              className='w-5 h-5'
              checked={hasCoApplicant}
              onCheckedChange={(checked) => setHasCoApplicant(checked === true)}
            />
            <Label htmlFor='terms-1' className='text-base'>
              I have a co-applicant
            </Label>
          </div>
          <p className='pl-7 text-muted-foreground leading-tight'>
            If you have a co-applicant, you can check this box and provide their
            basic information.
          </p>
        </div>
        {hasCoApplicant && <CoApplicantForm />}
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='terms-2'
              className='w-5 h-5'
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
            />
            <Label htmlFor='terms-2' className='text-base'>
              Accept terms and conditions
            </Label>
          </div>
          <p className='pl-7 text-muted-foreground leading-tight'>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>

        <div className='border-b border-dashed border-[#ECE9E9] [border-dash-array:6_6]'></div>

        {/* payment summary */}
        <PaymentSummary amount={5000} />

        <div className=''>
          <Button type='submit' size='lg'>
            Submit application
            <Send />
          </Button>
        </div>
      </form>
    </div>
  );
}
