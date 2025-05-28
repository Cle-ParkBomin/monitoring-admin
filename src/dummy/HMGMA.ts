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
export interface HMGMADataType {
  id: number;
  line: LineEnum;
  process: ProcessEnum;
  position: PositionEnum;
  pc: PCEnum;
  serialNumber: string;
  anyDeskIP: string;
  ipv4Address: string;
  isLicense: boolean;
  isNetwork: boolean;
  isProgram: boolean;
  launcherUpdateAt: string;
}

export interface DeployAssistantType {
  fileName: string;
  fileRelPath: string;
  buildVersion: string;
  deployer: string;
  updateAt: string;
  hash: string;
}

// Mockup Data
export const Brain: HMGMADataType = {
  id: 0, // id
  line: LineEnum.LINE_ONE, // 라인
  process: ProcessEnum.GLASS, // 공정
  position: PositionEnum.FRONT, // 위치
  pc: PCEnum.MAIN, // 브레인
  serialNumber: '25520479-01', // 시리얼 넘버
  anyDeskIP: '1 131 098 141', // anyDesk ip 주소
  ipv4Address: '192.168.100.11', // IPv4 주소: 192.168.100.11
  isLicense: true, // 라이선스 유무
  isNetwork: true, // 통신 가능 유무
  isProgram: true, // 프로그램 종료 여부
  launcherUpdateAt: '2025-05-22 00:00', // 런처 업데이트 일시
};

// Detail
export const HMAGMA_DETAIL: HMGMADataType = {
  id: 0,
  line: LineEnum.LINE_ONE,
  process: ProcessEnum.GLASS,
  position: PositionEnum.FRONT,
  pc: PCEnum.MAIN,
  serialNumber: '00000000-00',
  anyDeskIP: '1 131 098 141',
  ipv4Address: '000.000.000.00',
  isLicense: false,
  isNetwork: true,
  isProgram: true,
  launcherUpdateAt: '0000-00-00 00:00',
};

