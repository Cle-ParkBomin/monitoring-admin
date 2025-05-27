import { getObjectKeys } from '@/utils/object';
import { ReactNode } from 'react';

interface TableHeaderProps<T extends object> {
  data: T[];
  renderHeader: (key: keyof T) => ReactNode;
}

export default function TableHeader<T extends object>({ data, renderHeader }: TableHeaderProps<T>) {
  return (
    <thead className='border-grey-300 bg-grey-50 justify-between border border-b-0'>
      <tr className='flex flex-1 justify-between'>
        {getObjectKeys(data[0]).map((key) => (
          <th
            key={`table_header_${key.toString()}`}
            className='text-14 leading-20 text-grey-700 font-400 flex flex-1 items-center gap-1 whitespace-pre-line break-keep px-3 py-2.5'
          >
            {renderHeader(key)}
          </th>
        ))}
      </tr>
    </thead>
  );
}
