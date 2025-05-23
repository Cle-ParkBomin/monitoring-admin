import Button from '@/components/button/Button';
import Radio from '@/components/radio/Radio';
import { SortDirectionEnum } from '@/enums/common';
import useClickOutside from '@/hooks/useClickOutside';
import { getObjectKeys } from '@/utils/object';
import { useTranslations } from 'next-intl';
import { ReactNode, useRef, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useImmer } from 'use-immer';

interface SortProps<T extends { id: number }> {
  data: T[];
  renderHeader: (key: keyof T) => ReactNode;
  handleSearch: (value: string) => void;
}

export default function Sort<T extends { id: number }>({
  data,
  renderHeader,
  handleSearch,
}: SortProps<T>) {
  const sortRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('table');
  const tEnum = useTranslations('enum');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getSortInitial = () => {
    const initial = {} as Record<keyof T, keyof typeof SortDirectionEnum>;
    getObjectKeys(data[0]).forEach((key) => {
      initial[key] = 'ASC';
    });
    return initial;
  };

  const [sort, setSort] = useImmer<Record<keyof T, keyof typeof SortDirectionEnum>>(getSortInitial);

  useClickOutside({
    ref: sortRef,
    onClick: () => setIsOpen(false),
  });

  return (
    <div className='relative'>
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
        <div
          className='top-15 border-grey-300 bg-grey-0 text-14 font-500 shadow-strong absolute right-0 w-max rounded-sm border'
          ref={sortRef}
        >
          <p className='border-grey-300 text-grey-700 border-b p-2'>{t('sort')}</p>
          <ul className='max-h-72 overflow-y-auto'>
            {getObjectKeys(sort).map((key) => (
              <li
                className={`border-grey-300 flex flex-col gap-1.5 border-b p-2`}
                key={`sort_${key.toString()}`}
              >
                <p className='text-grey-700'>{renderHeader(key)}</p>
                <Radio
                  label={tEnum(SortDirectionEnum.ASC)}
                  isCheck={sort[key] === 'ASC'}
                  onClick={() => {
                    setSort((draft) => {
                      (draft as Record<keyof T, keyof typeof SortDirectionEnum>)[key] = 'ASC';
                    });
                  }}
                  style='primary500'
                  size='s'
                />
                <Radio
                  label={tEnum(SortDirectionEnum.DESC)}
                  isCheck={sort[key] === 'DESC'}
                  onClick={() => {
                    setSort((draft) => {
                      (draft as Record<keyof T, keyof typeof SortDirectionEnum>)[key] = 'DESC';
                    });
                  }}
                  style='primary500'
                  size='s'
                />
              </li>
            ))}
          </ul>
          <div className='border-grey-300 flex justify-between gap-10 border-t p-2'>
            <div className='flex w-20'>
              <Button value={t('reset')} style='outline' size='s' />
            </div>
            <div className='flex w-20'>
              <Button value={t('search')} style='secondary' size='s' onClick={() => handleSearch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
