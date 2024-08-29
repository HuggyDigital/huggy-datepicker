import DatePicker from '@huggydigital/huggy-datepicker';
import ta from 'date-format-parse/es/locale/ta';

const lang = {
  formatLocale: ta,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ta', lang);

export default lang;
