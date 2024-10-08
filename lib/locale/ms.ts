import DatePicker from '@huggydigital/huggy-datepicker';
import ms from 'date-format-parse/es/locale/ms';

const lang = {
  formatLocale: ms,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ms', lang);

export default lang;
