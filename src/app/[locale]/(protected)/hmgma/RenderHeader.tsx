import Button from '@/components/button/Button';
import { listType } from '@/dummy/HMGMA';
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

interface RenderHeaderProps {
  headerKey: keyof listType;
  isOpenProgram: boolean;
  setIsOpenProgram: Dispatch<SetStateAction<boolean>>;
  refetchData: () => void;
}

export default function RenderHeader({
  headerKey,
  isOpenProgram,
  setIsOpenProgram,
  refetchData,
}: RenderHeaderProps) {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');

  switch (headerKey) {
    case 'program':
      return (
        <div className='flex items-center justify-between'>
          <span>{t('program-name')}</span>
          <div>
            <Button
              value={tHMGMA('program-open-button', { state: String(isOpenProgram) })}
              onClick={() => setIsOpenProgram(!isOpenProgram)}
              style='outline'
              size='s'
            />
          </div>
        </div>
      );
    default:
      return (
        <div className='flex items-center'>
          <span>{t(`${headerKey}`)}</span>
          <HiOutlineSwitchVertical
            size={16}
            className='shrink-0 cursor-pointer'
            onClick={() => refetchData()}
          />
        </div>
      );
  }
}
