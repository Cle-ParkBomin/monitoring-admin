import { getObjectEntries } from '@/utils/object';
import React, { ReactNode } from 'react';

interface ObjectTableProps<T extends object> {
  title?: string;
  data: T;
  renderKey: (key: keyof T) => ReactNode;
  renderValue: (key: keyof T, value: T[keyof T]) => ReactNode;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function ObjectTable<T extends object>({
  title,
  data,
  renderKey,
  renderValue,
}: ObjectTableProps<T>) {
  const arrayData = getObjectEntries(data);
  const chunkedData = chunk(arrayData, 4);

  return (
    <table className='flex flex-col gap-2'>
      {title && <caption className='font-700 text-16 text-grey-800 text-left'>{title}</caption>}
      <tbody className='border-grey-300 leading-24 overflow-auto border'>
        {chunkedData.map((rowItems, rowIndex) => (
          <tr
            key={`object_table_row_${rowItems[0].toString()}`}
            className={`flex ${rowIndex !== chunkedData.length - 1 && 'border-grey-200 border-b'}`}
          >
            {rowItems.map(([key, value]) => (
              <React.Fragment key={key.toString()}>
                <td className='border-grey-200 text-14 bg-grey-50 leading-20 font-400 flex flex-1 items-center gap-1 border-r px-3 py-2.5'>
                  {renderKey(key)}
                </td>
                <td className='border-grey-200 flex flex-1 items-center border-r px-3 py-2.5'>
                  {renderValue(key, value)}
                </td>
              </React.Fragment>
            ))}
            {rowItems.length === 1 && (
              <>
                <td className='flex flex-1 px-3 py-2.5' />
                <td className='flex flex-1 px-3 py-2.5' />
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