export const SYSTEM_PERFORMANCE = {
  cpu: {
    name: 'Intel(R) Core(TM) i7-14700', // 모델명
    baseSpeedGhz: 2.1, //  기본 속도: 2.10GHz
    sockets: 1, // 소켓: 1
    cores: 20, // 코어: 20
    logicalProcessors: 28, // 논리 프로세서: 28
    virtualizationEnabled: true, // 가상화: 사용
    cache: {
      // 캐시
      l1Mb: 1.8, // L1 캐시: 1.8MB
      l2Mb: 28.0, // L2 캐시: 28.0MB
      l3Mb: 33.0, // L3 캐시: 33.0MB
    },
    utilizationPercent: 4, // 이용률 4%
    currentSpeedGhz: 1.41, // 속도 1.41GHz
    uptime: '7:19:07:29', // 작동 시간 7:19:07:29
    processes: 305, // 프로세스 305
    threads: 5303, // 스레드 5303
    handles: 151876, // 핸들 151876
  },
  memory: {
    totalGb: 32.0, // 총 사용량 32.0GB
    speedMts: 5600, // 속도 5600 MT/s
    slotsUsed: '2/4', // 사용된 슬롯
    formFactor: 'DIMM', // 폼 팩터
    hardwareReservedMb: 233, // 하드웨어 예약 233MB
    availableGb: 13.1, // 사용 가능 13.1GB
    cachedGb: 12.6, // 캐시됨 12.6GB
    committedGb: {
      // 커밋 됨 24.9/35.3GB
      current: 24.9,
      limit: 35.3,
    },
    pagedPoolMb: 896, // 페이징 풀 896MB
    nonPagedPoolMb: 889, // 비페이징 풀 889MB
    inUseGb: {
      // 사용 중(압축) 18.5GB (2.0GB)
      total: 18.5,
      compressed: 2.0,
    },
  },
  disk: {
    id: 0,
    name: 'SHPP41-1000GM',
    driveLetter: 'C:',
    capacityGb: 932, // 용량: 932GB
    formattedCapacityGb: 932, // 포맷: 932GB
    isSystemDisk: true, // 시스템 디스크: 예
    hasPageFile: true, // 페이지 파일: 예
    type: 'SSD', // 종류: SSD
    readSpeedKbs: 8.2, // 읽기 속도 8.2KB/s
    writeSpeedKbs: 254, // 쓰기 속도 254KB/s
    activeTimePercent: 2, // 활성 시간 2%
    averageResponseTimeMs: 31.7, // 평균 응답 시간 31.7ms
  },
  ethernet: {
    name: 'Realtek Gaming 2.5GbE Family Controller #2',
    adapterName: '이더넷 2', // 어댑터 이름: 이더넷 2
    connectionType: '이더넷', // 연결 형식: 이더넷
    ipv4Address: '192.168.100.11', // IPv4 주소: 192.168.100.11
    ipv6Address: 'fe80::b821:c00:2167:d4ce%10', // IPv6 주소: fe80::b821:c00:2167:d4ce%10
    receiveKbs: 40.0, // 받기 40.0Kbps
    sendKbs: 24.0, // 보내기 24.0Kbps
  },
  wifi_direct: {
    name: 'Microsoft Wi-Fi Direct Virtual Adapter #2',
    adapterName: '로컬 영역 연결* 2', // 어댑터 이름: 로컬 영역 연결* 2
    ssid: 'DIRECT-5TBUTBXYBTGDrQH', // SSID: DIRECT-5TBUTBXYBTGDrQH
    connectionType: '802.11ax', // 연결 형식: 802.11ax
    ipv4Address: '192.168.137.1', // IPv4 주소: 192.168.137.1
    ipv6Address: 'fe80::d91d:46a6:208:deb7%18', // IPv6 주소: fe80::d91d:46a6:208:deb7%18
    receiveKbs: 0, // 받기 0Kbps
    sendKbs: 0, // 보내기 0Kbps
  },
  gpu: {
    id: 0,
    name: 'Intel(R) UHD Graphics 770',
    driverVersion: '32.0.101.6647', // 드라이버 버전: 32.0.101.6647
    driverDate: '2025-02-28', //  드라이버 날짜: 2025-02-28
    directxVersion: '12 (FL 12.1)', // DirectX 버전: 12 (FL 12.1)
    physicalLocation: 'PCI 버스 0, 장치 2, 기능 0', // 실제 위치: PCI 버스 0, 장치 2, 기능 0
    utilizationPercent: 1, // 사용률 1%
    dedicatedGpuMemory: null, //  전용 GPU 메모리
    sharedGpuMemoryGb: {
      //  공유 GPU 메모리 1.4/15.9GB
      used: 1.4,
      total: 15.9,
    },
    totalGpuMemoryGb: {
      // GPU 메모리 1.4/15.9GB
      used: 1.4,
      total: 15.9,
    },
  },
  os_info: {
    osName: 'Microsoft Windows 11 Pro', // OS 이름
    version: '10.0.26100 빌드 26100', // 버전
    otherOsDescription: null, // 기타 OS 설명: 사용할 수 없음
    osManufacturer: 'Microsoft Corporation', // OS 제조업체
    systemName: '박보민', // 시스템 이름
    systemManufacturer: 'compuzone', // 시스템 제조업체
    systemModel: 'custom pc standard', // 시스템 모델
    systemType: 'x64 기반 PC', // 시스템 종류
    systemSku: '25520479', // 시스템 SKU
    processor: {
      // 프로세서
      name: 'Intel(R) Core(TM) i7-14700',
      mhz: 2100,
      cores: 20,
      logicalProcessors: 28,
    },
    biosVersionDate: 'American Megatrends International, LLC. A.B0, 2024-09-29', // BIOS 버전/날짜
    smbiosVersion: '3.6', // SMBIOS 버전
    embeddedControllerVersion: '255.255', // 포함된 컨트롤러 버전
    mode: 'UEFI', // BIOS 모드
    baseboardManufacturer: 'Micro-Star International Co., Ltd.', // 베이스보드 제조업체
    baseboardProduct: 'PRO B760M-A WIFI (MS-7D99)', // 베이스보드 제품
    baseboardVersion: '2.0', // 베이스보드 버전
    platformRole: '데스크톱', // 플랫폼 역할
    secureBootState: '설정', // 보안 부팅 상태
    pcr7Configuration: '보려면 권한 상승 필요', // PCR7 구성
    windowsDirectory: 'C:\\Windows', // Windows 디렉터리
    systemDirectory: 'C:\\Windows\\system32', // 시스템 디렉터리
    bootDevice: '\\Device\\HarddiskVolume1', // 부팅 장치
    region: '한국', // 지역
    hardwareAbstractionLayer: '버전 = 10.0.26100.1', // 하드웨어 추상화 계층
    userName: 'AzureAD\\PARKBOMIN', // 사용자 이름
    timezone: '대한민국 표준시', // 표준 시간대
    installedPhysicalRamGb: 32.0, // 설치된 실제 메모리(RAM): 32.0GB
    totalPhysicalMemoryGb: 31.8, // 총 실제 메모리: 31.8GB
    availablePhysicalMemoryGb: 13.6, // 사용 가능한 실제 메모리: 13.6GB
    totalVirtualMemoryGb: 35.3, // 총 가상 메모리: 35.3GB
    availableVirtualMemoryGb: 11.7, // 사용 가능한 가상 메모리: 11.7GB
    pageFileSpaceGb: 3.53, // 페이지 파일 공간: 3.53GB
    pageFilePath: 'C:\\pagefile.sys', // 페이지 파일: C:\pagefile.sys
    kernelDmaProtection: '설정', // 커널 DMA 보호
    virtualizationBasedSecurityStatus: '실행 중', // 가상화 기반 보안
    virtualizationBasedSecurityRequiredSecurityProperties: ['기본 가상화 지원'], // 가상화 기반 보안 필수 보안 속성
    virtualizationBasedSecurityAvailableSecurityProperties: [
      '기본 가상화 지원',
      '보안 부팅',
      'DMA 보호',
      'UEFI 코드 읽기 전용',
      'SMM Security Mitigations 1.0',
      '모드 기반 실행 제어',
      'APIC 가상화',
    ], // 가상화 기반 보안 사용 가능한 보안 속성
    virtualizationBasedSecurityServicesConfigured: ['하이퍼바이저 적용 코드 무결성'], // 가상화 기반 보안 서비스 구성
    virtualizationBasedSecurityServicesRunning: [
      '하이퍼바이저 적용 코드 무결성',
      '하이퍼바이저 적용 페이징 변환',
    ], // 가상화 기반 보안 서비스 실행 중
    businessAppControlStatus: '적용', // Business용 앱 컨트롤
    businessAppControlUserModePolicy: '해제', // Business용 앱 컨트롤 사용자 모드 정책
    automaticDeviceEncryptionSupport: '보려면 권한 상승 필요', // 자동 장치 암호화 지원
  },
};

