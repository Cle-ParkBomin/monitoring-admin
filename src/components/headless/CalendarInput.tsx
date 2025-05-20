import Calendar from '@/components/headless/Calendar';
import useClickOutside from '@/hooks/useClickOutside';
import { useColorByTheme } from '@/hooks/useColorByTheme';
import { formatToYYYYMMDD } from '@/utils/date';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { FaRegCalendar } from 'react-icons/fa';

export interface DateRange {
  from: Date | undefined;
  to?: Date | undefined;
}

interface CalendarInputProps {
  selected: DateRange | undefined;
  setSelected: Dispatch<SetStateAction<DateRange | undefined>>;
  size?: 'm' | 's';
}

export default function CalendarInput({ selected, setSelected, size = 'm' }: CalendarInputProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const grey500 = useColorByTheme('grey-500');
  const sizeStyle = {
    m: 'h-12 px-4 py-3',
    s: 'h-9 px-3 py-1.5',
  };

  useClickOutside({ ref: calendarRef, onClick: () => setIsOpen(false) });

  return (
    <div className='relative'>
      <button
        className={`flex cursor-pointer items-center justify-between gap-1 rounded-sm border border-grey-400 bg-grey-0 ${sizeStyle[size]}`}
        onClick={() => setIsOpen(true)}
      >
        <p>
          {formatToYYYYMMDD(selected?.from)} ~ {formatToYYYYMMDD(selected?.to)}
        </p>
        <FaRegCalendar size={20} color={grey500} />
      </button>
      {isOpen && (
        <div className='absolute z-10 mt-2' ref={calendarRef}>
          <Calendar selected={selected} setSelected={setSelected} />
        </div>
      )}
    </div>
  );
}
