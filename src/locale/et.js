import DatePicker from 'huggy-datepicker';
import et from 'date-format-parse/lib/locale/et';

const lang = {
  formatLocale: et,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('et', lang);

export default lang;
