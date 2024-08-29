import DatePicker from '@huggydigital/huggy-datepicker';
import kk from 'date-format-parse/es/locale/kk';

const lang = {
  formatLocale: kk,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('kk', lang);

export default lang;
