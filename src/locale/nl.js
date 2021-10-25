import DatePicker from '@huggydigital/huggy-datepicker';
import nl from 'date-format-parse/lib/locale/nl';

const lang = {
  formatLocale: nl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nl', lang);

export default lang;
