import DatePicker from '@huggydigital/huggy-datepicker';
import nlBE from 'date-format-parse/es/locale/nl-be';

const lang = {
  formatLocale: nlBE,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nl-be', lang);

export default lang;
