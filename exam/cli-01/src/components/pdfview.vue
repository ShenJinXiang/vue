<template>
  <div class="pdfview">
    <div class="pdf-view-title">{{title}}</div>
    <iframe class="pdf-container" src="/pdf/web/viewer.html?file=/001.pdf"></iframe>
  </div>
</template>
<script>
export default {
  name: 'pdfview',
  data() {
    return {
      title: 'PDF-TITLE',
    };
  },
};
</script>
<style>
.pdf-container {
  width: 95%;
  height: 500px;
  display: block;
  margin: 10px auto;
}
</style>
