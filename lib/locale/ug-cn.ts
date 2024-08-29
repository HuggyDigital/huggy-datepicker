import DatePicker from '@huggydigital/huggy-datepicker';
import ugCN from 'date-format-parse/es/locale/ug-cn';

const lang = {
  formatLocale: ugCN,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('ug-cn', lang);

export default lang;
