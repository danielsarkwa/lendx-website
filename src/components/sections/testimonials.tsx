import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants/testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='flex flex-col py-[90px] gap-[50px] px-[100px]'
    >
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
      <Carousel
        className='w-full'
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div
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
                <div className='flex flex-col justify-end min-h-[573px] py-[25px] px-[30px] gap-2.5 border'>
                  <p className='text-lg'>&quot;{testimonial.message}&quot;</p>
                  <div className='border-b border-1 border-dashed border-[#3E3C3C] [border-dash-array:6_6]'></div>
                  <div className='flex flex-col'>
                    <p className='text-lg'>{testimonial.name}</p>
                    <p className='text-sm text-[#AEAEAE]'>
                      {testimonial.occupation}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
