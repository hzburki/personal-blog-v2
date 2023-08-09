import './globals.css';

import type { Metadata } from 'next';

// Importing Google Fonts
import { Nunito, Shantell_Sans } from 'next/font/google';

// Custom Imports
import { Header, Footer } from '@/components';

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito',
});

const shantellSans = Shantell_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-shantell-sans',
});

export const metadata: Metadata = {
  title: 'hzburki',
  description: 'Personal website and blog of Haseeb Zia Burki',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${nunito.variable} ${shantellSans.variable} mx-auto max-w-4xl font-nunito`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
