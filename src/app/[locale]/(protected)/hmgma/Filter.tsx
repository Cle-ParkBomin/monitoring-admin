import Button from '@/components/button/Button';
import CalendarInput from '@/components/headless/CalendarInput';
import DropInput from '@/components/input/DropInput';
import { ActiveStatusEnum } from '@/enums/common';
import useClickOutside from '@/hooks/useClickOutside';
import { DateRange } from '@/types/date';
import { getObjectKeys } from '@/utils/object';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import { useImmer } from 'use-immer';

export default function Filter() {
  const filterRef = useRef<HTMLUListElement>(null);
  const t = useTranslations('hmgma');

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filter, setFilter] = useImmer<{
    date: DateRange;
    active: keyof typeof ActiveStatusEnum;
  }>({
    date: {
      from: new Date(),
      to: new Date(),
    },
    active: 'ACTIVE',
  });

  useClickOutside({
    ref: filterRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative'>
      <div className='flex w-24'>
        <Button
          value={t('filter')}
          isIcon
          icon={<IoFilter />}
          onClick={() => setIsOpen(true)}
          size='s'
        />
      </div>
      {isOpen && (
        <ul
          className='top-15 border-grey-300 bg-grey-0 text-14 font-500 shadow-strong absolute right-0 w-max rounded-sm border'
          ref={filterRef}
        >
          <p className='border-grey-300 text-grey-700 border-b p-2'>{t('filter')}</p>

          {/* 날짜 */}
          <li className='border-grey-300 flex flex-col gap-1.5 border-b p-2'>
            <p className='text-grey-700'>{t('date')}</p>
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
          <li className='border-grey-300 flex flex-col gap-1.5 border-b p-2'>
            <p className='text-grey-700'>{t('license')}</p>
            <DropInput
              value={filter.active}
              valueList={getObjectKeys(ActiveStatusEnum)}
              onClick={(value) =>
                setFilter((draft) => {
                  draft.active = value;
                })
              }
              size='s'
            />
          </li>

          {/* footer */}
          <div className='flex justify-between gap-10 p-2'>
            <div className='flex w-20'>
              <Button value={t('reset')} style='outline' size='s' />
            </div>
            <div className='flex w-20'>
              <Button value={t('search')} style='secondary' size='s' />
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}
