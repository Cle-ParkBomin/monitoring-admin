import IconInput from '@/components/input/IconInput';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  refetchData: (value?: string) => void;
}

export default function Search({ refetchData }: SearchProps) {
  const t = useTranslations('table');
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-2xs'>
      <IconInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IoMdSearch onClick={() => refetchData(search)} />}
        placeholder={t('search')}
        size='s'
      />
    </div>
  );
}
