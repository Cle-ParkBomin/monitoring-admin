'use client';
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardReturn } from 'react-icons/md';

export default function Error() {
  const router = useRouter();

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-12'>
      <p className='animate-bounce text-9xl font-extrabold text-primary-500'>Oops!</p>
      <h1>페이지를 불러오는 중 예상치 못한 오류가 발생했습니다.</h1>
      <div className='flex flex-col justify-center gap-4'>
        <p>잠시 후 다시 시도하시거나, 이전 페이지로 돌아가 주세요.</p>
        <div className='flex'>
          <Button
            value='GO BACK'
            onClick={() => router.back()}
            isIcon
            icon={<MdOutlineKeyboardReturn />}
            style='secondary'
          />
        </div>
      </div>
    </div>
  );
}
