import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PaymentSummary from '@/components/payment-summary';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import AmountInput from '@/components/amount-input';

export default function LoanForm() {
  return (
    <div>
      {/* header */}
      <h2>Take a loan</h2>
      <p className=''>
        Complete this form to take a loan. Your information will be reviewed and
        approved in 3 days max.
      </p>

      {/* form */}
      <form className=''>
        <AmountInput />

        <div className=''>
          <Label htmlFor='name'>Full name *</Label>
          <Input type='text' placeholder='eg: Daniel Jokkinen' />
        </div>
        <div className=''>
          <Label htmlFor='email'>Email address *</Label>
          <Input type='email' placeholder='eg: daniel@mail.com' />
        </div>
        <div className=''>
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
