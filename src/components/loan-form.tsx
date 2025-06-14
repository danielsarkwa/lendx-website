'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import PaymentSummary from '@/components/payment-summary';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import AmountInput from '@/components/amount-input';
import { useState } from 'react';
import CoApplicantForm from '@/components/co-applicant-forn';
import {
  validateFullName,
  validateEmail,
  validatePhone,
} from '@/utils/form-validation';

export default function LoanForm() {
  // State for main applicant
  const [hasCoApplicant, setHasCoApplicant] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [amount, setAmount] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // State for co-applicant
  const [coApplicantFullName, setCoApplicantFullName] = useState('');
  const [coApplicantEmail, setCoApplicantEmail] = useState('');
  const [coApplicantPhone, setCoApplicantPhone] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    coApplicantFullName: '',
    coApplicantEmail: '',
    coApplicantPhone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', {
      amount,
      fullName,
      email,
      phone,
      hasCoApplicant,
      coApplicant: hasCoApplicant
        ? { coApplicantFullName, coApplicantEmail, coApplicantPhone }
        : null,
      acceptedTerms,
    });
  };

  return (
    <div className='bg-white rounded-[8px] shadow-[0_4px_12.8px_0px_rgba(124,124,124,0.1)] p-4 flex flex-col gap-4 lg:rounded-[10px] lg:p-[30px] lg:px-[35px] lg:gap-[30px]'>
      {/* header */}
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-xl font-semibold text-foreground leading-tight lg:text-[32px]'>
          Take a loan
        </h2>
        <p className='text-base text-[#647581] font-regular leading-tight lg:text-lg'>
          Complete this form to take a loan. Your information will be reviewed
          and approved in 3 days max.
        </p>
      </div>

      {/* form */}
      <form className='flex flex-col gap-4 lg:gap-[30px]'>
        <AmountInput value={amount} onChange={setAmount} />

        <div className='flex flex-col gap-1'>
          <Label htmlFor='name' className='text-foreground'>
            Full name *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='text'
              required
              placeholder='eg: Janiel Jokkinen'
              className='py-5 text-[16px] placeholder:text-[16px]'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => {
                const error = validateFullName(fullName);
                setErrors((prev) => ({ ...prev, fullName: error || '' }));
              }}
            />
            {errors.fullName && (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.fullName}
              </p>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <Label
            htmlFor='email'
            className='text-foreground text-sm lg:text-base'
          >
            Email address *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='email'
              required
              placeholder='eg: janiel@mail.com'
              className='py-5 text-[16px] placeholder:text-[16px]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                const error = validateEmail(email);
                setErrors((prev) => ({ ...prev, email: error || '' }));
              }}
            />
            {errors.email && (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <Label
            htmlFor='phone'
            className='text-foreground text-sm lg:text-base'
          >
            Phone number *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='tel'
              required
              placeholder='eg: +358 44 857 6689'
              className='py-5 text-[16px] placeholder:text-[16px]'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => {
                const error = validatePhone(phone);
                setErrors((prev) => ({ ...prev, phone: error || '' }));
              }}
              pattern='^\+?[0-9\s]+$'
            />
            {errors.phone ? (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.phone}
              </p>
            ) : (
              <p className='text-sm text-muted-foreground lg:text-base'>
                Include country code
              </p>
            )}
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='terms-1'
              className='w-4 h-4 sm:w-5 sm:h-5'
              checked={hasCoApplicant}
              onCheckedChange={(checked) => setHasCoApplicant(checked === true)}
            />
            <Label htmlFor='terms-1' className='text-sm sm:text-base'>
              I have a co-applicant
            </Label>
          </div>
          <p className='pl-6 text-muted-foreground leading-tight text-sm sm:pl-7 sm:text-base'>
            If you have a co-applicant, you can check this box and provide their
            basic information.
          </p>
        </div>

        {hasCoApplicant && (
          <CoApplicantForm
            fullName={coApplicantFullName}
            setFullName={setCoApplicantFullName}
            email={coApplicantEmail}
            setEmail={setCoApplicantEmail}
            phone={coApplicantPhone}
            setPhone={setCoApplicantPhone}
            errors={errors}
            setErrors={setErrors}
            setHasCoApplicant={setHasCoApplicant}
          />
        )}

        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <Checkbox
              id='terms-2'
              required
              className='w-4 h-4 sm:w-5 sm:h-5'
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
            />
            <Label htmlFor='terms-2' className='text-sm sm:text-base'>
              Accept terms and conditions
            </Label>
          </div>
          <p className='pl-6 text-muted-foreground leading-tight text-sm sm:pl-7 sm:text-base'>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>

        <div className='border-b border-dashed border-[#ECE9E9] [border-dash-array:6_6]'></div>

        {/* payment summary */}
        <PaymentSummary amount={amount} />

        <div>
          <Button
            type='submit'
            size='lg'
            onClick={handleSubmit}
            disabled={
              !fullName ||
              !email ||
              !phone ||
              !amount ||
              !acceptedTerms ||
              !!errors.fullName ||
              !!errors.email ||
              !!errors.phone ||
              (hasCoApplicant &&
                (!coApplicantFullName ||
                  !coApplicantEmail ||
                  !coApplicantPhone ||
                  !!errors.coApplicantFullName ||
                  !!errors.coApplicantEmail ||
                  !!errors.coApplicantPhone))
            }
          >
            Submit application
            <Send className='w-5 h-5' />
          </Button>
        </div>
      </form>
    </div>
  );
}
