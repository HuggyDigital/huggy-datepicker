import DatePicker from '@huggydigital/huggy-datepicker';
import ka from 'date-format-parse/es/locale/ka';

const lang = {
  formatLocale: ka,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ka', lang);

export default lang;
