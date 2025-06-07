'use client';

import { ArrowRight, Loader2, PartyPopper, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

// Dynamically import FlipClockCountdown with SSR disabled
const FlipClockCountdown = dynamic(
  () => import('@leenguyen/react-flip-clock-countdown'),
  { ssr: false }
);

// these values are used from the URL search params
// e.g. ?counter=midsummereve
export enum events {
  MidsummerEve = 'midsummereve',
  NewYear = 'newyear',
}

const eventDetails = {
  [events.MidsummerEve]: {
    title: 'Celebrate Mid Summer Eve with Extra Cash in Hand',
    description:
      'Quick, easy loans to power your spring plans—approved in minutes!',
    icon: Sun,
    date: new Date('2025-06-20T00:00:00+03:00'), // June 20, 2025, 00:00 EEST
  },
  [events.NewYear]: {
    title: 'New Year, New Opportunities',
    description:
      'Start the year with a financial boost—apply for a loan today!',
    icon: PartyPopper,
    date: new Date('2025-12-31T00:00:00+02:00'), // December 31, 2025, 00:00 EET
  },
};

function CountDownBannerInner() {
  const searchParams = useSearchParams();
  const counter = searchParams.get('counter');
  const [isDismissed, setIsDismissed] = useState(false);

  // Use MidsummerEve as default if no counter is provided; return null for invalid counter
  let event: events | null;

  if (counter && Object.values(events).includes(counter as events)) {
    event = counter as events;
  } else if (counter === null) {
    event = events.MidsummerEve;
  } else {
    event = null;
  }

  if (!event || isDismissed) {
    return null;
  }
  const { title, description, icon: Icon, date } = eventDetails[event];

  const currentDate = new Date();
  if (currentDate > date) {
    return null;
  }

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  return (
    <section className='bg-[#504DFF] text-white relative'>
      <Button
        onClick={handleDismiss}
        variant='secondary'
        size='icon'
        className='absolute top-2 right-2 z-10 text-foreground size-8 rounded-full bg-white/60 lg:bg-white/10 lg:text-white'
        aria-label='Dismiss banner'
      >
        <X className='h-4 w-4' />
      </Button>

      <div className='max-w-[1300px] mx-auto py-4 pb-0 sm:pb-4 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8'>
        {/* content */}
        <div className='flex gap-3 sm:gap-5 items-center w-full lg:w-auto'>
          <Icon className='hidden sm:block w-8 h-8 sm:w-[35px] sm:h-[35px]' />
          <div className='flex flex-col gap-1'>
            <h3 className='text-lg sm:text-xl font-semibold leading-tight pr-4.5 sm:pr-0'>
              {title}
            </h3>
            <p className='text-sm sm:text-lg font-light leading-tight max-w-[300px] sm:max-w-[400px]'>
              {description}
            </p>
          </div>
        </div>

        {/* count down */}
        <div className='order-2 lg:order-1'>
          <div className='scale-[0.7] sm:scale-[0.8] lg:scale-[0.85]'>
            <FlipClockCountdown to={date} />
          </div>
        </div>

        {/* action */}
        <div className='order-1 lg:order-2 w-full lg:w-auto'>
          <Button
            className='bg-white text-foreground w-full lg:w-auto py-2 text-sm sm:text-base'
            size='lg'
          >
            Lend now
            <ArrowRight className='ml-2 w-4 h-4 sm:w-5 sm:h-5' />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function CountDownBanner() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-24'>
          <Loader2 className='animate-spin w-4 h-4' />
          <span className='ml-2'>Loading banner...</span>
        </div>
      }
    >
      <CountDownBannerInner />
    </Suspense>
  );
}
