'use client';

import { ArrowRight, PartyPopper, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCountdown } from '@/util/calculate-count-down';
import { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

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

export default function CountDownBanner({
  event = events.MidsummerEve,
}: {
  event?: events;
}) {
  const { title, description, icon: Icon, date } = eventDetails[event];
  const [countdown, setCountdown] = useState(getCountdown(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(date));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [date]);

  const { days, hours, minutes, seconds } = countdown;

  return (
    <section className=' bg-[#504DFF]'>
      <div className='container mx-auto text-white py-5 px-[100px] flex items-center justify-between'>
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
        {/* <div className='flex items-center justify-between gap-6'>
          <div className='flex flex-col items-center min-w-[45px]'>
            <p className='font-bold text-4xl leading-8'>{days}</p>
            <p className='text-[15px] font-[100]'>days</p>
          </div>
          <div className='flex flex-col items-center min-w-[45px]'>
            <p className='font-bold text-4xl leading-8'>{hours}</p>
            <p className='text-[15px] font-[100]'>hrs</p>
          </div>
          <div className='flex flex-col items-center min-w-[45px]'>
            <p className='font-bold text-4xl leading-8'>{minutes}</p>
            <p className='text-[15px] font-[100]'>mins</p>
          </div>
          <div className='flex flex-col items-center min-w-[45px]'>
            <p className='font-bold text-4xl leading-8'>{seconds}</p>
            <p className='text-[15px] font-[100]'>secs</p>
          </div>
        </div> */}
        <FlipClockCountdown to={date} />

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
