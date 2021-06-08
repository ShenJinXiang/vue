<template>
  <div class="element-con">
    <h3>{{ title }}</h3>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'elementHome',
  data() {
    return {
      title: 'element-exam',
    };
  },
};
</script>
<style>

</style>
