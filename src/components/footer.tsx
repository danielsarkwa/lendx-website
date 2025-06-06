import Image from 'next/image';
import { navItems } from '@/constants/nav-items';
import { socialMediaIcons } from '@/constants/social-icons';

export default function Footer() {
  return (
    <footer className='bg-[#0F1921]'>
      {/* top items */}
      <div>
        {/* business info */}
        <div>
          <a href='#'>
            <Image
              src='/lendx-logo-dark.svg'
              alt='Lendx Logo'
              width={101}
              height={35}
            />
          </a>
          <p>Smart and fast lending open to everyone.</p>
        </div>

        {/* nav links */}
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* bottom items */}
      <div>
        {/* lhs */}
        <div>
          <p>© 2025 Lendx Oy. All rights reserved.</p>
          <div>
            <a href='#'>Terms of service</a>
            <a href='#'>Privacy policy</a>
            <a href='#'>Regulatory information</a>
          </div>
        </div>

        {/* rhs */}
        <div>
          {socialMediaIcons.map((item) => (
            <a
              key={item.platform}
              target='_blank'
              rel='noopener noreferrer'
              href={item.href}
            >
              <Image
                src={item.icon}
                alt={item.platform}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
