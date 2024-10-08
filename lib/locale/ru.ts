import DatePicker from '@huggydigital/huggy-datepicker';
import ru from 'date-format-parse/es/locale/ru';

const lang = {
  formatLocale: ru,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ru', lang);

export default lang;
