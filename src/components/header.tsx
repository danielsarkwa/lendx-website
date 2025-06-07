'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './language-switcher';
import { navItems } from '@/constants/nav-items';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={` bg-[#FAFAFA] transition-shadow duration-100 ${
        isScrolled ? 'shadow-xs' : ''
      }`}
    >
      <div className='container mx-auto flex items-center justify-between py-4 px-[100px]'>
        {/* logo */}
        <div>
          <a href='#'>
            <Image
              src='/lendx-logo-light.svg'
              alt='Lendx Logo'
              width={101}
              height={35}
            />
          </a>
        </div>

        {/* nav items */}
        <nav className='flex-1'>
          <ul className='flex justify-center items-center gap-8'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='transition-colors duration-200 hover:text-blue-600'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* language switcher */}
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
