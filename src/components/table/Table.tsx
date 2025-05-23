import Filter from '@/components/table/Filter';
import Search from '@/components/table/Search';
import Sort from '@/components/table/Sort';
import TableBody from '@/components/table/TableBody';
import TableHeader from '@/components/table/TableHeader';
import { ReactNode } from 'react';

interface TableProps<T extends { id: number }> {
  data: T[];
  filterBody: { title: string; content: ReactNode }[];
  handleSearch: (value: string) => void;
  renderHeader: (key: keyof T) => ReactNode;
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function Table<T extends { id: number }>({
  data,
  filterBody,
  handleSearch,
  renderHeader,
  renderCell,
}: TableProps<T>) {
  if (data.length < 1)
    return (
      <div className='mt-8 flex flex-1 items-center justify-center'>
        <p>데이터가 없습니다.</p>
      </div>
    );

  return (
    <div className='mt-8 flex flex-1 flex-col'>
      <div className='flex flex-wrap justify-between gap-2 text-left'>
        <p className='text-24 leading-32 font-700'>HMGMA</p>
        <div className='flex gap-2'>
          <Search handleSearch={handleSearch} />
          <Sort data={data} renderHeader={renderHeader} handleSearch={handleSearch} />
          <Filter filterBody={filterBody} handleSearch={handleSearch} />
        </div>
      </div>
      <table className='px-1 text-left'>
        <TableHeader data={data} renderHeader={renderHeader} />

        <TableBody data={data} renderCell={renderCell} />
      </table>
    </div>
  );
}
