<template>
  <div class="com-counter">
    <p>点击次数：{{count}}</p>
    <button @click="clicked" class="btn default">点击</button>
    <button @click="clearCount" class="btn default">清零</button>
  </div>
</template>
<script>
export default {
  name: 'com-counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clicked() {
      this.count += 1;
    },
    clearCount() {
      this.count = 0;
    },
  },
};
</script>

<style>
.com-counter p {
  text-align: left;
  text-indent: 10px;
}
.com-counter button {
  display: inline-block;
  margin: 5px 10px;
}
.com-counter button.default {
  background: #fff;
  border-radius: 3px;
  border-color: #ccc;
}
</style>
