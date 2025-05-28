import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import LinkButton from '@/components/button/LinkButton';
import CheckBox from '@/components/radio/CheckBox';
import ObjectTable from '@/components/table/ObjectTable';
import { defaultDataType, detailData, enumColors } from '@/dummy/HMGMA';
import useClipboard from '@/hooks/useClipboard';
import { popupAtom, toastAtom } from '@/jotai/modalAtoms';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

export default function DefaultInfo() {
  const t = useTranslations('mockup');
  const tHMGMA = useTranslations('hmgma');
  const params = useParams();
  const data = detailData[Number(params.id)];

  const copyToClipboard = useClipboard();
  const [, setPopup] = useAtom(popupAtom);
  const [, setToast] = useAtom(toastAtom);

  const renderKey = (key: keyof defaultDataType): ReactNode => t(`${key}`);
  const renderValue = (
    key: keyof defaultDataType,
    value: defaultDataType[keyof defaultDataType],
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
        return (
          <CheckBox
            isCheck={Boolean(value)}
            onClick={() =>
              setPopup({
                visible: true,
                title: tHMGMA('license-popup-title'),
                content: tHMGMA('license-popup-content', { state: value.toString() }),
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
