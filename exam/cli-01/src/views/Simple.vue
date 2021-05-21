<template>
  <div class="simple-coms">
    <h1>{{title}}</h1>
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
import config from '@/config';

export default {
  name: 'Home',
  data() {
    return {
      title: config.title,
    };
  },
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
