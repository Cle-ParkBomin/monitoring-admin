import { useTranslations } from 'next-intl';

export default function SystemPerformace() {
  const t = useTranslations('hmgma');

  return (
    <div>
      <h3 className='text-grey-800'>{t('system-performance')}</h3>
      <p>
        [런처 이전 작업 예정] Telegram, InfluxDB, Grafana Library 를 이용하여 로컬 컴퓨터의 헬스
        정보를 실시간으로 보여주기
      </p>
    </div>
  );
}
