import DatePicker from 'huggy-datepicker';
import he from 'date-format-parse/lib/locale/he';

const lang = {
  formatLocale: he,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('he', lang);

export default lang;
