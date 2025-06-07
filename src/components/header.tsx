'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './language-switcher';
import { navItems } from '@/constants/nav-items';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`bg-[#FAFAFA] transition-shadow duration-100 ${
        isScrolled ? 'shadow-xs' : ''
      }`}
    >
      <div className='max-w-[1300px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
        {/* logo */}
        <div className='flex items-center'>
          <a href='#'>
            <Image
              src='/lendx-logo-light.svg'
              alt='Lendx Logo'
              width={101}
              height={35}
              className='w-20 sm:w-24 lg:w-[101px]'
            />
          </a>
        </div>

        {/* Desktop nav items */}
        <nav className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex items-center gap-6 lg:gap-8'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='text-sm lg:text-base transition-colors duration-200 hover:text-blue-600'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <div className='flex items-center gap-4'>
          <LanguageSwitcher />
          <button
            className='lg:hidden p-2'
            onClick={toggleMobileMenu}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav items */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className='px-4 pb-4'>
          <ul className='flex flex-col items-start gap-4'>
            {navItems.map((item) => (
              <li key={item.href} className='w-full'>
                <a
                  href={item.href}
                  className='block py-2 text-base transition-colors duration-200 hover:text-blue-600'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
