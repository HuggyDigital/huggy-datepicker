import DatePicker from '@huggydigital/huggy-datepicker';
import ar from 'date-format-parse/es/locale/ar';

const lang = {
  formatLocale: ar,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar', lang);

export default lang;
