import DatePicker from '@huggydigital/huggy-datepicker';
import sv from 'date-format-parse/lib/locale/sv';

const lang = {
  formatLocale: sv,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('sv', lang);

export default lang;
