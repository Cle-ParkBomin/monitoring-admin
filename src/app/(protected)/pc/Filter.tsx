import Button from '@/components/button/Button';
import CalendarInput from '@/components/headless/CalendarInput';
import DropInput from '@/components/input/DropInput';
import useClickOutside from '@/hooks/useClickOutside';
import { ACTIVE_LABELS } from '@/labels/Label';
import { DateRange } from '@/types/components';
import { getObjectKeys } from '@/utils/object';
import { useRef, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import { useImmer } from 'use-immer';

export default function Filter() {
  const filterRef = useRef<HTMLUListElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useImmer<{
    date: DateRange;
    active: keyof typeof ACTIVE_LABELS;
  }>({
    date: {
      from: new Date(),
      to: new Date(),
    },
    active: 'active',
  });

  useClickOutside({
    ref: filterRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative z-10'>
      <div className='flex w-24'>
        <Button value='필터' isIcon icon={<IoFilter />} onClick={() => setIsOpen(true)} size='s' />
      </div>
      {isOpen && (
        <ul
          className='absolute top-15 right-0 w-max rounded-sm border border-grey-300 bg-grey-0 text-14 font-500 shadow-strong'
          ref={filterRef}
        >
          <p className='border-b border-grey-300 p-2 text-grey-700'>필터</p>

          {/* 날짜 */}
          <li className='flex flex-col gap-1.5 border-b border-grey-300 p-2'>
            <p className='text-grey-700'>날짜</p>
            <CalendarInput
              value={filter.date}
              setValue={(value: DateRange) =>
                setFilter((draft) => {
                  draft.date = value;
                })
              }
              size='s'
            />
          </li>

          {/* 활성화 여부 */}
          <li className='flex flex-col gap-1.5 border-b border-grey-300 p-2'>
            <p className='text-grey-700'>라이선스</p>
            <DropInput
              value={filter.active}
              valueList={getObjectKeys(ACTIVE_LABELS)}
              onClick={(value) =>
                setFilter((draft) => {
                  draft.active = value;
                })
              }
              size='s'
              labels={ACTIVE_LABELS}
            />
          </li>

          {/* footer */}
          <div className='flex justify-between gap-10 p-2'>
            <div className='flex w-20'>
              <Button value='초기화' style='outline' size='s' />
            </div>
            <div className='flex w-20'>
              <Button value='검색' style='secondary' size='s' />
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}
