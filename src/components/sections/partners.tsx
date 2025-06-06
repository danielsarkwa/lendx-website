import { Badge } from '@/components/ui/badge';
import partners from '@/constants/partners';
import Image from 'next/image';

export default function Partners() {
  return (
    <section className='py-[90px] flex flex-col gap-[50px] items-center w-full'>
      <div className='flex flex-col items-center gap-2.5'>
        <Badge className='bg-[#EBEBFF] text-[#6461FF] text-base font-normal rounded-full px-2.5'>
          Trusted by the best
        </Badge>
        <h3 className='max-w-[564px] text-2xl text-center text-gray-900 leading-tight'>
          Lendx is trusted and backed by 10+ leading banks around the world.
        </h3>
      </div>
      <div className='w-full overflow-hidden'>
        <div className='flex animate-scroll gap-20 items-center'>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className='flex-shrink-0'>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={105}
                height={60}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
