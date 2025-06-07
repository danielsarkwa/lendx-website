import Image from 'next/image';
import { navItems } from '@/constants/nav-items';
import { socialMediaIcons } from '@/constants/social-icons';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#0F1921]'>
      <div
        className='max-w-[1300px] mx-auto text-white p-[90px] flex flex-col gap-[150px] overflow-clip'
        style={{ position: 'relative' }}
      >
        {/* top items */}
        <div className='flex justify-between items-start'>
          {/* business info */}
          <div className='flex flex-col gap-2.5'>
            <a href='#'>
              <Image
                src='/lendx-logo-dark.svg'
                alt='Lendx Logo'
                width={101}
                height={35}
              />
            </a>
            <p className='text-lg leading-tight max-w-[207px]'>
              Smart and fast lending open to everyone.
            </p>

            {/* contact info */}
            <div className='flex flex-col gap-4 mt-9'>
              <p className='text-base leading-tight flex items-center gap-2'>
                <Mail className='size-4' />
                <a
                  href='mailto:support@lendx.fi'
                  className='hover:text-[#7b79e3] transition-colors duration-200'
                >
                  support@trylendx.com
                </a>
              </p>
              <p className='text-base leading-tight flex items-center gap-2'>
                <Phone className='size-4' />
                <a
                  href='tel:+358123456789'
                  className='hover:text-[#7b79e3] transition-colors duration-200'
                >
                  +358 123 456 789
                </a>
              </p>
              <p className='text-base leading-tight flex items-center gap-2'>
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
            </div>
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

        <Image
          src='/blur-effects/footer-blur.png'
          alt='Footer Blue Background'
          width={1920}
          height={1080}
          style={{
            position: 'absolute',
            bottom: -150,
            left: 0,
            zIndex: 0,
          }}
        />
      </div>
    </footer>
  );
}
