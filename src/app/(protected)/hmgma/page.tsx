'use client';

import Filter from '@/app/(protected)/hmgma/Filter';
import Search from '@/app/(protected)/hmgma/Search';
import Sort from '@/app/(protected)/hmgma/Sort';

export default function Home() {
  return (
    <div className='mt-8 flex flex-1'>
      <table className='flex flex-1 flex-col px-1'>
        {/* Table Header */}
        <caption className='flex flex-wrap justify-between gap-2 text-left'>
          <p className='text-24 leading-32 font-700'>표</p>
          <div className='flex gap-2'>
            <Search />
            <Sort />
            <Filter />
          </div>
        </caption>
      </table>
    </div>
  );
}
