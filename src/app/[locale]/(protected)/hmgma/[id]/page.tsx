'use client';

import { detailData } from '@/dummy/HMGMA';
import { useParams } from 'next/navigation';
import DefaultInfo from './DefaultInfo';
import DriverInfo from './DriverInfo';
import PCStatus from './PCStatus';
import ProgramInfo from './ProgramInfo';
import StorageInfo from './StorageInfo';

export default function HMGMAIdPage() {
  const params = useParams();

  return (
    <div className='flex flex-1 flex-col gap-10'>
      <h1 className='flex gap-2'>
        HMGMA PC <p className='text-primary-500'>#{params.id}</p>
      </h1>
      <DefaultInfo data={detailData.default} />
      <ProgramInfo data={detailData.program} />
      <DriverInfo data={detailData.driver} />
      <PCStatus data={detailData.pcStatus} />
      <StorageInfo data={detailData.pcStatus} />
    </div>
  );
}
