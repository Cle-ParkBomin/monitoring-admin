import Button from '@/components/button/Button';
import { DateRange } from '@/components/headless/Calendar';
import CalendarInput from '@/components/headless/CalendarInput';
import ScrollTable from '@/components/table/ScrollTable';
import { DEPLOY_ASSISTANT, DeployAssistantType } from '@/dummy/HMGMA';
import { toastAtom } from '@/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useImmer } from 'use-immer';

export default function DeployAssistant() {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const [, setToast] = useAtom(toastAtom);

  const [filter, setFilter] = useImmer<{ updateAt: DateRange }>({
    updateAt: {
      from: new Date(),
      to: new Date(),
    },
  });

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const filterBody = [
    {
      title: t('updateAt'),
      content: (
        <CalendarInput
          value={filter.updateAt}
          setValue={(value: DateRange) =>
            setFilter((draft) => {
              draft.updateAt = value;
            })
          }
          size='s'
        />
      ),
    },
  ];
  const renderHeader = (key: keyof DeployAssistantType): ReactNode => t(`${key}`);
  const renderCell = (row: DeployAssistantType, key: keyof DeployAssistantType): ReactNode => {
    switch (key) {
      case 'updateAt':
        return (
          <div className='flex flex-col gap-2'>
            <p>{row[key].toString()}</p>
            <Button
              value={tHMGMA('update-button')}
              size='s'
              onClick={() => {
                setToast({
                  visible: true,
                  text: tHMGMA('feature-unavailable', { feature: 'Program Update' }),
                  icon: 'check',
                  style: 'dark',
                });
              }}
            />
          </div>
        );

      default:
        return row[key].toString();
    }
  };

  return (
    <ScrollTable
      title={tHMGMA('deploy-assistant')}
      data={DEPLOY_ASSISTANT}
      filterBody={filterBody}
      refetchData={refetchData}
      renderHeader={renderHeader}
      renderCell={renderCell}
    />
  );
}
