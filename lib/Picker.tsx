import { parse, format, getWeek } from 'date-format-parse';
import { DeepPartial } from 'utility-types';
import { computed, toRef, ref, h, watchEffect, SetupContext, StyleValue } from 'vue';
import { provideGetWeek, provideLocale, providePrefixClass } from './context';
import Popup from './Popup';
import PickerInput, { PickerInputBaseProps, pickerInputBaseProps } from './PickerInput';
import { isPlainObject, pick } from './util/base';
import { ClassValue, DateValue, Formatter, Locale, PickerType, Valuetype } from './type';
import { isValidDate } from './util/date';
import { defineVueComponent, keys, withDefault } from './vueUtil';
import { IconWarning } from './svg';
import TimeRange from './time/TimeRange';
import DateTimeRange from './datetime/DateTimeRange';
import CalendarRange from './calendar/CalendarRange';
import TimePanel from './time/TimePanel';
import DateTime from './datetime/DateTime';
import Calendar from './calendar/Calendar';

export interface PickerBaseProps {
  type?: PickerType;
  format?: string;
  value?: DateValue;
  valueType?: Valuetype;
  formatter?: Formatter;
  lang?: string | DeepPartial<Locale>;
  prefixClass?: string;
  appendToBody?: boolean;
  open?: boolean;
  popupClass?: ClassValue | any;
  popupStyle?: StyleValue;
  confirm?: boolean;
  confirmText?: string;
  inline?: boolean;
  cancel?: boolean;
  cancelText?: string;
  shortcuts?: Array<{ text: string; onClick: () => Date | Date[] }> | any;
  isCustomSelected?: boolean;
  shortcutsCalendarAlwaysOpen?: boolean;
  columnCalendar?: boolean;
  maxDaysRange?: any;
  titleFormat?: string;
  disabledDate?: (v: Date) => boolean;
  disabledTime?: (v: Date) => boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onConfirm?: (v: any) => void;
  onChange?: (v: any, type?: string) => void;
  ['onUpdate:open']?: (open: boolean) => void;
  ['onUpdate:value']?: (v: any) => void;
}

export type PickerProps = PickerBaseProps & PickerInputBaseProps;

export interface SlotProps {
  value: any;
  ['onUpdate:value']: (value: any, type: string) => void;
  emit: (value: any, type?: string, close?: boolean) => void;
}

