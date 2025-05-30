'use client';

import FilterBody from '@/app/[locale]/(protected)/hmgma/FilterBody';
import RenderCell from '@/app/[locale]/(protected)/hmgma/RenderCell';
import RenderHeader from '@/app/[locale]/(protected)/hmgma/RenderHeader';
import ListTable from '@/components/table/ListTable';
import { listData, listType } from '@/dummy/HMGMA';
import { ReactNode, useState } from 'react';

export default function HMGMAPage() {
  const [isOpenProgram, setIsOpenProgram] = useState<boolean>(false);

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const filterBody = FilterBody();

  const renderHeader = (key: keyof listType): ReactNode => (
    <RenderHeader
      headerKey={key}
      isOpenProgram={isOpenProgram}
      setIsOpenProgram={setIsOpenProgram}
      refetchData={refetchData}
    />
  );

  const renderCell = (row: listType, key: keyof listType) => (
    <RenderCell row={row} rowKey={key} isOpenProgram={isOpenProgram} />
  );

  return (
    <ListTable
      title='HMGMA'
      data={listData}
      refetchData={refetchData}
      filterBody={filterBody}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
}
