import type { Metadata } from 'next';

import '@/app/globals.css';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CLE',
  description: 'CLE 관리자 페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ko' className='relative bg-background'>
      <body className='flex h-screen min-w-3xl flex-col justify-between px-40 pt-9'>
        <main className='flex flex-1 flex-col'>{children}</main>
        <footer className='my-10'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
