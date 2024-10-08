import DatePicker from '@huggydigital/huggy-datepicker';
import hu from 'date-format-parse/es/locale/hu';

const lang = {
  formatLocale: hu,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('hu', lang);

export default lang;
