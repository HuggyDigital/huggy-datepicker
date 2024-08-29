import DatePicker from '@huggydigital/huggy-datepicker';
import arSA from 'date-format-parse/es/locale/ar-sa';

const lang = {
  formatLocale: arSA,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar-sa', lang);

export default lang;
