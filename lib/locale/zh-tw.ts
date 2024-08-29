import DatePicker from '@huggydigital/huggy-datepicker';
import zhTW from 'date-format-parse/es/locale/zh-tw';

const lang = {
  formatLocale: zhTW,
  yearFormat: 'YYYY年',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('zh-tw', lang);

export default lang;
