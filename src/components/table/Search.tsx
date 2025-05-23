import IconInput from '@/components/input/IconInput';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface SearchProps {
  handleSearch: (value: string) => void;
}

export default function Search({ handleSearch }: SearchProps) {
  const t = useTranslations('table');
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-2xs'>
      <IconInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IoMdSearch onClick={() => handleSearch(search)} />}
        placeholder={t('search')}
        size='s'
      />
    </div>
  );
}
