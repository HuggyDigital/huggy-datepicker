import DatePicker from 'huggy-datepicker';
import de from 'date-format-parse/lib/locale/de';

const lang = {
  formatLocale: de,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('de', lang);

export default lang;
