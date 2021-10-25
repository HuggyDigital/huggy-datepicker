import DatePicker from 'huggy-datepicker';
import pl from 'date-format-parse/lib/locale/pl';

const lang = {
  formatLocale: pl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('pl', lang);

export default lang;
