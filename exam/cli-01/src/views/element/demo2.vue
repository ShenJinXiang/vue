<template>
  <div class="element-con">
    <h4>{{ title }}</h4>
    <cssw-table></cssw-table>
  </div>
</template>
<script>
import CsswTable from '@/components/element/CsswTable.vue';

export default {
  name: 'elementDemo2',
  data() {
    return {
      title: 'element-exam-demo2',
    };
  },
  components: {
    CsswTable,
  },
};
</script>
<style>

</style>
