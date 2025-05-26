'use client';

import Badge, { BadgeColor } from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import Dropdown from '@/components/button/Dropdown';
import LinkButton from '@/components/button/LinkButton';
import { DateRange } from '@/components/headless/Calendar';
import CalendarInput from '@/components/headless/CalendarInput';
import Toast from '@/components/modal/Toast';
import Table from '@/components/table/Table';
import {
  HMGMA_DATA,
  HMGMADataType,
  LineEnum,
  PCEnum,
  PositionEnum,
  ProcessEnum,
} from '@/dummy/HMGMA';
import { getObjectKeys } from '@/utils/object';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { useImmer } from 'use-immer';

export default function HMGMAPage() {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const router = useRouter();

  const [toast, setToast] = useImmer({
    visible: false,
    text: '',
  });
  const [filter, setFilter] = useImmer<{
    line: keyof typeof LineEnum;
    process: keyof typeof ProcessEnum;
    position: keyof typeof PositionEnum;
    pc: keyof typeof PCEnum;
    isLicense: boolean;
    isNetwork: boolean;
    isProgram: boolean;
    launcherUpdateAt: DateRange;
  }>({
    line: 'LINE_ONE',
    process: 'GLASS',
    position: 'FRONT',
    pc: 'MAIN',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: {
      from: new Date(),
      to: new Date(),
    },
  });

  const refetchData = () => {
    // 재검색 기능: 검색, 정렬, 필터, n개씩 기능에 모두 들어갑니다.
    return;
  };

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast((draft) => {
        draft.visible = true;
        draft.text = tHMGMA('clipboard-success', { key: key });
      });
    } catch {
      setToast((draft) => {
        draft.visible = true;
        draft.text = tHMGMA('clipboard-error', { key: key });
      });
    }
  };

  const filterBody = [
    {
      title: t('launcherUpdateAt'),
      content: (
        <CalendarInput
          value={filter.launcherUpdateAt}
          setValue={(value: DateRange) =>
            setFilter((draft) => {
              draft.launcherUpdateAt = value;
            })
          }
          size='s'
        />
      ),
    },
    {
      title: t('line'),
      content: (
        <Dropdown
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
    {
      title: t('process'),
      content: (
        <Dropdown
          value={filter.process}
          valueList={getObjectKeys(ProcessEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.process = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('position'),
      content: (
        <Dropdown
          value={filter.position}
          valueList={getObjectKeys(PositionEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.position = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('pc'),
      content: (
        <Dropdown
          value={filter.pc}
          valueList={getObjectKeys(PCEnum)}
          onClick={(value) => {
            setFilter((draft) => {
              draft.pc = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isLicense'),
      content: (
        <Dropdown
          value={filter.isLicense}
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isLicense = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isNetwork'),
      content: (
        <Dropdown
          value={filter.isNetwork}
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isNetwork = value;
            });
          }}
          size='s'
        />
      ),
    },
    {
      title: t('isProgram'),
      content: (
        <Dropdown
          value={filter.isProgram}
          valueList={[true, false]}
          onClick={(value) => {
            setFilter((draft) => {
              draft.isProgram = value;
            });
          }}
          size='s'
        />
      ),
    },
  ];

  const renderHeader = (key: keyof HMGMADataType): ReactNode => (
    <>
      <span className='whitespace-pre-line break-keep'>{t(`${key}`)}</span>
      <HiOutlineSwitchVertical size={16} className='cursor-pointer' onClick={() => refetchData()} />
    </>
  );

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
      case 'id':
        return (
          <LinkButton
            value={row[key].toString()}
            onClick={() => {
              router.push(`/hmgma/${row[key]}`);
            }}
          />
        );

      case 'line':
      case 'process':
      case 'position':
      case 'pc':
        return <Badge value={row[key].toString()} color={enumColors[row[key].toString()]} />;

      case 'anyDeskIP':
        return (
          <LinkButton
            value={row[key].toString()}
            onClick={() => {
              void handleCopy(t('anyDeskIP'), row[key].toString());
              window.location.href = `anydesk:${row[key]}`;
            }}
          />
        );

      case 'ipv4Address':
        return (
          <LinkButton
            value={row[key].toString()}
            onClick={() => {
              void handleCopy(t('ipv4Address'), row[key].toString());
            }}
          />
        );

      case 'isLicense':
      case 'isNetwork':
      case 'isProgram':
        return (
          <p
            className={`flex h-full flex-1 items-center p-2 ${row[key] === false && 'bg-primary-100 text-primary-600'}`}
          >
            {row[key].toString()}
          </p>
        );

      case 'launcherUpdateAt':
        return (
          <div className='flex flex-col gap-1'>
            <p>{row[key].toString()}</p>
            <Button
              value='Update'
              size='s'
              onClick={() => {
                setToast((draft) => {
                  draft.visible = true;
                  draft.text = tHMGMA('feature-unavailable', { feature: 'Launcher Update' });
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
    <>
      <Table
        title='HMGMA'
        data={HMGMA_DATA}
        refetchData={refetchData}
        filterBody={filterBody}
        renderHeader={renderHeader}
        renderCell={renderCell}
      />
      <Toast
        visible={toast.visible}
        setVisible={(visible: boolean) =>
          setToast((draft) => {
            draft.visible = visible;
          })
        }
        text={toast.text}
      />
    </>
  );
}
