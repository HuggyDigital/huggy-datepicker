import DatePicker from '@huggydigital/huggy-datepicker';
import ko from 'date-format-parse/es/locale/ko';

const lang = {
  formatLocale: ko,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: false,
};

DatePicker.locale('ko', lang);

export default lang;
