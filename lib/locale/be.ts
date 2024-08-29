import DatePicker from '@huggydigital/huggy-datepicker';
import be from 'date-format-parse/es/locale/be';

const lang = {
  formatLocale: be,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('be', lang);

export default lang;
