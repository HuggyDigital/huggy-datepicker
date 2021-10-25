import DatePicker from 'huggy-datepicker';
import arSA from 'date-format-parse/lib/locale/ar-sa';

const lang = {
  formatLocale: arSA,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ar-sa', lang);

export default lang;
