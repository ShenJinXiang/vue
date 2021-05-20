<template>
  <div class="simple-coms">
    <h4>counter</h4>
    <counter />
    <counter />
  </div>
</template>

<script>
// @ is an alias to /src
import counter from '@/components/counter.vue';

export default {
  name: 'Home',
  components: {
    counter,
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
