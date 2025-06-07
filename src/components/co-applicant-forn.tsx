import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

export default function CoApplicantForm() {
  return (
    <div className='bg-[#F8F7F7] rounded-[10px] py-4 px-[18px] flex flex-col gap-6'>
      {/* header */}
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-xl font-semibold leading-tight'>
          Co-applicant information
        </h2>
        <p className='text-lg text-[#61737F] font-regular leading-tight'>
          Provide the basic information for the co-applicant.
        </p>
      </div>

      {/* form */}
      <form className='flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='name' className='text-foreground'>
            Full name *
          </Label>
          <Input
            type='text'
            placeholder='eg: Janiel Jokkinen'
            className='py-5 text-[16px] placeholder:text-[16px] bg-white'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='email' className='text-foreground'>
            Email address *
          </Label>
          <Input
            type='email'
            placeholder='eg: janiel@mail.com'
            className='py-5 text-[16px] placeholder:text-[16px] bg-white'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='phone' className='text-foreground'>
            Phone number *
          </Label>
          <Input
            type='tel'
            placeholder='eg: +358 44 857 6689'
            className='py-5 text-[16px] placeholder:text-[16px] bg-white'
          />
        </div>
        <div className=''>
          <Button
            size='lg'
            variant='destructive'
            className='bg-[#FAD6D8] text-[#CD1B24] hover:bg-[#FAD6D8]'
          >
            Remove co-applicant
            <Trash2 />
          </Button>
        </div>
      </form>
    </div>
  );
}
