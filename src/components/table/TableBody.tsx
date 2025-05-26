import { getObjectKeys } from '@/utils/object';
import { ReactNode } from 'react';

interface TableBodyProps<T extends { id: number }> {
  data: T[];
  renderCell: (row: T, key: keyof T) => ReactNode;
}

export default function TableBody<T extends { id: number }>({
  data,
  renderCell,
}: TableBodyProps<T>) {
  const keys = getObjectKeys(data[0]);

  return (
    <tbody
      className='border-grey-300 leading-24 overflow-auto border'
      style={{ height: `calc(100vh - 480px)` }}
    >
      {data.map((row, index) => (
        <tr
          className={`border-grey-200 flex ${index !== data.length - 1 && 'border-b'}`}
          key={`table_row_${row.id}`}
        >
          {keys.map((key) => (
            <td
              key={`${String(key)}_${String(row[key])}`}
              className='flex flex-1 items-center px-3 py-2.5'
            >
              {renderCell(row, key)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
