import DatePicker from '@huggydigital/huggy-datepicker';
import sr from 'date-format-parse/es/locale/sr';

const lang = {
  formatLocale: sr,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('sr', lang);

export default lang;
