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
      className='max-w-[1300px] mx-auto flex flex-col py-[90px] gap-[50px]'
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
              className='md:basis-1/2 lg:basis-1/3 rounded-[10px]'
            >
              <Testimonial item={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex gap-6 mt-8'>
          <CarouselPrevious />
          <CarouselNext />
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
      className='flex-1 min-h-[573px] rounded-[10px] text-white flex flex-col'
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
          className='object-cover rounded-[10px]'
        />
      </motion.div>
      <motion.div
        className='flex flex-col justify-end min-h-[573px] py-[25px] px-[30px] gap-2.5'
        style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}
        variants={textVariants}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className='text-lg pointer-events-auto'>
          &quot;{item.message}&quot;
        </p>
        <div className='border-b border-1 border-dashed border-[#3E3C3C] [border-dash-array:6_6]'></div>
        <div className='flex flex-col pointer-events-auto'>
          <p className='text-lg'>{item.name}</p>
          <p className='text-sm text-[#AEAEAE]'>{item.occupation}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