export const DEPLOY_ASSISTANT: DeployAssistantType[] = [
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
  {
    fileName: 'COPICK3D',
    fileRelPath: 'CoomonLibs/COPICK3D_API.dll',
    buildVersion: '1.0.0.2',
    deployer: 'CLE_IDPARK',
    updateAt: '03/21/2024 7:47:04 PM',
    hash: '1DA4...',
  },
];

// List
export const HMGMA_DATA: HMGMADataType[] = [
  {
    id: 0,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 131 098 141',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 1,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 767 348 054',
    ipv4Address: '000.000.000.00',
    isLicense: false,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 2,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 614 461 477',
    ipv4Address: '192.168.10.196',
    isLicense: true,
    isNetwork: false,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 3,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 637 105 830',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: false,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 4,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 260 590 985',
    ipv4Address: '192.168.10.195',
    isLicense: false,
    isNetwork: false,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 5,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 490 037 078',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 6,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 307 931 738',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 7,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 041 443 477',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 8,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 546 854 792',
    ipv4Address: '192.168.10.176',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 9,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.SEALER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 981 772 425',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 10,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 470 638 246',
    ipv4Address: '192.168.10.175',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 11,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 301 613 831',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 12,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 985 190 537',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 13,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 922 110 320',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 14,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 302 156 066',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 15,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 579 959 834',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 16,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 111 032 002',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 17,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 704 428 698',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 18,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 983 482 010',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 19,
    line: LineEnum.LINE_ONE,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 870 372 816',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 20,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 482 616 764',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 21,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 941 765 293',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 22,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 129 786 174',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 23,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 864 229 386',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 24,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 671 615 964',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 25,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 013 583 271',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 26,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 394 499 805',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 27,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.GLASS,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 026 859 859',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 28,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 715 930 909',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 29,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.REAR,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 205 521 693',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 30,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 991 385 999',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 31,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 923 074 485',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 32,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 318 976 755',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 33,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.RIGHT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 634 823 155',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 34,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 347 598 653',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 35,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.WHEEL,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 357 130 625',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 36,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 727 986 390',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 37,
    line: LineEnum.LINE_TWO,
    process: ProcessEnum.INSPECTION,
    position: PositionEnum.LEFT_HAND,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 660 050 206',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 38,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 290 881 738',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 39,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.GLASS,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 060 863 094',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 40,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 632 908 934',
    ipv4Address: '192.168.10.135',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 41,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.SEALER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 771 886 739',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 42,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.MAIN,
    serialNumber: '00000000-00',
    anyDeskIP: '1 163 513 671',
    ipv4Address: '192.168.10.127',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
  {
    id: 43,
    line: LineEnum.PANORAMA,
    process: ProcessEnum.PRIMER,
    position: PositionEnum.FRONT,
    pc: PCEnum.SPARE,
    serialNumber: '00000000-00',
    anyDeskIP: '1 042 481 433',
    ipv4Address: '000.000.000.00',
    isLicense: true,
    isNetwork: true,
    isProgram: true,
    launcherUpdateAt: '0000-00-00 00:00',
  },
];
