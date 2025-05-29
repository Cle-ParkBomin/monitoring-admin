'use client';

import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import Dropdown from '@/components/button/Dropdown';
import LinkButton from '@/components/button/LinkButton';
import { DateRange } from '@/components/headless/Calendar';
import CalendarInput from '@/components/headless/CalendarInput';
import CheckBox from '@/components/radio/CheckBox';
import ListTable from '@/components/table/ListTable';
import {
  enumColors,
  LineEnum,
  listData,
  listType,
  PCEnum,
  PositionEnum,
  ProcessEnum,
} from '@/dummy/HMGMA';
import useClipboard from '@/hooks/useClipboard';
import { popupAtom, toastAtom } from '@/jotai/modalAtoms';
import { getObjectKeys } from '@/utils/object';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { IoWarning } from 'react-icons/io5';
import { useImmer } from 'use-immer';

export default function HMGMAPage() {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const router = useRouter();
  const copyToClipboard = useClipboard();

  const [, setPopup] = useAtom(popupAtom);
  const [, setToast] = useAtom(toastAtom);

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

  const renderHeader = (key: keyof listType): ReactNode => {
    {
      switch (key) {
        default:
          return (
            <>
              <span>{t(`${key}`)}</span>
              <HiOutlineSwitchVertical
                size={16}
                className='shrink-0 cursor-pointer'
                onClick={() => refetchData()}
              />
            </>
          );
      }
    }
  };

  const renderCell = (row: listType, key: keyof listType): ReactNode => {
    switch (key) {
      case 'serialNumber':
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

      case 'isLicense':
        return (
          <CheckBox
            isCheck={row[key]}
            onClick={() =>
              setPopup({
                visible: true,
                title: tHMGMA('license-popup-title'),
                content: tHMGMA('license-popup-content', { state: row[key].toString() }),
                onCancel: () => {
                  return;
                },
                onConfirm: () =>
                  setToast({
                    visible: true,
                    text: tHMGMA('feature-unavailable', { feature: 'License' }),
                    icon: 'warn',
                  }),
                cancelLabel: tHMGMA('no'),
                confirmLabel: tHMGMA('yes'),
              })
            }
            style='primary500'
          />
        );

      case 'isNetwork':
        return (
          <p
            className={`flex h-full flex-1 items-center p-2 ${row[key] === false && 'text-primary-600'}`}
          >
            {tHMGMA('on&off', { state: row[key].toString() })}
          </p>
        );

      case 'isProgram':
        return (
          <div
            className={`flex h-full flex-1 items-center gap-1 p-2 ${row[key] === false && 'bg-primary-500 text-grey-0'}`}
          >
            {!row[key] && <IoWarning className='animate-pulse' />}
            <p>{tHMGMA('on&off', { state: row[key].toString() })}</p>
          </div>
        );

      case 'anyDeskIP':
        return (
          <LinkButton
            value={row[key].toString()}
            onClick={() => {
              void copyToClipboard(t('anyDeskIP'), row[key].toString());
              window.location.href = `anydesk:${row[key]}`;
            }}
          />
        );

      case 'launcherUpdateAt':
        return (
          <div className='flex flex-col gap-1'>
            <p>{row[key].toString()}</p>
            <Button
              value={tHMGMA('update-button')}
              size='s'
              onClick={() => {
                setToast({
                  visible: true,
                  text: tHMGMA('feature-unavailable', { feature: 'Launcher Update' }),
                  icon: 'warn',
                });
              }}
            />
          </div>
        );
    }
  };

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
