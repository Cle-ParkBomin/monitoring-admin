'use client';

import Badge, { BadgeColor } from '@/components/badge/Badge';
import DropInput from '@/components/input/DropInput';
import Table from '@/components/table/Table';
import { HMGMA_DATA, HMGMADataType, LineEnum } from '@/dummy/HMGMA';
import { getObjectKeys } from '@/utils/object';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useImmer } from 'use-immer';

export default function Home() {
  const t = useTranslations('mockup');
  const [filter, setFilter] = useImmer<{
    line: keyof typeof LineEnum;
  }>({
    line: 'LINE_ONE',
  });

  const handleSearch = () => {
    // 검색, 정렬, 필터 기능에 모두 들어갑니다. 재검색 기능
    return;
  };

  const filterBody = [
    {
      title: t('line'),
      content: (
        <DropInput
          value={filter.line}
          valueList={getObjectKeys(LineEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.line = value;
            });
          }}
          size='s'
        />
      ),
    },
  ];

  const renderHeader = (key: keyof HMGMADataType): ReactNode => t(`${key}`);

  const renderCell = (row: HMGMADataType, key: keyof HMGMADataType): ReactNode => {
    const enumColors: Record<string, BadgeColor> = {
      '1': 'yellow',
      '2': 'red',
      Glass: 'blue',
      Sealer: 'green',
      Primer: 'purple',
      Wheel: 'grey',
      Inspection: 'yellow',
      FRT: 'yellow',
      RR: 'neo-green',
      RH: 'blue',
      LH: 'red',
      Main: 'red',
      Square: 'grey',
    };

    switch (key) {
      case 'line':
      case 'process':
      case 'position':
      case 'pc':
        return <Badge value={row[key].toString()} color={enumColors[row[key].toString()]} />;

      default:
        return row[key].toString();
    }
  };

  return (
    <Table
      data={HMGMA_DATA}
      handleSearch={handleSearch}
      filterBody={filterBody}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
}
