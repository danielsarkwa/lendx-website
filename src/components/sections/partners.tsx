import { Badge } from '@/components/ui/badge';
import partners from '@/constants/partners';
import Image from 'next/image';

export default function Partners() {
  return (
    <section className='bg-amber-50 py-[90] flex flex-col gap-[50px] w-full'>
      <div className='flex flex-col items-center w-fit'>
        <Badge className='bg-[#EBEBFF] text-[#6461FF]'>
          Trusted by the best
        </Badge>
        <h3 className='max-w-[595px] text-2xl text-center text-gray-900'>
          Lendx is trusted and backed by 10+ leading banks around the world.
        </h3>
      </div>
      <div className='flex items-center gap-20'>
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.logo}
            alt={partner.name}
            width={105}
            height={60}
            className='object-contain'
          />
        ))}
      </div>
    </section>
  );
}
