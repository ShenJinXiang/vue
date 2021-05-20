<template>
  <div class="button-counter">
    <button @click="count++" >点击了{{count}}次</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
