'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants/testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='w-full mx-auto flex flex-col py-20 gap-6 lg:max-w-[1300px] lg:py-[100px] lg:gap-[50px]'
    >
      {/* section header */}
      <div className='flex flex-col gap-3 px-4 lg:gap-5'>
        <div className='flex flex-col items-start w-full gap-2 lg:max-w-[475px]'>
          <h2 className='text-3xl font-semibold leading-tight lg:text-5xl lg:max-w-[475px]'>
            Loved by other dreamer like you.
          </h2>
          <p className='text-base text-[#647581] font-regular leading-tight lg:text-xl lg:max-w-[470px]'>
            Start your journey today and begin to see your plan unfold without
            financial limitations.
          </p>
        </div>
        <Button size='lg' className='w-fit lg:size-default'>
          Lend money
        </Button>
      </div>

      {/* testimonials container */}
      <Carousel
        className='w-full px-4'
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className='basis-full md:basis-1/2 lg:basis-1/3 rounded-[8px] lg:rounded-[10px]'
            >
              <Testimonial item={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex gap-4 mt-4 lg:gap-6 lg:mt-8'>
          <CarouselPrevious className='w-8 h-8 lg:w-10 lg:h-10' />
          <CarouselNext className='w-8 h-8 lg:w-10 lg:h-10' />
        </div>
      </Carousel>
    </section>
  );
}

function Testimonial({ item }: { item: (typeof testimonials)[0] }) {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.06 },
  };

  const textVariants = {
    initial: { y: 0 },
    hover: { y: -10 },
  };

  return (
    <motion.div
      className='flex-1 min-h-[420px] rounded-[8px] text-white flex flex-col lg:min-h-[573px] lg:rounded-[10px]'
      style={{ position: 'relative', overflow: 'hidden' }}
      initial='initial'
      whileHover='hover'
    >
      <motion.div
        variants={cardVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'auto',
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className='object-cover rounded-[8px] lg:rounded-[10px]'
        />
      </motion.div>
      <motion.div
        className='flex flex-col justify-end min-h-[420px] py-4 px-5 gap-2 lg:min-h-[573px] lg:py-[25px] lg:px-[30px] lg:gap-2.5'
        style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}
        variants={textVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className='text-base pointer-events-auto lg:text-lg'>
          &quot;{item.message}&quot;
        </p>
        <div className='border-b border-1 border-dashed border-[#3E3C3C] [border-dash-array:6_6]'></div>
        <div className='flex flex-col pointer-events-auto'>
          <p className='text-base lg:text-lg'>{item.name}</p>
          <p className='text-sm text-[#AEAEAE] lg:text-sm'>{item.occupation}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
