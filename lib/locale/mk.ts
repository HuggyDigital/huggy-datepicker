import DatePicker from '@huggydigital/huggy-datepicker';
import mk from 'date-format-parse/es/locale/mk';

const lang = {
  formatLocale: mk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('mk', lang);

export default lang;
