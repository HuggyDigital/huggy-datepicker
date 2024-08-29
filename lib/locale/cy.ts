import DatePicker from '@huggydigital/huggy-datepicker';
import cy from 'date-format-parse/es/locale/cy';

const lang = {
  formatLocale: cy,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('cy', lang);

export default lang;
