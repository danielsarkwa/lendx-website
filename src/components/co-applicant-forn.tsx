/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import {
  validateFullName,
  validateEmail,
  validatePhone,
} from '@/utils/form-validation';

interface CoApplicantFormProps {
  fullName: string;
  setFullName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  errors: {
    coApplicantFullName: string;
    coApplicantEmail: string;
    coApplicantPhone: string;
  };
  setErrors: (errors: any) => void;
  setHasCoApplicant: (value: boolean) => void;
}

export default function CoApplicantForm({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  errors,
  setErrors,
  setHasCoApplicant,
}: CoApplicantFormProps) {
  return (
    <div className='bg-[#F8F7F7] rounded-[10px] py-4 px-[18px] flex flex-col gap-6'>
      {/* header */}
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-xl font-semibold leading-tight'>
          Co-applicant information
        </h2>
        <p className='text-base text-[#61737F] font-regular leading-tight'>
          Provide the basic information for the co-applicant.
        </p>
      </div>

      {/* form */}
      <div className='flex flex-col gap-4 lg:gap-[30px]'>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='name' className='text-foreground'>
            Full name *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='text'
              required
              placeholder='eg: Janiel Jokkinen'
              className='py-5 text-[16px] placeholder:text-[16px] bg-white'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => {
                const error = validateFullName(fullName);
                setErrors((prev: any) => ({
                  ...prev,
                  coApplicantFullName: error || '',
                }));
              }}
            />
            {errors.coApplicantFullName && (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.coApplicantFullName}
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='email' className='text-foreground'>
            Email address *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='email'
              required
              placeholder='eg: janiel@mail.com'
              className='py-5 text-[16px] placeholder:text-[16px] bg-white'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                const error = validateEmail(email);
                setErrors((prev: any) => ({
                  ...prev,
                  coApplicantEmail: error || '',
                }));
              }}
            />
            {errors.coApplicantEmail && (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.coApplicantEmail}
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='phone' className='text-foreground'>
            Phone number *
          </Label>
          <div className='flex flex-col gap-0.5'>
            <Input
              type='tel'
              required
              placeholder='eg: +358 44 857 6689'
              className='py-5 text-[16px] placeholder:text-[16px] bg-white'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => {
                const error = validatePhone(phone);
                setErrors((prev: any) => ({
                  ...prev,
                  coApplicantPhone: error || '',
                }));
              }}
              pattern='^\+?[0-9\s]+$'
            />
            {errors.coApplicantPhone ? (
              <p className='text-red-600 flex items-center gap-1 text-sm lg:text-base'>
                {errors.coApplicantPhone}
              </p>
            ) : (
              <p className='text-sm lg:text-base text-muted-foreground'>
                Include country code
              </p>
            )}
          </div>
        </div>
        <div className=''>
          <Button
            size='lg'
            variant='destructive'
            onClick={() => {
              setHasCoApplicant(false);
              setFullName('');
              setEmail('');
              setPhone('');
              setErrors({
                coApplicantFullName: '',
                coApplicantEmail: '',
                coApplicantPhone: '',
              });
            }}
            className='bg-[#FAD6D8] text-[#CD1B24] hover:bg-[#FAD6D8]'
          >
            Remove co-applicant
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
}
