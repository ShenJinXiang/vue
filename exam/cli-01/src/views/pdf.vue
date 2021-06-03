<template>
  <div class="pdf">
    <pdfview />
  </div>
</template>

<script>
import pdfview from '@/components/pdfview.vue';

export default {
  name: 'pdf',
  components: {
    pdfview,
  },
};
</script>
