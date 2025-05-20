export default function Table() {
  return (
    <table className='flex flex-1 flex-col px-1'>
      {/* Table Body */}
      <thead className='flex border border-b-0 border-grey-300 bg-grey-50'>
        <tr className='center flex flex-1 text-14 leading-20 text-grey-700'>
          <th className='flex flex-1 items-center px-3 py-2.5 font-400'>헤더</th>
          <th className='flex flex-1 items-center px-3 py-2.5 font-400'>헤더2</th>
          <th className='flex flex-1 items-center px-3 py-2.5 font-400'>헤더3</th>
        </tr>
      </thead>
      <tbody className='flex border border-grey-300 leading-24'>
        <tr className='flex flex-1 justify-between'>
          <td className='flex flex-1 px-3 py-2.5'>{1}</td>
          <td className='flex flex-1 px-3 py-2.5'>{1}</td>
          <td className='flex flex-1 px-3 py-2.5'>{1}</td>
        </tr>
      </tbody>
    </table>
  );
}
