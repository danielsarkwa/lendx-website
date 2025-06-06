import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PaymentSummary from '@/components/payment-summary';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import AmountInput from '@/components/amount-input';

export default function LoanForm() {
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
          <Label htmlFor='name'>Full name *</Label>
          <Input type='text' placeholder='eg: Daniel Jokkinen' />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='email'>Email address *</Label>
          <Input type='email' placeholder='eg: daniel@mail.com' />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='phone'>Phone number *</Label>
          <Input type='tel' placeholder='eg: +358 44 857 6689' />
        </div>
        <div className=''>
          <Checkbox id='terms-2' />
          <div className=''>
            <Label htmlFor='terms-2'>I have a co-applicant</Label>
            <p className=''>
              If you have a co-applicant, you can check this box and provide
              their basic information.
            </p>
          </div>
        </div>
        <div className=''>
          <Checkbox id='terms-2' />
          <div className=''>
            <Label htmlFor='terms-2'>Accept terms and conditions</Label>
            <p className=''>
              By clicking this checkbox, you agree to the terms and conditions.
            </p>
          </div>
        </div>

        <div className='border-b border-dashed border-[#ECE9E9] [border-dash-array:6_6]'></div>

        {/* payment summary */}
        <PaymentSummary amount={1000} />

        <div className=''>
          <Button type='submit'>
            Submit
            <Send />
          </Button>
        </div>
      </form>
    </div>
  );
}
