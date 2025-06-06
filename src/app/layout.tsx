import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const switzer = localFont({
  src: '../assets/fonts/Switzer-Variable.woff2',
  variable: '--font-switzer',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Lendx - Smart and fast lending open to everyone.',
  description:
    'Lendx delivers instant loans with zero hassle. Our user-friendly platform lets you access cash in minutes from anywhere. Power your bold lifestyle with financial freedom—apply now and seize the moment!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${switzer.variable}`}>
        {/* count down banner */}
        {/* header component */}
        <main>{children}</main>
        {/* footer component */}
      </body>
    </html>
  );
}
