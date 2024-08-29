import DatePicker from '@huggydigital/huggy-datepicker';

var locale = {
  months: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवम्बर', 'दिसम्बर'],
  monthsShort: ['जन.', 'फ़र.', 'मार्च', 'अप्रै.', 'मई', 'जून', 'जुल.', 'अग.', 'सित.', 'अक्टू.', 'नव.', 'दिस.'],
  weekdays: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'],
  weekdaysShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरू', 'शुक्र', 'शनि'],
  weekdaysMin: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 6
};

const lang = {
    formatLocale: locale,
    yearFormat: 'YYYY',
    monthFormat: 'MMM',
    monthBeforeYear: true,
};
DatePicker.locale('hi', lang);

export { lang as default };
