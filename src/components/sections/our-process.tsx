import { steps } from '@/constants/steps';
import Image from 'next/image';

export default function OurProcess() {
  return (
    <section id='our-process' className='bg-[#CEF8F4]'>
      {/* section header */}
      <div>
        <h2>How it works</h2>
        <p>
          Get your loan approved and deposited in just 3 days — fast, simple,
          and secure.
        </p>
      </div>

      {/* steps container */}
      <div>
        {steps.map((step, index) => (
          <div key={index}>
            <div>
              <h5>{step.title}</h5>
              <p>{step.description}</p>
            </div>
            <div>
              <Image
                src={step.image}
                alt={step.title}
                width={187}
                height={220}
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
