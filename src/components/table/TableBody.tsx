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
    <tbody className='border-grey-300 leading-24 border'>
      {data.map((row) => (
        <tr key={`table_row_${row.id}`} className=''>
          {keys.map((key) => (
            <td
              key={`${String(key)}_${String(row[key])}`}
              className='m-w-fit border-grey-200 border-b px-3 py-2.5'
            >
              {renderCell(row, key)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
