import DatePicker from 'huggy-datepicker';
import da from 'date-format-parse/lib/locale/da';

const lang = {
  formatLocale: da,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('da', lang);

export default lang;
