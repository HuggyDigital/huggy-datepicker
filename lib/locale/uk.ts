import DatePicker from '@huggydigital/huggy-datepicker';
import uk from 'date-format-parse/es/locale/uk';

const lang = {
  formatLocale: uk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('uk', lang);

export default lang;
