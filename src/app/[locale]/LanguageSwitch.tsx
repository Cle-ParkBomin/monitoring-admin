'use client';

import DropButton from '@/components/button/DropButton';
import { useTranslations } from 'next-intl';

export default function LanguageSwitch() {
  const t = useTranslations('root');

  return (
    <DropButton
      title={t('language-switch.title')}
      value={''}
      valueList={['1', '2']}
      onClick={() => {
        return;
      }}
      size='s'
    />
  );
}
