<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="simplePage">simple</button>
    <button @click="getInfo">info</button>
    <button @click="showPdf">pdf</button>
    <button @click="showTodoList">TodoList</button>
    <button @click="showElement">Element-UI</button>
    <div>
      <span>{{ title }}</span>
      <span>{{ name }}</span>
      <span>{{ age }}</span>
    </div>
    <div>
      <span>{{time1}}</span>
      <span>{{time2}}</span>
      <span>{{time3}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { postAxios } from '@/lib/http';

export default {
  name: 'Home',
  data() {
    return {
      name: this.GlobalCliObj.name,
      age: this.GlobalCliObj.age,
      title: this.$config.title,
      time1: this.$moment(),
      time2: this.$moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      time3: this.$moment().format('YYYY-MM-DD, HH:mm:ss SSS - a'),
    };
  },
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
    showElement() {
      this.$router.push('/element');
    },
  },
};
</script>

<style>
span {
  display: inline-block;
  padding: 5px 10px;
}
</style>
