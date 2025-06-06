import { steps } from '@/constants/steps';
import Image from 'next/image';

export default function OurProcess() {
  return (
    <section
      id='our-process'
      className='bg-[#CEF8F4] rounded-[50px] py-[90px] px-[100px] flex flex-col items-center gap-[50px]'
    >
      {/* section header */}
      <div className='flex flex-col items-center w-fit'>
        <h2 className='text-5xl font-semibold leading-tight text-center'>
          How it works
        </h2>
        <p className='text-xl text-[#647581] font-regular leading-tight max-w-[470px] text-center'>
          Get your loan approved and deposited in just 3 days — fast, simple,
          and secure.
        </p>
      </div>

      {/* steps container */}
      <div className='flex gap-[30px]'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='p-5 rounded-[10px] flex flex-col justify-between items-center gap-9 max-w-[404px]'
            style={{ backgroundColor: step.color }}
          >
            <div className='flex flex-col gap-1'>
              <h5 className='text-xl font-semibold leading-tight'>
                {step.title}
              </h5>
              <p className='text-lg text-[#51626D] font-regular leading-tight'>
                {step.description}
              </p>
            </div>
            <div>
              <Image
                src={step.image}
                alt={step.title}
                width={187}
                height={220}
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
