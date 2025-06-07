'use client';

import Image from 'next/image';
import { faqs } from '@/constants/faqs';
import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQs() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section
      id='faqs'
      className='bg-white overflow-clip'
      style={{ position: 'relative' }}
    >
      <div className='lg:max-w-[1300px] lg:mx-auto w-full mx-auto flex flex-col lg:flex-row justify-between py-20 lg:py-[90px] px-4'>
        {/* Section header */}
        <div className='mb-6 lg:mb-0 text-center'>
          <h2 className='text-3xl font-semibold leading-tight lg:text-5xl'>
            FAQs
          </h2>
        </div>

        {/* FAQs container */}
        <div className='flex flex-col gap-3 w-full lg:w-auto'>
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
          width={200}
          height={212}
          className='object-contain hidden lg:block'
          style={{
            position: 'absolute',
            zIndex: 0,
            bottom: '-8px',
            left: '-11px',
          }}
        />
      </div>
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
    <motion.div
      onClick={onToggle}
      className='cursor-pointer w-full bg-[#F7F7F7] rounded-[10px] p-4 flex justify-between items-center gap-4 transition-colors duration-250 hover:bg-[#f2f1f1] lg:w-[700px] lg:p-6'
      layout
      transition={{ layout: { duration: 0.2, ease: 'easeOut' } }}
    >
      <div className='flex-1 flex flex-col gap-1.5'>
        <h3 className='text-base text-foreground leading-tight lg:text-lg'>
          {faq.question}
        </h3>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              className='text-base text-[#647581] leading-tight lg:text-lg'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      <div>
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key='minus'
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Minus className='w-5 h-5 text-primary cursor-pointer lg:w-6 lg:h-6' />
            </motion.div>
          ) : (
            <motion.div
              key='plus'
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Plus className='w-5 h-5 text-primary cursor-pointer lg:w-6 lg:h-6' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
