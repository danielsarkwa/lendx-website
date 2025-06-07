'use client';

import Image from 'next/image';
import { navItems } from '@/constants/nav-items';
import { socialMediaIcons } from '@/constants/social-icons';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#0F1921]'>
      <div
        className='w-full mx-auto text-white p-6 flex flex-col gap-8 overflow-clip lg:max-w-[1300px] lg:p-[90px] lg:gap-[150px]'
        style={{ position: 'relative' }}
      >
        {/* top items */}
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start'>
          {/* business info */}
          <div className='flex flex-col gap-2'>
            <a href='#'>
              <Image
                src='/lendx-logo-dark.svg'
                alt='Lendx Logo'
                width={80}
                height={28}
                className='lg:w-[101px] lg:h-[35px]'
              />
            </a>
            <p className='text-base leading-tight max-w-[207px] sm:text-lg'>
              Smart and fast lending open to everyone.
            </p>

            {/* contact info */}
            <div className='flex flex-col gap-3 mt-9 lg:mt-9'>
              <p className='text-sm leading-tight flex items-center gap-2 sm:text-base'>
                <Mail className='size-4' />
                <a
                  href='mailto:support@lendx.fi'
                  className='hover:text-[#7b79e3] transition-colors duration-200'
                >
                  support@trylendx.com
                </a>
              </p>
              <p className='text-sm leading-tight flex items-center gap-2 sm:text-base'>
                <Phone className='size-4' />
                <a
                  href='tel:+358123456789'
                  className='hover:text-[#7b79e3] transition-colors duration-200'
                >
                  +358 123 456 789
                </a>
              </p>
              <p className='text-sm leading-tight flex items-center gap-2 sm:text-base'>
                <MapPin className='size-4' />
                <a
                  href='https://goo.gl/maps/xyz'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-[#7b79e3] transition-colors duration-200 max-w-[207px]'
                >
                  Rankinkatu 5, 20034 Helsinki, Finland
                </a>
              </p>
              {/* Add sm-specific styles for contact info here if needed, e.g., sm:text-xs */}
            </div>
          </div>

          {/* nav links */}
          <nav>
            <ul className='flex flex-col items-start gap-3 mt-6 sm:flex-row lg:justify-center lg:items-center lg:gap-8 lg:mt-0'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='text-sm transition-colors duration-200 hover:text-[#7b79e3] sm:text-base'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* bottom items */}
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center'>
          {/* lhs */}
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-16'>
            <p className='text-sm sm:text-base'>
              © 2025 Lendx Oy. All rights reserved.
            </p>
            <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'>
              <a
                href='#'
                className='text-sm font-[100] hover:underline transition-colors duration-200 hover:opacity-80 sm:text-base'
              >
                Terms of service
              </a>
              <span className='hidden sm:inline-block bg-[#5A8CB4] h-[4px] w-[4px] rounded-full sm:h-[5px] lg:w-[5px]'></span>
              <a
                href='#'
                className='text-sm font-[100] hover:underline transition-colors duration-200 hover:opacity-80 sm:text-base'
              >
                Privacy policy
              </a>
              <span className='hidden sm:inline-block bg-[#5A8CB4] h-[4px] w-[4px] rounded-full sm:h-[5px] lg:w-[5px]'></span>
              <a
                href='#'
                className='text-sm font-[100] hover:underline transition-colors duration-200 hover:opacity-80 sm:text-base'
              >
                Regulatory information
              </a>
            </div>
          </div>

          {/* rhs */}
          <div className='flex justify-start items-center gap-6 lg:gap-10'>
            {socialMediaIcons.map((item) => (
              <a
                key={item.platform}
                target='_blank'
                rel='noopener noreferrer'
                href={item.href}
                className='transition-transform duration-200 hover:scale-110 hover:opacity-80'
              >
                <Image
                  src={item.icon}
                  alt={item.platform}
                  width={20}
                  height={20}
                  className='sm:w-[24px] sm:h-[24px]'
                />
              </a>
            ))}
            {/* Add sm-specific styles for social icons here if needed, e.g., sm:gap-4 */}
          </div>
        </div>

        <Image
          src='/blur-effects/footer-blur.png'
          alt='Footer Blue Background'
          width={768}
          height={432}
          className='hidden lg:block'
          style={{
            position: 'absolute',
            bottom: -150,
            left: 0,
            zIndex: 0,
          }}
        />
        {/* Add sm-specific styles for the background image here if needed, e.g., sm:block sm:bottom-0 */}
      </div>
    </footer>
  );
}
