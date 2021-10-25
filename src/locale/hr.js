import DatePicker from '@huggydigital/huggy-datepicker';
import hr from 'date-format-parse/lib/locale/hr';

const lang = {
  formatLocale: hr,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('hr', lang);

export default lang;
