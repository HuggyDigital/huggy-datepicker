import DatePicker from '@huggydigital/huggy-datepicker';
import eo from 'date-format-parse/es/locale/eo';

const lang = {
  formatLocale: eo,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('eo', lang);

export default lang;
