import { FunctionalComponent, SetupContext } from 'vue';
import { Assign, PickByValueExact } from 'utility-types';
import Picker, { PickerProps } from './Picker';
import { DateTimeProps } from './datetime/DateTime';
import { DateTimeRangeProps } from './datetime/DateTimeRange';
import { pick } from './util/base';
import { keys, resolveProps } from './vueUtil';

type DatePickerProps = Assign<DateTimeProps, PickerProps>;

type DatePickerRangeProps = {
  range: true;
} & Assign<DateTimeRangeProps, PickerProps>;

export type DatePickerComponentProps = DatePickerProps | DatePickerRangeProps;

const booleanKeys = keys<PickByValueExact<Required<DatePickerComponentProps>, boolean>>()([
  'range',
  'open',
  'appendToBody',
  'clearable',
  'confirm',
  'disabled',
  'editable',
  'multiple',
  'partialUpdate',
  'showHour',
  'showMinute',
  'showSecond',
  'showTimeHeader',
  'showTimePanel',
  'showWeekNumber',
  'use12h',
  'cancel',
  'columnCalendar',
  'simpleRangeText',
  'calendarLockeIcon',
  'showIcon',
]);

const formatMap = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  year: 'YYYY',
  month: 'YYYY-MM',
  time: 'HH:mm:ss',
  week: 'w',
};

function DatePicker(originalProps: DatePickerComponentProps, { slots }: SetupContext) {
  const type = originalProps.type || 'date';
  const format = originalProps.format || formatMap[type] || formatMap.date;
  const props = { ...resolveProps(originalProps, booleanKeys), type, format };

  return (
    <Picker {...pick(props, Picker.props)}>
      {{
        ['icon-calendar']: () =>
          props.showIcon !== false ? (
            type === 'time' ? (
              <i class="locke locke-clock" style="font-size: 18px" />
            ) : props.calendarLockeIcon ? (
              <i class="locke locke-calendar" style="font-size: 18px" />
            ) : (
              <i class="locke locke-calendar" style="font-size: 18px" />
            )
          ) : null,
        ...slots,
      }}
    </Picker>
  );
}

export default DatePicker as FunctionalComponent<DatePickerComponentProps, any>;
