'use client';

import CheckBox from '@/components/radio/CheckBox';
import { useTranslations } from 'next-intl';

// 런처 이전
const list_before = [
  { isCheck: true, part: 'Front-End', content: 'Table: 스크롤, 50개 씩 보기, pagination 추가' },
  { isCheck: false, part: 'Front-End', content: 'Any Desk 열기' },
  { isCheck: false, part: 'Front-End', content: 'PC 업데이트 정보 비교하기' },
  { isCheck: false, part: 'Front-End', content: '프로그램 종료 여부 표시, 런처 업데이트 버튼' },
  {
    isCheck: false,
    part: 'Front-End',
    content: '배포도우미 기능 추가: 검색/정렬/필터, 백업 전체 기록 등',
  },
  { isCheck: false, part: 'Back-End', content: 'menu list 넘기기' },
  { isCheck: false, part: 'Back-End', content: 'n개씩 호출, pagination 기능' },
  { isCheck: false, part: 'Back-End', content: '정렬/필터 기능' },
  { isCheck: false, part: 'Back-End', content: '구글 로그인/회원가입 기능' },
  { isCheck: false, part: 'Back-End', content: '라이선스 발급 요청/승인/관리' },
  { isCheck: false, part: 'Back-End', content: '권한 관리: Super / Admin / Manager' },
];

// 런처 이후
const list_after = [
  { isCheck: false, part: 'Front-End', content: '로그 정보 확인: 재석님 Docker Container 띄우기' },
  {
    isCheck: false,
    part: 'Front-End',
    content: 'Table 라벨링 기능 (필요 여부 확인: 개발자가 보기 때문에 오히려 방해가 될 수 있음)',
  },
  { isCheck: false, part: 'Back-End', content: '프로그램 종료/재시작 시, 슬랙 알림' },
  { isCheck: false, part: 'Back-End', content: 'Luncher 업데이트 기능' },
  { isCheck: false, part: 'Back-End', content: 'PC 원격 접속' },
  { isCheck: false, part: 'Back-End', content: '배포 도우미 기능 반영' },
];

export default function ToDo() {
  const t = useTranslations('todo');

  return (
    <div className='flex flex-col gap-8'>
      <h1>{t('title')}</h1>
      <div className='flex flex-col gap-4'>
        <h2>{t('sub-title-1')}</h2>
        <ul className='flex flex-col gap-4'>
          {list_before.map((item) => (
            <li className='flex items-center' key={`checkbox_${item.content}`}>
              <CheckBox label={`[${item.part}] ${item.content}`} isCheck={item.isCheck} />
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h2>{t('sub-title-2')}</h2>
        <ul className='flex flex-col gap-4'>
          {list_after.map((item) => (
            <li className='flex items-center' key={`checkbox_${item.content}`}>
              <CheckBox label={`[${item.part}] ${item.content}`} isCheck={item.isCheck} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
