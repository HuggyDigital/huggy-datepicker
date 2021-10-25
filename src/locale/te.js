import DatePicker from 'huggy-datepicker';
import te from 'date-format-parse/lib/locale/te';

const lang = {
  formatLocale: te,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('te', lang);

export default lang;
