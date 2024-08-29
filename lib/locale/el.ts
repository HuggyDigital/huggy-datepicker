import DatePicker from '@huggydigital/huggy-datepicker';
import el from 'date-format-parse/es/locale/el';

const lang = {
  formatLocale: el,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('el', lang);

export default lang;
