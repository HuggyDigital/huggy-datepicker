# huggy-datepicker

<a href="https://travis-ci.com/huggydigital/huggy-datepicker">
  <img src="https://travis-ci.com/huggydigital/huggy-datepicker.svg?branch=main" alt="build:passed">
</a>
<a href="https://coveralls.io/github/huggydigital/huggy-datepicker">
  <img src="https://coveralls.io/repos/github/huggydigital/huggy-datepicker/badge.svg?branch=main&service=github" alt="Badge">
</a>
<a href="https://www.npmjs.com/package/@huggydigital/huggy-datepicker">
  <img src="https://img.shields.io/npm/v/@huggydigital/huggy-datepicker.svg" alt="npm">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT">
</a>

## Demo

<https://huggydigital.github.io/huggy-datepicker/index.html>

![image](https://github.com/huggydigital/huggy-datepicker/raw/main/screenshot/demo.png)

## Install

```bash
$ npm install @huggydigital/huggy-datepicker --save

or

$ yarn add @huggydigital/huggy-datepicker
```

## Usage

```html
<script>
  import DatePicker from '@huggydigital/huggy-datepicker';
  import '@huggydigital/huggy-datepicker/index.css';

  export default {
    components: { DatePicker },
    data() {
      return {
        time1: null,
        time2: null,
        time3: null,
      };
    },
  };
</script>

<template>
  <div>
    <date-picker v-model="time1" valueType="format"></date-picker>
    <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker>
  </div>
</template>
```

## Theme

If your project uses SCSS, you can change the default style variables.

To create a scss file. e.g. `datepicker.scss`:

```scss
$namespace: 'xmx'; // change the 'mx' to 'xmx'. then <date-picker prefix-class="xmx" />

$default-color: #555;
$primary-color: #321BDE;

@import '~@huggydigital/huggy-datepicker/scss/index.scss';
```

## Internationalization

The default language of v3.x is English. If you need other locales,
you can import a locale file.
Once you import a locale, it becomes the active locale.

```js
import DatePicker from '@huggydigital/huggy-datepicker';
import '@huggydigital/huggy-datepicker/index.css';

import '@huggydigital/huggy-datepicker/locale/pt-br';
```

You can also override some of the default locale by `lang`.
[Full config](https://github.com/huggydigital/huggy-datepicker/blob/main/locale.md)

```html
<script>
  export default {
    data() {
      return {
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: false,
        },
      };
    },
  };
</script>

<template>
  <date-picker :lang="lang"></date-picker>
</template>
```

### Props

| Prop                           | Description                                                           | Type                                            | Default        |
| ------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------- | -------------- |
| type                           | select the type of picker                                             | date \|datetime\|year\|month\|time\|week        | 'date'         |
| range                          | if true, pick the range date                                          | `boolean`                                       | false          |
| format                         | to set the date format. similar to moment.js                          | [token](#token)                                 | 'YYYY-MM-DD'   |
| formatter                      | use your own formatter, such as moment.js                             | [object](#formatter)                            | -              |
| value-type                     | data type of the binding value                                        | [value-type](#value-type)                       | 'date'         |
| default-value                  | default date of the calendar                                          | `Date`                                          | new Date()     |
| lang                           | override the default locale                                           | `object`                                        |                |
| placeholder                    | input placeholder text                                                | `string`                                        | ''             |
| editable                       | whether the input is editable                                         | `boolean`                                       | true           |
| clearable                      | if false, don't show the clear icon                                   | `boolean`                                       | true           |
| confirm                        | if true, need click the button to change value                        | `boolean`                                       | false          |
| confirm-text                   | the text of confirm button                                            | `string`                                        | 'OK'           |
| cancel                         | if true, shows the cancel button to close popup                       | `boolean`                                       | false          |
| cancel-text                    | the text of cancel button                                             | `string`                                        | 'Cancel'        |
| multiple                       | if true, multi-select date                                            | `boolean`                                       | false          |
| disabled                       | disable the component                                                 | `boolean`                                       | false          |
| disabled-date                  | specify the date that cannot be selected                              | `(date: Date, currentValue: Date[]) => boolean` | -              |
| disabled-time                  | specify the time that cannot be selected                              | `(date: Date) => boolean`                       | -              |
| append-to-body                 | append the popup to body                                              | `boolean`                                       | true           |
| inline                         | without input                                                         | `boolean`                                       | false          |
| input-class                    | input classname                                                       | `string`                                        | 'mx-input'     |
| input-attr                     | input attrs(eg: { name: 'date', id: 'foo'})                           | `object`                                        | —              |
| open                           | open state of picker                                                  | `boolean`                                       | -              |
| default-panel                  | default panel of the picker                                           | year\|month                                     | -              |
| popup-style                    | popup style                                                           | `object`                                        | —              |
| popup-class                    | popup classes                                                         |                                                 | —              |
| show-icon                      | if false, doesn't display any locke icon                              | `boolean`                                       | true           |
| shortcuts                      | set shortcuts to select                                               | `Array<{text, onClick}>` \| `{customShorcut: boolean, customShorcutText: string, items: Array<{text, onClick}>}` | -              |
| shortcuts-calendar-always-open | if false, datepicker is opened only when custom shortcut is selected  | `boolean`                                       | true           |
| is-custom-selected             | if true, show preset date as a costum value                           | `boolean`                                       | false          |
| title-format                   | format of the tooltip in calendar cell                                | [token](#token)                                 | 'YYYY-MM-DD'   |
| calendar-text-format           | week and months formats in the table date                             | `object`                                        | —              |
| partial-update                 | whether update date when select year or month                         | `boolean`                                       | false          |
| range-separator                | text of range separator                                               | `string`                                        | ' ~ '          |
| simple-range-text              | don't show range text when only one day is selected                   | `string`                                        | false          |
| show-week-number               | determine whether show week number                                    | `boolean`                                       | false          |
| hour-step                      | interval between hours in time picker                                 | 1 - 60                                          | 1              |
| minute-step                    | interval between minutes in time picker                               | 1 - 60                                          | 1              |
| second-step                    | interval between seconds in time picker                               | 1 - 60                                          | 1              |
| hour-options                   | custom hour column                                                    | `Array<number>`                                 | -              |
| minute-options                 | custom minute column                                                  | `Array<number>`                                 | -              |
| second-options                 | custom second column                                                  | `Array<number>`                                 | -              |
| show-hour                      | whether show hour column                                              | `boolean`                                       | base on format |
| show-minute                    | whether show minute column                                            | `boolean`                                       | base on format |
| show-second                    | whether show second column                                            | `boolean`                                       | base on format |
| use12h                         | whether show ampm column                                              | `boolean`                                       | base on format |
| show-time-header               | whether show header of time picker                                    | `boolean`                                       | false          |
| time-title-format              | format of the time header                                             | [token](#token)                                 | 'YYYY-MM-DD'   |
| time-picker-options            | set fixed time list to select                                         | [time-picker-options](#time-picker-options)     | null           |
| prefix-class                   | set prefix class                                                      | `string`                                        | 'mx'           |
| scroll-duration                | set the duration of scroll when hour is selected                      | `number`                                        | 100            |
| column-calendar                | set if calendar range display direction is column                     | `boolean`                                       | false          |
| max-days-range                 | set max range warning for shortcut datepicker custom                  | `object { days: Number, text: string }`         | null           |


#### Token

| Uint                       | Token | output                                 |
| -------------------------- | ----- | -------------------------------------- |
| Year                       | YY    | 70 71 ... 10 11                        |
|                            | YYYY  | 1970 1971 ... 2010 2011                |
|                            | Y     | -1000 ...20 ... 1970 ... 9999 +10000   |
| Month                      | M     | 1 2 ... 11 12                          |
|                            | MM    | 01 02 ... 11 12                        |
|                            | MMM   | Jan Feb ... Nov Dec                    |
|                            | MMMM  | January February ... November December |
| Day of Month               | D     | 1 2 ... 30 31                          |
|                            | DD    | 01 02 ... 30 31                        |
| Day of Week                | d     | 0 1 ... 5 6                            |
|                            | dd    | Su Mo ... Fr Sa                        |
|                            | ddd   | Sun Mon ... Fri Sat                    |
|                            | dddd  | Sunday Monday ... Friday Saturday      |
| AM/PM                      | A     | AM PM                                  |
|                            | a     | am pm                                  |
| Hour                       | H     | 0 1 ... 22 23                          |
|                            | HH    | 00 01 ... 22 23                        |
|                            | h     | 1 2 ... 12                             |
|                            | hh    | 01 02 ... 12                           |
| Minute                     | m     | 0 1 ... 58 59                          |
|                            | mm    | 00 01 ... 58 59                        |
| Second                     | s     | 0 1 ... 58 59                          |
|                            | ss    | 00 01 ... 58 59                        |
| Fractional Second          | S     | 0 1 ... 8 9                            |
|                            | SS    | 00 01 ... 98 99                        |
|                            | SSS   | 000 001 ... 998 999                    |
| Time Zone                  | Z     | -07:00 -06:00 ... +06:00 +07:00        |
|                            | ZZ    | -0700 -0600 ... +0600 +0700            |
| Week of Year               | w     | 1 2 ... 52 53                          |
|                            | ww    | 01 02 ... 52 53                        |
| Unix Timestamp             | X     | 1360013296                             |
| Unix Millisecond Timestamp | x     | 1360013296123                          |

#### formatter

The `formatter` accepts an object to customize formatting.

```html
<date-picker :formatter="momentFormat" />
```

```js
data() {
  return {
    // Use moment.js instead of the default
    momentFormat: {
      //[optional] Date to String
      stringify: (date) => {
        return date ? moment(date).format('LL') : ''
      },
      //[optional]  String to Date
      parse: (value) => {
        return value ? moment(value, 'LL').toDate() : null
      },
      //[optional] getWeekNumber
      getWeek: (date) => {
        return // a number
      }
    }
  }
}

```

#### value-type

set the format of binding value

| Value             | Description                                          |
| ----------------- | ---------------------------------------------------- |
| 'date'            | return a Date object                                 |
| 'timestamp'       | return a timestamp number                            |
| 'format'          | returns a string formatted using pattern of `format` |
| token(MM/DD/YYYY) | returns a string formatted using this pattern        |

#### shortcuts

The shortcuts for the range picker

```js
[
  { text: 'today', onClick: () => new Date() },
  {
    text: 'Yesterday',
    onClick: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
];
```
or
```js
{
  customShortcut: true,
  customShortcutText: 'Personalisado',
  items: [
    { text: 'today', onClick: () => new Date() },
    {
      text: 'Yesterday',
      onClick: () => {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        return date;
      },
    },
  ]
};
```

| Attribute | Description                               |
| --------- | ----------------------------------------- |
| text      | title of the shortcut                     |
| onClick   | callback function , need to return a Date |

#### calendar-text-format

Format of the text of month and week shown on table date picker

```js
{
  month: 'MMMM',
  // MMMM: 'full',
  // MMM: 'short',
  week: 'W',
  // WWW: 'short',
  // WW: 'min',
  // W: 'initial',
};
```

#### time-picker-options

Set fixed time list to select;

```js
{start: '00:00', step:'00:30' , end: '23:30', format: 'HH:mm' }
```

| Attribute | Description                          |
| --------- | ------------------------------------ |
| start     | start time                           |
| step      | step time                            |
| end       | end time                             |
| format    | the default is same as prop `format` |

### Events

| Name            | Description                                                                        | Callback Arguments                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| input           | When the value change(v-model event)                                               | date                                                                                                                     |
| change          | When the value change(same as input)                                               | date, type('date'\|'hour'\|'minute'\|'second'\|'ampm                                                                     |
| open            | When panel opening                                                                 | event                                                                                                                    |
| close           | When panel closing                                                                 |                                                                                                                          |
| confirm         | When click 'confirm' button                                                        | date                                                                                                                     |
| clear           | When click 'clear' button                                                          |                                                                                                                          |
| input-error     | When user type a invalid Date                                                      | the input text                                                                                                           |
| focus           | When input focus                                                                   |                                                                                                                          |
| blur            | When input blur                                                                    |                                                                                                                          |
| pick            | when select date [#429](https://github.com/mengxiong10/vue2-datepicker/issues/429) | date                                                                                                                     |
| calendar-change | when change the calendar                                                           | date, oldDate, type('year'\|'month'\|'last-year'\|'next-year'\|'last-month'\|'next-month'\|'last-decade'\|'next-decade') |
| panel-change    | when the calendar panel changes                                                    | type('year'\|'month'\|'date'), oldType                                                                                   |

### Slots

| Name          | Description              |
| ------------- | ------------------------ |
| icon-calendar | custom the calender icon |
| icon-clear    | custom the clear icon    |
| input         | replace input            |
| header        | popup header             |
| footer        | popup footer             |
| sidebar       | popup sidebar            |

## ChangeLog

[CHANGELOG](CHANGELOG.md)
## License

[MIT](https://github.com/huggydigital/huggy-datepicker/blob/main/LICENSE)

Copyright (c) 2021-present huggydigital
