import DatePicker from '@huggydigital/huggy-datepicker';
import th from 'date-format-parse/es/locale/th';

const lang = {
  formatLocale: th,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('th', lang);

export default lang;
