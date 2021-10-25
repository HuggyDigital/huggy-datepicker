import DatePicker from '@huggydigital/huggy-datepicker';
import es from 'date-format-parse/lib/locale/es';

const lang = {
  formatLocale: es,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('es', lang);

export default lang;
