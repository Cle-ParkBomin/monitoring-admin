import Button from '@/components/button/Button';
import Radio from '@/components/radio/Radio';
import useClickOutside from '@/hooks/useClickOutside';
import { SORT_CRITERIA_LABELS, SORT_DIRECTION_LABELS } from '@/labels/Label';
import { getObjectKeys } from '@/utils/object';
import { useRef, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useImmer } from 'use-immer';

export default function Sort() {
  const sortRef = useRef<HTMLUListElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sort, setSort] = useImmer<
    Record<keyof typeof SORT_CRITERIA_LABELS, keyof typeof SORT_DIRECTION_LABELS>
  >({
    header1: 'asc',
    header2: 'asc',
    header3: 'asc',
    header4: 'asc',
    header5: 'asc',
    header6: 'asc',
  });

  useClickOutside({
    ref: sortRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative z-10'>
      <div className='flex w-24'>
        <Button
          value='정렬'
          isIcon
          icon={<FaSort />}
          onClick={() => setIsOpen(true)}
          size='s'
          style='outline'
        />
      </div>
      {isOpen && (
        <ul
          className='absolute top-15 right-0 w-max rounded-sm border border-grey-300 bg-grey-0 text-14 font-500 shadow-strong'
          ref={sortRef}
        >
          <p className='border-b border-grey-300 p-2 text-grey-700'>정렬</p>
          {getObjectKeys(sort).map((item) => (
            <li className='flex flex-col gap-1.5 border-b border-grey-300 p-2' key={`sort_${item}`}>
              <p className='text-grey-700'>{SORT_CRITERIA_LABELS[item]}</p>
              <Radio
                value={SORT_DIRECTION_LABELS.asc}
                isCheck={sort[item] === 'asc'}
                onClick={() => {
                  setSort((draft) => {
                    draft[item] = 'asc';
                  });
                }}
                style='primary500'
                size='s'
              />
              <Radio
                value={SORT_DIRECTION_LABELS.desc}
                isCheck={sort[item] === 'desc'}
                onClick={() => {
                  setSort((draft) => {
                    draft[item] = 'desc';
                  });
                }}
                style='primary500'
                size='s'
              />
            </li>
          ))}
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
