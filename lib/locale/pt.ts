import DatePicker from '@huggydigital/huggy-datepicker';
import pt from 'date-format-parse/es/locale/pt';

const lang = {
  formatLocale: pt,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pt', lang);

export default lang;
