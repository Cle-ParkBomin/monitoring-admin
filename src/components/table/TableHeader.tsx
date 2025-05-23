import { getObjectKeys } from '@/utils/object';
import { ReactNode } from 'react';

interface TableHeaderProps<T extends { id: number }> {
  data: T[];
  renderHeader: (key: keyof T) => ReactNode;
}

export default function TableHeader<T extends { id: number }>({
  data,
  renderHeader,
}: TableHeaderProps<T>) {
  return (
    <thead className='border-grey-300 bg-grey-50 border border-b-0'>
      <tr className='text-14 leading-20 text-grey-700'>
        {getObjectKeys(data[0]).map((key) => (
          <th key={`table_header_${key.toString()}`} className='font-400 px-3 py-2.5'>
            <span className='block whitespace-pre-line break-keep'>{renderHeader(key)}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
