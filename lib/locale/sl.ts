import DatePicker from '@huggydigital/huggy-datepicker';
import sl from 'date-format-parse/es/locale/sl';

const lang = {
  formatLocale: sl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('sl', lang);

export default lang;
