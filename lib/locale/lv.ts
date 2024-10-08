import DatePicker from '@huggydigital/huggy-datepicker';
import lv from 'date-format-parse/es/locale/lv';

const lang = {
  formatLocale: lv,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('lv', lang);

export default lang;
