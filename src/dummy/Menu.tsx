import { MenuType } from '@/components/layout/Navigation';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdDoNotDisturb } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
export const MENU: Record<string, MenuType> = {
  home: { key: 'pc', value: 'PC', url: '/pc', icon: <RiComputerLine /> },
  component: {
    key: 'component',
    value: 'Component',
    url: '/components',
    icon: <LuLayoutDashboard />,
  },
  disabled: {
    key: 'disabled',
    value: 'Disabled',
    url: '/disabled',
    icon: <MdDoNotDisturb />,
    isDisabled: true,
  },
};
