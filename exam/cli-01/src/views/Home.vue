<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="simplePage">simple</button>
    <button @click="getInfo">info</button>
    <button @click="showPdf">pdf</button>
    <button @click="showTodoList">TodoList</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { postAxios } from '@/lib/http';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    simplePage() {
      this.$router.push('/simple');
    },
    getInfo() {
      // this.axios.post('http://qibang360.cn/jiekou/product/list', {
      //   pageSize: 5,
      //   SFSYXS: 0,
      // }).then((response) => {
      //   console.log(response.data);
      // });
      postAxios('/product/list', {
        pageSize: 5,
        SFSYXS: 0,
      }).then((response) => {
        console.log(response.data);
      });
    },
    showPdf() {
      this.$router.push('/pdf');
    },
    showTodoList() {
      this.$router.push('/todolist');
    },
  },
};
</script>
