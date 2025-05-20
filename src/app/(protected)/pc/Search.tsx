import IconInput from '@/components/input/IconInput';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

export default function Search() {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-2xs'>
      <IconInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={
          <IoMdSearch
            onClick={() => {
              return;
            }}
          />
        }
        placeholder='검색'
        size='s'
      />
    </div>
  );
}
