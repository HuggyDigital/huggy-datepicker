import DatePicker from '@huggydigital/huggy-datepicker';
import az from 'date-format-parse/es/locale/az';

const lang = {
  formatLocale: az,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('az', lang);

export default lang;
