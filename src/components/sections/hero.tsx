import Image from 'next/image';
import LoadForm from '@/components/loan-form';

export default function Hero() {
  return (
    <section className=''>
      {/* lhs */}
      <div>
        <h1>Fast Cash for Your Bold Lifes</h1>
        <p>
          Lendx delivers instant loans with zero hassle. Our user-friendly
          platform let’s you access cash in minutes from anywhere. Power your
          bold lifestyle with financial freedom—apply now and seize the moment!
        </p>
        <Image
          src='/graphics/pen-scribble-1.svg'
          alt='Pen Scribble'
          width={271}
          height={19}
        />
      </div>

      {/* rhs */}
      <div>
        <LoadForm />
      </div>
    </section>
  );
}
