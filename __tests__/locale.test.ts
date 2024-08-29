import { mount, VueWrapper } from '@vue/test-utils';
import DatePicker from '../lib/DatePicker';
import '../lib/locale/zh-cn';

let wrapper: VueWrapper<any>;

afterEach(() => {
  wrapper.unmount();
});

describe('Locale', () => {
  it('render the correct default locale', () => {
    wrapper = mount(DatePicker, {
      props: {
        value: new Date(2019, 9, 10),
        open: true,
        appendToBody: false,
      },
    });
    expect(wrapper.find('.mx-table-date td').attributes('title')).toBe('2019-09-30');
  });

  it('prop: lang - string', async () => {
    wrapper = mount(DatePicker, {
      props: {
        value: new Date(2019, 9, 10),
        open: true,
        lang: 'en',
        titleFormat: 'MMM DD, YYYY',
        appendToBody: false,
      },
    });
    expect(wrapper.find('.mx-table-date th').text()).toBe('S');
    expect(wrapper.find('.mx-table-date .active').attributes('title')).toBe('Oct 10, 2019');
    expect(wrapper.find('.mx-btn-current-month').text()).toBe('October');
    await wrapper.find('.mx-btn-current-month').trigger('click');
    expect(wrapper.find('.mx-table-month td').text()).toBe('Jan');
  });

  it('prop: lang - object', () => {
    wrapper = mount(DatePicker, {
      props: {
        open: true,
        appendToBody: false,
        lang: {
          formatLocale: {
            firstDayOfWeek: 2,
          },
          days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        },
        calendarTextFormat: {month: 'MMM', week: 'MM'},
      },
    });
    expect(wrapper.find('.mx-table-date th').text()).toBe('周');
  });
});
