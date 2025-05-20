'use client';

import BadgeView from '@/app/(protected)/components/BadgeView';
import ButtonView from '@/app/(protected)/components/ButtonView';
import CalendarView from '@/app/(protected)/components/CalendarView';
import CardRadioView from '@/app/(protected)/components/CardRadioView';
import DropButtonView from '@/app/(protected)/components/DropButtonView';
import InputSmallView from '@/app/(protected)/components/InputSmallView';
import InputView from '@/app/(protected)/components/InputView';
import LabelView from '@/app/(protected)/components/LabelView';
import LinkButtonView from '@/app/(protected)/components/LinkButtonView';
import ModalView from '@/app/(protected)/components/ModalView';
import RadioView from '@/app/(protected)/components/RadioView';
import SliderView from '@/app/(protected)/components/SliderView';
import TableView from '@/app/(protected)/components/TableView';
import TabView from '@/app/(protected)/components/TabView';
import TextFieldView from '@/app/(protected)/components/TextFieldView';
import ToggleView from '@/app/(protected)/components/ToggleView';

export default function Components() {
  return (
    <div className='flex flex-col gap-8'>
      <h1>Design System Components</h1>
      <div className='flex flex-col gap-8'>
        <InputView />
        <InputSmallView />
        <TextFieldView />
        <LabelView />
        <SliderView />
        <ButtonView />
        <LinkButtonView />
        <RadioView />
        <ToggleView />
        <CardRadioView />
        <TabView />
        <DropButtonView />
        <CalendarView />
        <TableView />
        <ModalView />
        <BadgeView />
      </div>
    </div>
  );
}
