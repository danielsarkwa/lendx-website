'use client';

import { Badge } from '@/components/ui/badge';
import { partners } from '@/constants/partners';
import Image from 'next/image';

export default function Partners() {
  return (
    <section
      id='partners'
      className='w-full mx-auto py-16 flex flex-col gap-6 items-center lg:max-w-[1300px] lg:py-[90px] lg:gap-[50px]'
    >
      <div className='flex flex-col items-center gap-2'>
        <Badge className='bg-[#EBEBFF] text-[#6461FF] text-sm font-normal rounded-full px-2 lg:text-base lg:px-2.5'>
          Trusted by the best
        </Badge>
        <h3 className='max-w-[400px] px-4 text-lg text-center text-gray-900 leading-tight lg:max-w-[564px] lg:text-2xl'>
          Lendx is trusted and backed by 10+ leading banks around the world.
        </h3>
      </div>
      <div className='w-full overflow-hidden'>
        <div className='flex animate-scroll gap-8 items-center lg:gap-20'>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className='flex-shrink-0'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={80}
                height={45}
                className='object-contain lg:w-[105px] lg:h-[60px]'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
