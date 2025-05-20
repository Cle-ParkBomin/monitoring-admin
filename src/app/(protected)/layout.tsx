import Navigation from '@/components/layout/Navigation';
import { MENU } from '@/dummy/Menu';
import { ReactNode } from 'react';
import DarkModeToggle from '../DarkModeToggle';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <nav className='fixed top-0 bottom-0 left-0 z-10'>
        <Navigation menu={MENU} />
      </nav>

      <div className='flex justify-end'>
        <DarkModeToggle />
      </div>

      <div className='flex flex-1'>{children}</div>
    </>
  );
}
