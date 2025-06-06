import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/constants/testimonials';

export default function Testimonials() {
  return (
    <section id='testimonials'>
      {/* section header */}
      <div>
        <h2>Loved by other dreamer like you.</h2>
        <p>
          Start your journey today and begin to see your plan unfold without
          financial limitations.
        </p>
        <Button>Lend money</Button>
      </div>

      {/* testimonials container */}
      <div>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={410}
              height={573}
              className='object-cover'
            />
            <p>{testimonial.message}</p>
            <p>{testimonial.name}</p>
            <div className='border-b border-dashed border-[#3E3C3C] [border-dash-array:6_6]'></div>
            <p>{testimonial.occupation}</p>
          </div>
        ))}
        {/* carousel controller */}
      </div>
    </section>
  );
}
