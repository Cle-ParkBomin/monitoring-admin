import DarkModeToggle from '@/app/ThemeMode';
import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className='flex justify-end'>
        <DarkModeToggle />
      </div>

      <div className='flex flex-1'>{children}</div>
    </>
  );
}
