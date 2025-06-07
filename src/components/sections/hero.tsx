import Image from 'next/image';
import LoadForm from '@/components/loan-form';

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div className='flex max-w-[1300px] mx-auto'>
        {/* lhs */}
        <div
          className='py-[200px] flex-1'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div
            className='flex flex-col max-w-[556px] gap-6'
            style={{ position: 'relative' }}
          >
            <h1 className='text-[60px] font-semibold leading-tight'>
              Fast Cash for Your Bold Life
            </h1>
            <p className='text-xl text-[#647581] font-regular leading-tight'>
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
              style={{
                position: 'absolute',
                top: '60px',
                left: '0px',
              }}
            />
          </div>
        </div>

        {/* rhs */}
        <div
          className='flex-1 py-[100px]'
          style={{ position: 'relative', zIndex: 1 }}
        >
          <LoadForm />
        </div>

        <Image
          src='/blur-effects/hero-blur.png'
          alt='Hero blur background'
          width={500}
          height={400}
          style={{
            position: 'absolute',
            left: 'calc(50% - 200px)',
            zIndex: -1,
          }}
        />
      </div>

      <Image
        src='/graphics/hero-illustration.svg'
        alt='Hero illustration'
        width={2400}
        height={420}
        className='object-cover'
        style={{
          width: '100%',
          position: 'absolute',
          top: 'calc(50% - 210px)',
          zIndex: -1,
        }}
      />
    </section>
  );
}
