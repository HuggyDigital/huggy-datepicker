import { computed, defineComponent, h, onMounted, ref } from 'vue';
import DatePicker from '@huggydigital/huggy-datepicker';
import Card from './Card';
import listEn from '../en.md';

const getCurrentId = () => {
  return window.location.hash.slice(1);
};

export default defineComponent({
  name: 'App',
  setup() {
    const activeCardId = ref(getCurrentId());
    const activeTitleId = ref('');
    const lang = ref('en');

    const list = computed(() => listEn);

    const handleScroll = () => {
      for (let i = 0; i < list.value.length; i++) {
        const { id } = list.value[i];
        const el = document.getElementById(id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top >= 0) {
            activeTitleId.value = id;
            break;
          }
        }
      }
    };

    onMounted(() => {
      window.onhashchange = () => {
        activeCardId.value = getCurrentId();
      };
      if (activeCardId.value) {
        document.getElementById(activeCardId.value)?.scrollIntoView();
      }
    });

    return () => {
      return (
        <div class="container">
          <header class="header">
            <a
              class="mx-btn-text mx-btn title"
              href="https://github.com/huggydigital/huggy-datepicker"
              target="_blank"
            >
              GitHub
            </a>
          </header>
          <div class="main">
            <div class="sidebar">
              {list.value.map((item: any) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  title={item.title}
                  innerHTML={item.title}
                  class={{ active: activeTitleId.value === item.id }}
                ></a>
              ))}
            </div>
            <div class="content" onScroll={handleScroll}>
              {list.value.map((item: any) => {
                const { Component, id, ...rest } = item;
                const props = {
                  active: id === activeCardId.value,
                  id,
                  ...rest,
                };
                return <Card {...props}>{h(Component)}</Card>;
              })}
            </div>
          </div>
        </div>
      );
    };
  },
});