function Picker(originalProps: PickerProps, { slots }: SetupContext) {
  const props = withDefault(originalProps, {
    prefixClass: 'mx',
    valueType: 'date',
    format: 'YYYY-MM-DD',
    type: 'date' as PickerType,
    disabledDate: () => false,
    disabledTime: () => false,
    confirmText: 'OK',
    cancelText: 'Cancel',
    shortcuts: [],
  });

  providePrefixClass(props.prefixClass);
  provideGetWeek(props.formatter?.getWeek || getWeek);
  const locale = provideLocale(toRef(originalProps, 'lang'));

  const container = ref<HTMLDivElement>();

  const getContainer = () => container.value;

  const defaultOpen = ref(false);
  const customShortcutInserted = ref(false);
  const currentShortcut = ref(null);
  const isCustom = ref(true);
  const maxLimitReached = ref(false);

  const shortcutsComputed = computed(() => {
    const shortcuts = Array.isArray(props.shortcuts) ? props.shortcuts : props.shortcuts.items;
    if (typeof props.shortcuts === 'object') {
      if (shortcuts.length > 0)
        customShortcutInserted.value = shortcuts[shortcuts.length - 1].custom;

      if (!customShortcutInserted.value) {
        let shortcutSelected = false;

        if (!props.isCustomSelected && Array.isArray(currentValue.value)) {
          const formatedCurrentValue = currentValue.value.map((item) => {
            return `${item.getDate()}/${item.getMonth()}/${item.getFullYear()}`;
          });
          shortcuts.forEach((shortcut: any, index: any) => {
            const formatedShortcutValue =
              typeof shortcut.onClick() !== 'undefined'
                ? shortcut.onClick().map((item: any) => {
                    return `${item.getDate()}/${item.getMonth()}/${item.getFullYear()}`;
                  })
                : '';
            shortcut.selected =
              formatedCurrentValue.toString() === formatedShortcutValue.toString();

            if (shortcut.selected) {
              isCustom.value = false;
              shortcutSelected = true;
              currentShortcut.value = index;
            }
          });
        }

        customShortcutInserted.value = true;
        if (!shortcutSelected) {
          currentShortcut.value = shortcuts.length;
          isCustom.value = true;
        }
        if (props.shortcuts.customShortcut) {
          shortcuts.push({
            text: props.shortcuts.customShortcutText
              ? props.shortcuts.customShortcutText
              : 'Custom',
            onClick() {},
            custom: true,
            selected: !shortcutSelected && currentValue.value !== null,
          });
        }
      }
    }

    return shortcuts;
  });

  const hasShortcutCustomCalendar = computed(() => {
    if (shortcutsComputed.value.length > 0 && isCustom.value) {
      return true;
    }
    return false;
  });

  const popupVisible = computed(() => {
    return !props.disabled && (typeof props.open === 'boolean' ? props.open : defaultOpen.value);
  });

  const openPopup = () => {
    if (props.disabled || popupVisible.value) return;
    defaultOpen.value = true;
    props['onUpdate:open']?.(true);
    props.onOpen?.();
  };

  const shortcutSelectedIndex = () => {
    if (currentValue.value && Array.isArray(currentValue.value)) {
      const formatedCurrentValue = currentValue.value.map((item) => {
        return `${item.getDate()}/${item.getMonth()}/${item.getFullYear()}`;
      });
      return shortcutsComputed.value.findIndex((shortcut: any) => {
        const formatedShortcutValue = shortcut.onClick()
          ? shortcut.onClick().map((item: any) => {
              return `${item.getDate()}/${item.getMonth()}/${item.getFullYear()}`;
            })
          : null;

        if (!formatedShortcutValue) return true;
        return formatedCurrentValue.toString() === formatedShortcutValue.toString();
      });
    }
    return -1;
  };

  const closePopup = (confirmed = false) => {
    currentValue.value = innerValue.value;
    let shortcutsComputedIndex = shortcutSelectedIndex();

    if (confirmed)
      shortcutsComputedIndex = shortcutsComputed.value.findIndex((v: any) => v.selected === true);

    if (shortcutsComputedIndex !== -1) {
      currentShortcut.value = shortcutsComputedIndex;
      if (
        shortcutsComputedIndex !== shortcutsComputed.value.length - 1 ||
        !props.shortcuts.customShortcut
      )
        isCustom.value = false;
      else isCustom.value = true;
    }

    if (!popupVisible.value) return;
    defaultOpen.value = false;
    props['onUpdate:open']?.(false);
    props.onClose?.();
  };

  const closePopupOutside = () => {
    closePopup();
  };

  const setCustomShortcut = () => {
    if (shortcutsComputed.value.length > 0) {
      shortcutsComputed.value.forEach((s: any) => {
        s.selected = false;
        if (s.custom) {
          s.selected = true;
        }
      });
    }
  };

  const formatDate = (date: Date, fmt?: string): string => {
    fmt = fmt || props.format;
    if (isPlainObject(props.formatter) && typeof props.formatter.stringify === 'function') {
      return props.formatter.stringify(date, fmt);
    }
    return format(date, fmt, { locale: locale.value.formatLocale });
  };

  const parseDate = (value: string, fmt?: string): Date => {
    fmt = fmt || props.format;
    if (isPlainObject(props.formatter) && typeof props.formatter.parse === 'function') {
      return props.formatter.parse(value, fmt);
    }
    const backupDate = new Date();
    return parse(value, fmt, { locale: locale.value.formatLocale, backupDate });
  };

  const value2date = (value: unknown) => {
    switch (props.valueType) {
      case 'date':
        return value instanceof Date ? new Date(value.getTime()) : new Date(NaN);
      case 'timestamp':
        return typeof value === 'number' ? new Date(value) : new Date(NaN);
      case 'format':
        return typeof value === 'string' ? parseDate(value) : new Date(NaN);
      default:
        return typeof value === 'string' ? parseDate(value, props.valueType) : new Date(NaN);
    }
  };

  const date2value = (date: Date | null) => {
    if (!isValidDate(date)) return null;
    switch (props.valueType) {
      case 'date':
        return date;
      case 'timestamp':
        return date.getTime();
      case 'format':
        return formatDate(date);
      default:
        return formatDate(date, props.valueType);
    }
  };

  const innerValue = computed(() => {
    const value = props.value;
    if (props.range) {
      return (Array.isArray(value) ? value.slice(0, 2) : [null, null]).map(value2date);
    }
    if (props.multiple) {
      return (Array.isArray(value) ? value : []).map(value2date);
    }
    return value2date(value);
  });

  const emitValue = (date: Date | Date[] | null | null[], type?: string, close = true) => {
    const value = Array.isArray(date) ? date.map(date2value) : date2value(date);
    props['onUpdate:value']?.(value);
    props.onChange?.(value, type);
    if (close) {
      closePopup(true);
    }
    return value;
  };

  // cache
  const currentValue = ref<Date | Date[]>(new Date());
  watchEffect(() => {
    if (popupVisible.value) {
      currentValue.value = innerValue.value;
      shortcutsComputed.value.forEach((value: any, key: any) => {
        value.selected = false;
        if (key === currentShortcut.value) {
          value.selected = true;
        }
      });
    }
  });

  const handleSelect = (val: Date | Date[], type: string) => {
    if (props.confirm) {
      currentValue.value = val;
    } else {
      // type === 'datetime', click the time should close popup
      emitValue(val, type, !props.multiple && (type === props.type || type === 'time'));
    }
  };

  const handleSelectOneDate = (val: any) => {
    setCustomShortcut();
    const val2 = currentValue.value;
    currentValue.value = val;
    currentValue.value = val2;
  };

  const handleSelectMaxLimit = (days: number) => {
    maxLimitReached.value = props.maxDaysRange ? days > props.maxDaysRange.days : false;
  };

  const handleConfirm = () => {
    const value = emitValue(currentValue.value);
    props.onConfirm?.(value);
  };

  const handleCancel = () => {
    shortcutsComputed.value.forEach((value: any, key: any) => {
      value.selected = false;
      if (key === currentShortcut.value) {
        value.selected = true;
      }
    });
    closePopup();
  };

  const handleSelectShortcut = (evt: any) => {
    if (!props.shortcutsCalendarAlwaysOpen) isCustom.value = false;
    const index = parseInt(evt.currentTarget.getAttribute('data-index'), 10);
    shortcutsComputed.value.forEach((shortcut: any) => {
      shortcut.selected = false;
    });
    const item = shortcutsComputed.value[index];
    item.selected = true;
    if (typeof item === 'object' && typeof item.onClick === 'function') {
      if (item.custom) {
        isCustom.value = true;
      }
      const date = item.onClick();
      if (date) {
        if (props.confirm) {
          currentValue.value = date;
        } else {
          emitValue(date, '', !props.confirm);
        }
      }
    }
  };

  const disabledDateTime = (v: Date) => {
    return props.disabledDate(v) || props.disabledTime(v);
  };

  /*
  const renderContent2 = (slotProps: SlotProps) => {
    if (props.range) {
      const Content =
        props.type === 'time'
          ? TimeRange
          : props.type === 'datetime'
          ? DateTimeRange
          : CalendarRange;
      return h(new Content(), pick({ ...props, ...slotProps }, Content.props));
    } else {
      const Content =
        props.type === 'time' ? TimePanel : props.type === 'datetime' ? DateTime : Calendar;
      return h(new Content(), pick({ ...props, ...slotProps }, Content.props));
    }
  };
  */

  const renderContent = (slotProps: SlotProps) => {
    const { prefixClass } = props;
    const componentMap = {
      default: Calendar,
      time: TimePanel,
      datetime: DateTime,
    };
    const componentRangeMap = {
      default: CalendarRange,
      time: TimeRange,
      datetime: DateTimeRange,
    };
    const map = props.range ? componentRangeMap : componentMap;
    const selectComponent = (type: string) => {
      if (type === 'time') {
        return map.time;
      }
      if (type === 'datetime') {
        return map.datetime;
      }
      return map.default;
    };

    const Component = selectComponent(props.type);
    const content = <Component {...pick({ ...props, ...slotProps }, Component.props)} />;

    const contentHtml = (
      <div class={`${prefixClass}-datepicker-body${props.columnCalendar ? ' wrapper-column' : ''}`}>
        {h(content, pick({ ...props, ...slotProps }, content.props))}
      </div>
    );
    if (!props.shortcutsCalendarAlwaysOpen && isCustom.value) {
      return <div class={`${prefixClass}-expand`}>{contentHtml}</div>;
    }
    if (props.shortcutsCalendarAlwaysOpen) {
      return contentHtml;
    }
    return '';
  };

  const renderSidebar = (slotProps: SlotProps) => {
    const { prefixClass } = props;
    return (
      <div class={[`${prefixClass}-datepicker-sidebar`]}>
        {slots.sidebar?.(slotProps)}
        {(shortcutsComputed.value || []).map((v: any, i: any) => {
          return (
            <button
              key={i}
              data-index={i}
              type="button"
              class={`${prefixClass}-btn ${prefixClass}-btn-text ${prefixClass}-btn-shortcut ${
                v.selected ? 'active' : ''
              }`}
              onClick={handleSelectShortcut}
            >
              {v.text}
            </button>
          );
        })}
      </div>
    );
  };

  return () => {
    const { prefixClass, disabled, inline, confirm, range, popupClass, popupStyle, appendToBody } =
      props;

    const slotProps = {
      value: currentValue.value,
      ['onUpdate:value']: handleSelect,
      selectone: handleSelectOneDate,
      selectRange: handleSelectMaxLimit,
      emit: emitValue,
    };

    const header = slots.header && (
      <div class={`${prefixClass}-datepicker-header`}>{slots.header(slotProps)}</div>
    );

    const footer = (slots.footer || confirm) && (
      <div class={`${prefixClass}-datepicker-footer`}>
        {slots.footer?.(slotProps)}
        {props.confirm || props.cancel ? (
          <div class={`${prefixClass}-footer-buttons`}>
            {props.cancel && isCustom.value ? (
              <button
                type="button"
                class={`${prefixClass}-btn ${prefixClass}-datepicker-btn-cancel`}
                onClick={handleCancel}
              >
                {props.cancelText}
              </button>
            ) : (
              <div />
            )}
            {props.maxDaysRange && isCustom.value && maxLimitReached.value ? (
              <div class={`${prefixClass}-footer-warning`}>
                <span class="icon">
                  <IconWarning />
                </span>
                <span>{props.maxDaysRange.text}</span>
              </div>
            ) : null}
            {confirm && (
              <button
                type="button"
                class={`${prefixClass}-btn ${prefixClass}-datepicker-btn-confirm`}
                onClick={handleConfirm}
              >
                {props.confirmText}
              </button>
            )}
          </div>
        ) : null}
      </div>
    );

    const sidebar =
      slots.sidebar || shortcutsComputed.value.length ? renderSidebar(slotProps) : null;

    const content = (
      <div
        class={[
          `${prefixClass}-datepicker-content`,
          hasShortcutCustomCalendar.value ? 'collapsed' : '',
        ]}
      >
        {sidebar}
        {renderContent(slotProps)}
      </div>
    );

    return (
      <div
        ref={container}
        class={{
          [`${prefixClass}-datepicker`]: true,
          [`${prefixClass}-datepicker-range`]: range,
          [`${prefixClass}-datepicker-inline`]: inline,
          disabled,
        }}
      >
        <PickerInput
          {...pick(props, pickerInputBaseProps)}
          value={innerValue.value}
          formatDate={formatDate}
          parseDate={parseDate}
          disabledDate={disabledDateTime}
          onChange={emitValue}
          onClick={openPopup}
          onFocus={openPopup}
          onBlur={closePopup}
          v-slots={pick(slots, ['icon-calendar', 'icon-clear', 'input'])}
        />
        {!inline ? (
          <Popup
            className={[popupClass]}
            style={popupStyle}
            visible={popupVisible.value}
            appendToBody={appendToBody}
            getRelativeElement={getContainer}
            onClickOutside={closePopupOutside}
          >
            {header}
            {content}
            {footer}
          </Popup>
        ) : (
          <div class={`${prefixClass}-datepicker-main`}>
            {header}
            {content}
            {footer}
          </div>
        )}
      </div>
    );
  };
}

const pickerbaseProps = keys<PickerBaseProps>()([
  'value',
  'valueType',
  'type',
  'format',
  'formatter',
  'lang',
  'prefixClass',
  'appendToBody',
  'open',
  'popupClass',
  'popupStyle',
  'confirm',
  'confirmText',
  'shortcuts',
  'disabledDate',
  'disabledTime',
  'inline',
  'cancel',
  'cancelText',
  'isCustomSelected',
  'shortcutsCalendarAlwaysOpen',
  'columnCalendar',
  'maxDaysRange',
  'titleFormat',
  'onOpen',
  'onClose',
  'onConfirm',
  'onChange',
  'onUpdate:open',
  'onUpdate:value',
]);

const pickerProps = [...pickerbaseProps, ...pickerInputBaseProps];

export default defineVueComponent(Picker, pickerProps);
