import { steps } from '@/constants/steps';
import Image from 'next/image';

export default function OurProcess() {
  return (
    <section
      id='our-process'
      className='max-w-[1300px] mx-auto bg-[#CEF8F4] rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] py-20 lg:py-[90px] px-4 sm:px-8 lg:px-[100px] flex flex-col items-center gap-10 sm:gap-8 lg:gap-[50px]'
    >
      {/* section header */}
      <div className='flex flex-col items-center w-full sm:w-fit relative'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-center'>
          How it works
        </h2>
        <p className='text-base sm:text-lg lg:text-xl text-[#647581] font-regular leading-tight max-w-[90%] sm:max-w-[470px] text-center mt-2 sm:mt-3'>
          Get your loan approved and deposited in just 3 days — fast, simple,
          and secure.
        </p>
        <Image
          src='/graphics/pen-scribble-2.svg'
          alt='Pen Scribble'
          width={120}
          height={10}
          sizes='(max-width: 640px) 120px, (max-width: 1024px) 150px, 196px'
          className='absolute w-[120px] top-8 right-[90px] sm:top-10 sm:w-[130px] sm:right-[120px] lg:top-[50px] lg:right-[90px] lg:w-auto'
        />
      </div>

      {/* steps container */}
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-6 lg:gap-[30px] w-full'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='p-4 sm:p-5 rounded-[10px] flex flex-col justify-between items-center gap-6 sm:gap-7 lg:gap-9 w-full sm:max-w-[404px]'
            style={{ backgroundColor: step.color }}
          >
            <div className='flex flex-col gap-1 sm:gap-2'>
              <h5 className='text-lg sm:text-xl font-semibold leading-tight text-center sm:text-left'>
                {step.title}
              </h5>
              <p className='text-base sm:text-base lg:text-lg text-[#51626D] font-regular leading-tight text-center sm:text-left'>
                {step.description}
              </p>
            </div>
            <div>
              <Image
                src={step.image}
                alt={step.title}
                width={150}
                height={180}
                sizes='(max-width: 640px) 150px, (max-width: 1024px) 170px, 187px'
                className='object-contain w-[120px] sm:w-[150px] lg:w-[187px] h-auto'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
