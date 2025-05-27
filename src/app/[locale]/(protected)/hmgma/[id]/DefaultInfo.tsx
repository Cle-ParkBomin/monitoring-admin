import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import LinkButton from '@/components/button/LinkButton';
import ObjectTable from '@/components/table/ObjectTable';
import { enumColors, HMAGMA_DETAIL, HMGMADataType } from '@/dummy/HMGMA';
import useClipboard from '@/hooks/useClipboard';
import { toastAtom } from '@/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';

export default function DefaultInfo() {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const data = HMAGMA_DETAIL;

  const copyToClipboard = useClipboard();
  const [, setToast] = useAtom(toastAtom);

  const renderKey = (key: keyof HMGMADataType): ReactNode => t(`${key}`);
  const renderValue = (
    key: keyof HMGMADataType,
    value: HMGMADataType[keyof HMGMADataType],
  ): ReactNode => {
    switch (key) {
      case 'line':
      case 'process':
      case 'position':
      case 'pc':
        return <Badge value={value.toString()} color={enumColors[value.toString()]} />;

      case 'anyDeskIP':
        return (
          <LinkButton
            value={value.toString()}
            onClick={() => {
              void copyToClipboard(t('anyDeskIP'), value.toString());
              window.location.href = `anydesk:${value}`;
            }}
          />
        );

      case 'ipv4Address':
        return (
          <LinkButton
            value={value.toString()}
            onClick={() => {
              void copyToClipboard(t('ipv4Address'), value.toString());
            }}
          />
        );

      case 'isLicense':
      case 'isNetwork':
        return (
          <p
            className={`flex h-full flex-1 items-center p-2 ${value === false && 'bg-primary-100 text-primary-600'}`}
          >
            {value.toString()}
          </p>
        );
      case 'isProgram':
        return (
          <p
            className={`flex h-full flex-1 items-center p-2 ${value === true && 'bg-primary-100 text-primary-600'}`}
          >
            {value.toString()}
          </p>
        );

      case 'launcherUpdateAt':
        return (
          <div className='flex flex-col gap-1'>
            <p>{value.toString()}</p>
            <Button
              value={tHMGMA('update-button')}
              size='s'
              onClick={() => {
                setToast({
                  visible: true,
                  text: tHMGMA('feature-unavailable', { feature: 'Launcher Update' }),
                  icon: 'check',
                  style: 'dark',
                });
              }}
            />
          </div>
        );

      default:
        return value.toString();
    }
  };

  return (
    <ObjectTable
      title={tHMGMA('default-information')}
      data={data}
      renderKey={renderKey}
      renderValue={renderValue}
    />
  );
}
