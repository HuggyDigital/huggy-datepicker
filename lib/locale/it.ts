import DatePicker from '@huggydigital/huggy-datepicker';
import it from 'date-format-parse/es/locale/it';

const lang = {
  formatLocale: it,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('it', lang);

export default lang;
