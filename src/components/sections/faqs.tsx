'use client';

import Image from 'next/image';
import { faqs } from '@/constants/faqs';
import { Minus, Plus } from 'lucide-react';
import React from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section>
      {/* section header */}
      <div>
        <h2>FAQs</h2>
      </div>

      {/* FAQs container */}
      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <Image
        src='/illustrations/direction.svg'
        alt='FAQs Illustration'
        width={361}
        height={383}
        className='object-contain'
      />
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div onClick={onToggle} className='cursor-pointer'>
      <div>
        <h3>{faq.question}</h3>
        {isOpen && <p className='text-gray-700'>{faq.answer}</p>}
      </div>
      <div>
        {isOpen ? (
          <Minus className='w-6 h-6 text-primary cursor-pointer' />
        ) : (
          <Plus className='w-6 h-6 text-primary cursor-pointer' />
        )}
      </div>
    </div>
  );
}
