<template>
  <div class="box">
    <section>
      <p>shortcuts</p>
      <date-picker
        v-model:value="value1"
        :shortcuts="shortcuts"
        format="DD/MM/YYYY"
        value-type="format"
        range
        simple-range-text
        :max-days-range="{ days: 10, text: 'ALLOWED_DAYS_LIMIT' }"
        :disabled-date="notAfterToday"
        :shortcuts-calendar-always-open="false"
        confirm
        cancel
        placeholder="Select date"
        :show-icon="true"
      ></date-picker>
    </section>
    <section>
      <p>header slot</p>
    </section>
    <section>
      <p>footer slot</p>
    </section>
  </div>
</template>

<script>
import DatePicker from '@huggydigital/huggy-datepicker';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      value1: [this.getDate(), this.getDate()],
      value2: null,
      value3: null,
      shortcuts: {
        customShortcut: true,
        items: [
          {
            text: 'Yesterday',
            onClick() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return [date, date];
            },
          },
          {
            text: 'Tomorrow',
            onClick() {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              return [date, date];
            },
          },
        ],
      },
    };
  },
  methods: {
    getDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();

      today = `${dd}/${mm}/${yyyy}`;
      return today;
    },
    selectNextThreeDay(emit) {
      const start = new Date();
      const end = new Date();
      end.setTime(end.getTime() + 3 * 24 * 3600 * 1000);
      const date = [start, end];
      emit(date);
    },
    notAfterToday(date) {
      const today = new Date();
      today.setTime(today.getTime() + 1 * 24 * 3600 * 1000);
      return date.getTime() > today.getTime();
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 24px;
}
</style>
