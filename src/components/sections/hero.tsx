'use client';

import Image from 'next/image';
import LoadForm from '@/components/loan-form';

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div className='flex flex-col w-full mx-auto px-4 sm:gap-2.5 lg:flex-row lg:max-w-[1300px]'>
        {/* lhs */}
        <div
          className='pt-16 pb-6 sm:pt-20 sm:pb-8 flex-1 lg:py-[200px]'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div
            className='flex flex-col max-w-full gap-4 lg:max-w-[556px] lg:gap-6'
            style={{ position: 'relative' }}
          >
            <h1 className='text-4xl font-semibold leading-tight lg:text-[60px]'>
              Fast Cash for Your Bold Life
            </h1>
            <p className='text-base text-[#647581] font-regular leading-tight sm:text-lg lg:text-xl'>
              Lendx delivers instant loans with zero hassle. Our user-friendly
              platform let’s you access cash in minutes from anywhere. Power
              your bold lifestyle with financial freedom—apply now and seize the
              moment!
            </p>
            <Image
              src='/graphics/pen-scribble-1.svg'
              alt='Pen Scribble'
              width={271}
              height={19}
              className='w-[200px] left-0 top-[37px] lg:top-[60px]'
              style={{
                position: 'absolute',
              }}
            />
          </div>
        </div>

        {/* rhs */}
        <div
          className='py-8 flex-1 lg:py-[100px]'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <LoadForm />
        </div>

        <Image
          src='/blur-effects/hero-blur.png'
          alt='Hero blur background'
          width={300}
          height={240}
          className='hidden sm:block object-cover w-[300px] h-[240px] right-1 sm:w-[400px] sm:h-[320px] sm:left-[500px] lg:w-[600px] lg:h-[480px] lg:left-[1000px] '
          style={{
            position: 'absolute',
            zIndex: -1,
          }}
        />
      </div>

      <Image
        src='/graphics/hero-illustration.svg'
        alt='Hero illustration'
        width={2400}
        height={240}
        className='object-cover w-full mx-auto'
        style={{
          position: 'absolute',
          top: 'calc(50% - 67px)',
          zIndex: -1,
        }}
      />
    </section>
  );
}
