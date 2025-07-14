<template>
  <div>
    <date-picker
      v-model:value="value"
      :time-labels="labels"
      type="time"
      format="HH:mm"
      confirm
      confirm-text="Apply"
      placeholder="00:00"
    ></date-picker>
  </div>
</template>

<script>
export default {
  name: 'TimeLabel',
  data() {
    return {
      value: null,
      labels: {
        hour: 'Hours',
        minute: 'Minutes',
      },
    };
  },
};
</script>
