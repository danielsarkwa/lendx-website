import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants/testimonials';

export default function Testimonials() {
  return (
    <section id='testimonials' className='flex flex-col py-[90px] gap-[50px] px-[100px]'>
      {/* section header */}
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col items-start w-fit gap-2'>
          <h2 className='text-5xl font-semibold leading-tight max-w-[475px]'>
            Loved by other dreamer like you.
          </h2>
          <p className='text-xl text-[#647581] font-regular leading-tight max-w-[470px]'>
            Start your journey today and begin to see your plan unfold without
            financial limitations.
          </p>
        </div>
        <Button className='w-fit'>Lend money</Button>
      </div>

      {/* testimonials container */}
      <div className='flex gap-[30px]'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex-1 min-h-[573px] overflow-clip rounded-[10px] text-white flex flex-col'
            style={{ position: 'relative' }}
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className='object-cover rounded-[10px]'
              style={{ position: 'absolute', zIndex: -1 }}
            />
            <div className='flex flex-col justify-end h-full py-[25px] px-[30px] gap-2.5 relative z-10'>
              <p>&quot;{testimonial.message}&quot;</p>
              <p>{testimonial.name}</p>
              <div className='border-b border-dashed border-[#3E3C3C] [border-dash-array:6_6]'></div>
              <p>{testimonial.occupation}</p>
            </div>
          </div>
        ))}
        {/* carousel controller */}
      </div>
    </section>
  );
}
