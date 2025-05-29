import { BadgeColor } from '@/components/badge/Badge';

// Enum
export enum LineEnum {
  LINE_ONE = '1',
  LINE_TWO = '2',
  PANORAMA = 'Panorama',
}

export enum ProcessEnum {
  GLASS = 'Glass', // 유리
  SEALER = 'Sealer', // 실러
  PRIMER = 'Primer', // 프라이머
  WHEEL = 'Wheel', // 장착
  INSPECTION = 'Inspection', // 이종 검사
}

export enum PositionEnum {
  FRONT = 'FRT',
  REAR = 'RR',
  RIGHT_HAND = 'RH',
  LEFT_HAND = 'LH',
}

export enum PCEnum {
  MAIN = 'Main',
  SPARE = 'Spare',
}

export const enumColors: Record<string, BadgeColor> = {
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
  Spare: 'grey',
};

// type
export interface listType {
  serialNumber: string;
  line: LineEnum;
  process: ProcessEnum;
  position: PositionEnum;
  pc: PCEnum;
  isLicense: boolean;
  isNetwork: boolean;
  isProgram: boolean;
  anyDeskIP: string;
  launcherUpdateAt: string;
}
export interface defaultType {
  line: LineEnum;
  process: ProcessEnum;
  position: PositionEnum;
  pc: PCEnum;
  serialNumber: string;
  anyDeskIP: string;
  ipv4Address: string;
  activeServer: string;
  isLicense: boolean;
  isNetwork: boolean;
  isProgram: boolean;
  launcherUpdateAt: string;
}

export interface programType {
  image: string;
  name: string;
  version: string;
  updateAt: string;
}

export interface driverType {
  image: string;
  name: string;
  version: string;
  installedAt: string;
}

export interface pcStatusType {
  cpu: {
    name: string;
    usage: number;
  };
  gpu: { name: string; usage: number };
  temp: {
    current: number;
    average: number;
    lowest: number;
    highest: number;
  };
  ram: {
    total: number;
    current: number;
    average: number;
    lowest: number;
    highest: number;
  };
  storage: {
    name: string;
    total: number;
    usage: number;
  }[];
  network: {
    send: number;
    receive: number;
  };
}

export interface detailType {
  default: defaultType;
  program: programType[];
  driver: driverType[];
  pcStatus: pcStatusType;
}

// Mockup Data

// List
export const listData: listType[] = [
  {
    serialNumber: '00000000-00',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 131 098 141',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-01',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: false,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 767 348 054',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-02',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: false,
    isProgram: true,
    anyDeskIP: '1 614 461 477',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-03',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 637 105 830',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-04',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: false,
    isNetwork: false,
    isProgram: true,
    anyDeskIP: '1 260 590 985',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-05',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 490 037 078',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-06',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 307 931 738',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-07',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,

    anyDeskIP: '1 041 443 477',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-08',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 546 854 792',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-09',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 981 772 425',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-10',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    anyDeskIP: '1 470 638 246',
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-11',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    anyDeskIP: '1 301 613 831',
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-12',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    anyDeskIP: '1 985 190 537',
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-13',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,

    anyDeskIP: '1 922 110 320',
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-14',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 302 156 066',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-15',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 579 959 834',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-16',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 111 032 002',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-17',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 704 428 698',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-18',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 983 482 010',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-19',
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 870 372 816',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-20',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 482 616 764',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-21',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 941 765 293',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-22',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 129 786 174',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-23',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 864 229 386',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-24',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 671 615 964',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-25',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 013 583 271',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-26',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 394 499 805',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-27',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: false,
    anyDeskIP: '1 026 859 859',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-28',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 715 930 909',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-29',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 205 521 693',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-30',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 991 385 999',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-31',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 923 074 485',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-32',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 318 976 755',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-33',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 634 823 155',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-34',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 347 598 653',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-35',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 357 130 625',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-36',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: false,
    anyDeskIP: '1 727 986 390',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-37',
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 660 050 206',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-38',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: false,
    anyDeskIP: '1 290 881 738',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-39',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 060 863 094',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-40',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 632 908 934',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-41',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 771 886 739',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-42',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 163 513 671',
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    serialNumber: '00000000-43',
    line: LineEnum.PANORAMA,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    anyDeskIP: '1 042 481 433',
    launcherUpdateAt: '0000-00-00 00:00',
  },
];

export const detailData: detailType = {
  default: {
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 131 098 141',
    ipv4Address: '000.000.000.00',
    activeServer: '125.265.325.100',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  program: [
    {
      image: '/mockup/primer.svg',
      name: 'Primer Inspection Vision System',
      version: 'v.1.00',
      updateAt: '2024.12.30 15:00',
    },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
    { image: '/mockup/omm.svg', name: 'OMM', version: 'v.0.56', updateAt: '2024.12.25 17:00' },
  ],
  driver: [
    {
      image: '/mockup/msvc.svg',
      name: 'Msvc 2012 Redistritable (x86)',
      version: '11.0.61030',
      installedAt: '2024.12.25 17:00',
    },
    {
      image: '/mockup/cudnn.svg',
      name: 'CUDNN 2012',
      version: '11.0.61030',
      installedAt: '2024.12.25 17:00',
    },
    {
      image: '/mockup/cuda.svg',
      name: 'CUDA 2012',
      version: '11.0.61030',
      installedAt: '2024.12.25 17:00',
    },
  ],
  pcStatus: {
    cpu: {
      name: 'i7-14700',
      usage: 23,
    },
    gpu: { name: 'RTX4080 S', usage: 64 },
    temp: {
      current: 23,
      average: 23,
      lowest: 23,
      highest: 23,
    },
    ram: {
      total: 40.56,
      current: 23.56,
      average: 23.58,
      lowest: 23.52,
      highest: 23.56,
    },
    storage: [
      {
        name: 'C',
        total: 119,
        usage: 20.59,
      },
      {
        name: 'D',
        total: 119,
        usage: 20.89,
      },
    ],
    network: {
      send: 123.56,
      receive: 123.56,
    },
  },
};
