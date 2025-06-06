import Image from 'next/image';
import { navItems } from '@/constants/nav-items';
import { socialMediaIcons } from '@/constants/social-icons';

export default function Footer() {
  return (
    <footer className='bg-[#0F1921] text-white px-[100px] p-[90px] flex flex-col gap-48'>
      {/* top items */}
      <div className='flex justify-between items-start'>
        {/* business info */}
        <div className='max-w-[207px] flex flex-col gap-2.5'>
          <a href='#'>
            <Image
              src='/lendx-logo-dark.svg'
              alt='Lendx Logo'
              width={101}
              height={35}
            />
          </a>
          <p className='text-lg leading-tight'>
            Smart and fast lending open to everyone.
          </p>
        </div>

        {/* nav links */}
        <nav>
          <ul className='flex justify-center items-center gap-8'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='transition-colors duration-200 hover:text-[#7b79e3]'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* bottom items */}
      <div className='flex justify-between items-center'>
        {/* lhs */}
        <div className='flex items-center gap-16'>
          <p>© 2025 Lendx Oy. All rights reserved.</p>
          <div className='flex items-center gap-3'>
            <a
              href='#'
              className='font-[100] hover:underline transition-colors duration-200 hover:opacity-80'
            >
              Terms of service
            </a>
            <span className='bg-[#5A8CB4] h-[5px] w-[5px] rounded-full'></span>
            <a
              href='#'
              className='font-[100] hover:underline transition-colors duration-200 hover:opacity-80'
            >
              Privacy policy
            </a>
            <span className='bg-[#5A8CB4] h-[5px] w-[5px] rounded-full'></span>
            <a
              href='#'
              className='font-[100] hover:underline transition-colors duration-200 hover:opacity-80'
            >
              Regulatory information
            </a>
          </div>
        </div>

        {/* rhs */}
        <div className='flex justify-between items-center gap-10'>
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
