import Button from '@/components/button/Button';
import Radio from '@/components/radio/Radio';
import { SortDirectionEnum } from '@/enums/common';
import useClickOutside from '@/hooks/useClickOutside';
import { getObjectKeys } from '@/utils/object';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useImmer } from 'use-immer';

export default function Sort() {
  const sortRef = useRef<HTMLUListElement>(null);
  const t = useTranslations('hmgma');

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sort, setSort] = useImmer<Record<string, keyof typeof SortDirectionEnum>>({
    header1: 'ASC',
    header2: 'ASC',
    header3: 'ASC',
    header4: 'ASC',
    header5: 'ASC',
    header6: 'ASC',
  });

  useClickOutside({
    ref: sortRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative z-10'>
      <div className='flex w-24'>
        <Button
          value={t('sort')}
          isIcon
          icon={<FaSort />}
          onClick={() => setIsOpen(true)}
          size='s'
          style='outline'
        />
      </div>
      {isOpen && (
        <ul
          className='top-15 border-grey-300 bg-grey-0 text-14 font-500 shadow-strong absolute right-0 w-max rounded-sm border'
          ref={sortRef}
        >
          <p className='border-grey-300 text-grey-700 border-b p-2'>{t('sort')}</p>
          {getObjectKeys(sort).map((item) => (
            <li className='border-grey-300 flex flex-col gap-1.5 border-b p-2' key={`sort_${item}`}>
              <p className='text-grey-700'>{item}</p>
              <Radio
                value={SortDirectionEnum.ASC}
                isCheck={sort[item] === 'ASC'}
                onClick={() => {
                  setSort((draft) => {
                    draft[item] = 'ASC';
                  });
                }}
                style='primary500'
                size='s'
              />
              <Radio
                value={SortDirectionEnum.DESC}
                isCheck={sort[item] === 'DESC'}
                onClick={() => {
                  setSort((draft) => {
                    draft[item] = 'DESC';
                  });
                }}
                style='primary500'
                size='s'
              />
            </li>
          ))}
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
