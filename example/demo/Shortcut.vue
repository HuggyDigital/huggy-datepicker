<template>
  <div class="box">
    <section>
      <p>shortcuts</p>
      <date-picker
        v-model="value1"
        :shortcuts="shortcuts"
        format="DD/MM/YYYY"
        value-type="format"
        range
        :shortcuts-calendar-always-open="false"
        confirm
        cancel
        placeholder="Select date"
      ></date-picker>
    </section>
    <section>
      <p>header slot</p>
      <date-picker v-model="value2" placeholder="Select date">
        <template v-slot:header="{ emit }">
          <button class="mx-btn mx-btn-text" @click="emit(new Date())">Today</button>
        </template>
      </date-picker>
    </section>
    <section>
      <p>footer slot</p>
      <date-picker v-model="value3" range placeholder="Select date range">
        <template v-slot:footer="{ emit }">
          <div style="text-align: left">
            <button class="mx-btn mx-btn-text" @click="selectNextThreeDay(emit)">
              NextThreeDay
            </button>
          </div>
        </template>
      </date-picker>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Basic',
  data() {
    return {
      value1: [this.getDate(), this.getDate()],
      value2: null,
      value3: null,
      shortcuts: {
        customShortcut: true,
        items: [
          {
            text: 'Today',
            onClick() {
              const date = new Date();
              // return a Date
              return [date, date];
            },
          },
          {
            text: 'Yesterday',
            onClick() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
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
  },
};
</script>
