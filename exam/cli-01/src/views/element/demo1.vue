<template>
  <div class="element-con">
    <h4>{{ title }}</h4>
    <table-data1></table-data1>
  </div>
</template>
<script>
import TableData1 from '@/components/element/TableData1.vue';

export default {
  name: 'elementDemo1',
  data() {
    return {
      title: 'element-exam-demo1',
    };
  },
  components: {
    TableData1,
  },
};
</script>
<style>

</style>
