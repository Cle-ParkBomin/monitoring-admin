import useClickOutside from '@/hooks/useClickOutside';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import { useEffect, useRef, useState } from 'react';
import { IoCheckmarkCircleOutline, IoClose, IoInformationCircle, IoWarning } from 'react-icons/io5';

interface ToastProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  text: string;
  icon?: 'check' | 'warn' | 'info';
  style?: 'dark' | 'light';
}

export default function Toast({
  visible,
  setVisible,
  text,
  icon = 'check',
  style = 'dark',
}: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  const [isSlide, setIsSlide] = useState(true);

  const neogreen500 = useColorByTheme('neo-green-500');
  const primary500 = useColorByTheme('primary-500');
  const grey300 = useColorByTheme('grey-300');
  const grey500 = useColorByTheme('grey-500');
  const grey700 = useColorByTheme('grey-700');

  const variantStyle = {
    dark: { wrapper: 'bg-grey-900/90', text: 'text-grey-0' },
    light: { wrapper: 'bg-grey-0', text: 'text-grey-950' },
  };

  const handleClose = () => {
    setIsSlide(false);
    setTimeout(() => {
      setVisible(false);
      setIsSlide(true);
    }, 300);
  };

  useEffect(() => {
    // 애니메이션 효과
    if (visible) {
      const timer = setTimeout(() => {
        setIsSlide(false);
        setTimeout(() => {
          setVisible(false);
          setIsSlide(true);
        }, 300);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  useClickOutside({ ref: toastRef, onClick: handleClose });

  if (!visible) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-20'>
      <div
        className={`top-5/6 -translate-y-5/6 absolute left-1/2 flex -translate-x-1/2 transform ${isSlide ? 'animate-slide-in' : 'animate-slide-out'}`}
        ref={toastRef}
      >
        <div
          className={`max-w-3xs shadow-light flex min-w-96 items-center justify-between gap-2 rounded-lg px-4 py-3.5 ${variantStyle[style].wrapper}`}
        >
          {icon === 'check' && <IoCheckmarkCircleOutline color={neogreen500} size={20} />}
          {icon === 'warn' && <IoWarning color={primary500} size={20} />}
          {icon === 'info' && <IoInformationCircle color={grey300} size={20} />}
          <p className={`text-14 leading-20 flex flex-1 ${variantStyle[style].text}`}>{text}</p>
          <IoClose
            color={style === 'dark' ? grey500 : grey700}
            size={16}
            className='cursor-pointer'
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
