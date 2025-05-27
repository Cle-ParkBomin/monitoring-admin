import { getObjectKeys } from '@/utils/object';
import { ReactNode } from 'react';

interface ScrollTableBodyProps<T extends object> {
  data: T[];
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function ScrollTableBody<T extends object>({
  data,
  renderCell,
}: ScrollTableBodyProps<T>) {
  const keys = getObjectKeys(data[0]);

  return (
    <tbody className='border-grey-300 leading-24 max-h-96 overflow-auto border'>
      {data.map((row, index) => (
        <tr
          className={`border-grey-200 flex ${index !== data.length - 1 && 'border-b'}`}
          key={`table_row_${index}`}
        >
          {keys.map((key) => (
            <td
              key={`${String(key)}_${String(row[key])}`}
              className='flex flex-1 items-center break-all px-3 py-2.5'
            >
              {renderCell(row, key)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
