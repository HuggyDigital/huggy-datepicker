import DatePicker from '@huggydigital/huggy-datepicker';
import fi from 'date-format-parse/es/locale/fi';

const lang = {
  formatLocale: fi,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('fi', lang);

export default lang;
