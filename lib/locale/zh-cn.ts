import DatePicker from '@huggydigital/huggy-datepicker';
import zhCN from 'date-format-parse/es/locale/zh-cn';

const lang = {
  formatLocale: zhCN,
  yearFormat: 'YYYY年',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('zh-cn', lang);

export default lang;
