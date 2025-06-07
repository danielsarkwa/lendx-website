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
      className='flex justify-between py-[90px] px-[100px] bg-white overflow-clip'
      style={{ position: 'relative' }}
    >
      {/* section header */}
      <div className=''>
        <h2 className='text-5xl font-semibold leading-tight text-center'>
          FAQs
        </h2>
      </div>

      {/* FAQs container */}
      <div className='flex flex-col gap-3'>
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
        style={{
          position: 'absolute',
          zIndex: 0,
          bottom: '-8px',
          left: '-11px',
        }}
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
    <motion.div
      onClick={onToggle}
      className='cursor-pointer w-[729px] bg-[#F7F7F7] rounded-[10px] p-6 flex justify-between items-center gap-4 transition-colors duration-250 hover:bg-[#f2f1f1]'
      layout
      transition={{ layout: { duration: 0.2, ease: 'easeOut' } }}
    >
      <div className='flex-1 flex flex-col gap-1.5'>
        <h3 className='text-lg text-foreground leading-tight'>
          {faq.question}
        </h3>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              className='text-lg text-[#647581] leading-tight'
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
              <Minus className='w-6 h-6 text-primary cursor-pointer' />
            </motion.div>
          ) : (
            <motion.div
              key='plus'
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Plus className='w-6 h-6 text-primary cursor-pointer' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
