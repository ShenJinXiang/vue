<template>
  <div class="simple-coms">
    <h4>counter</h4>
    <counter />
    <buttonCounter />
    <buttonCounter />
  </div>
</template>

<script>
// @ is an alias to /src
import counter from '@/components/counter.vue';
import buttonCounter from '@/components/buttonCounter.vue';

export default {
  name: 'Home',
  components: {
    counter,
    buttonCounter,
  },
};
</script>

<style>
.simple-coms {
  display: block;
}
.simple-coms h4 {
  text-align: left;
}
</style>
