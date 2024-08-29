import DatePicker from '@huggydigital/huggy-datepicker';

var locale = {
  months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
  monthsShort: ['jan', 'feb', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec'],
  weekdays: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  weekdaysShort: ['vas', 'hét', 'kedd', 'sze', 'csüt', 'pén', 'szo'],
  weekdaysMin: ['v', 'h', 'k', 'sze', 'cs', 'p', 'szo'],
  firstDayOfWeek: 1,
  firstWeekContainsDate: 4
};

const lang = {
    formatLocale: locale,
    yearFormat: 'YYYY',
    monthFormat: 'MMM',
    monthBeforeYear: false,
};
DatePicker.locale('hu', lang);

export { lang as default };
