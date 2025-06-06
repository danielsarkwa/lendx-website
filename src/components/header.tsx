import Image from 'next/image';
import LanguageSwitcher from './language-switcher';
import { navItems } from '@/constants/nav-items';

export function Header() {
  return (
    <header>
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
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* language switcher */}
      <div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
