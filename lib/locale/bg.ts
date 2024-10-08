import DatePicker from '@huggydigital/huggy-datepicker';
import bg from 'date-format-parse/es/locale/bg';

const lang = {
  formatLocale: bg,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('bg', lang);

export default lang;
