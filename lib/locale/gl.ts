import DatePicker from '@huggydigital/huggy-datepicker';
import gl from 'date-format-parse/es/locale/gl';

const lang = {
  formatLocale: gl,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('gl', lang);

export default lang;
