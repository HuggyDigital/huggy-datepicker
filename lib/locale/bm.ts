import DatePicker from '@huggydigital/huggy-datepicker';
import bm from 'date-format-parse/es/locale/bm';

const lang = {
  formatLocale: bm,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bm', lang);

export default lang;
