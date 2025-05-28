'use client';

import { useParams } from 'next/navigation';
import DefaultInfo from './DefaultInfo';
import DeployAssistant from './DeployAssistant';
import SystemPerformace from './SystemPerformace';

export default function HMGMAIdPage() {
  const params = useParams();

  return (
    <div className='flex flex-1 flex-col gap-10'>
      <h1 className='flex gap-2'>
        HMGMA PC <p className='text-primary-500'>#{params.id}</p>
      </h1>
      <DefaultInfo />
      <DeployAssistant />
      <SystemPerformace />
    </div>
  );
}
