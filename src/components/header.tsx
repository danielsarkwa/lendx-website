import Image from 'next/image';
import LanguageSwitcher from './language-switcher';
import { navItems } from '@/constants/nav-items';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between py-4 px-[100px] bg-[#FAFAFA]'>
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

          <li>
            <Button>Lend Money</Button>
          </li>
        </ul>
      </nav>

      {/* language switcher */}
      <div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
