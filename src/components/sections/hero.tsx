'use client';

import Image from 'next/image';
import LoadForm from '@/components/loan-form';

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div className='flex flex-col w-full mx-auto px-4 lg:flex-row lg:max-w-[1300px]'>
        {/* lhs */}
        <div
          className='py-8 flex-1'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div
            className='flex flex-col max-w-full gap-4 lg:max-w-[556px] lg:gap-6'
            style={{ position: 'relative' }}
          >
            <h1 className='text-3xl font-semibold leading-tight lg:text-[60px]'>
              Fast Cash for Your Bold Life
            </h1>
            <p className='text-base text-[#647581] font-regular leading-tight lg:text-xl'>
              Lendx delivers instant loans with zero hassle. Our user-friendly
              platform let’s you access cash in minutes from anywhere. Power
              your bold lifestyle with financial freedom—apply now and seize the
              moment!
            </p>
            <Image
              src='/graphics/pen-scribble-1.svg'
              alt='Pen Scribble'
              width={150}
              height={10}
              className='hidden lg:block'
              style={{
                position: 'absolute',
                top: '60px',
                left: '0px',
              }}
            />
            {/* Add sm-specific styles for text or scribble here if needed, e.g., sm:text-2xl */}
          </div>
        </div>

        {/* rhs */}
        <div
          className='py-8 flex-1'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <LoadForm />
          {/* Add sm-specific styles for form here if needed, e.g., sm:pt-4 */}
        </div>

        <Image
          src='/blur-effects/hero-blur.png'
          alt='Hero blur background'
          width={300}
          height={240}
          className='hidden lg:block'
          style={{
            position: 'absolute',
            left: 'calc(50% - 150px)',
            zIndex: -1,
          }}
        />
        {/* Add sm-specific styles for blur image here if needed, e.g., sm:block sm:left-0 */}
      </div>

      <Image
        src='/graphics/hero-illustration.svg'
        alt='Hero illustration'
        width={768}
        height={134}
        className='object-cover w-full'
        style={{
          position: 'absolute',
          top: 'calc(50% - 67px)',
          zIndex: -1,
        }}
      />
      {/* Add sm-specific styles for illustration here if needed, e.g., sm:top-0 */}
    </section>
  );
}
