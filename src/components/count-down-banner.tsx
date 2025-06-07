'use client';

import { ArrowRight, PartyPopper, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { useSearchParams } from 'next/navigation';

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

export default function CountDownBanner() {
  const searchParams = useSearchParams();
  const counter = searchParams.get('counter');

  // Use MidsummerEve as default if no counter is provided; return null for invalid counter
  let event: events | null;

  if (counter && Object.values(events).includes(counter as events)) {
    event = counter as events;
  } else if (counter === null) {
    event = events.MidsummerEve;
  } else {
    event = null;
  }

  // Do not render the counter component if the counter from the params is invalid
  if (!event) {
    return null;
  }
  const { title, description, icon: Icon, date } = eventDetails[event];

  // Check if the event is past and return null if it is
  const currentDate = new Date();
  if (currentDate > date) {
    return null;
  }

  return (
    <section className=' bg-[#504DFF]'>
      <div className='max-w-[1300px] mx-auto text-white py-1 flex items-center justify-between'>
        {/* content */}
        <div className='flex gap-5 items-center'>
          <Icon className='w-[35px] h-[35px]' />
          <div>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='text-lg font-light leading-tight max-w-[400px]'>
              {description}
            </p>
          </div>
        </div>

        {/* count down */}
        <FlipClockCountdown to={date} style={{ transform: 'scale(0.7)' }} />

        {/* action */}
        <div>
          <Button className='bg-white text-foreground'>
            Lend now
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
