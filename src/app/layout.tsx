import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/header';
import Footer from '@/components/footer';

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
