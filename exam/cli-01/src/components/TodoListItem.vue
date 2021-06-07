<template>
  <li>
    <p class="todolist-item-info" v-show="isActive">{{ content }}</p>
    <input v-show="isActive" type="text" v-model="content" />
    <span v-show="isActive" @click="update()">确定</span>
    <span v-show="!isActive" @click="openUpd()">修改</span>
    <span @click="del()">删除</span>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  prop: ['word', 'index'],
  data() {
    return {
      content: this.word,
      isActive: false,
    };
  },
  methods: {
    update() {
      this.isActive = false;
    },
    openUpd() {
      this.isActive = true;
    },
    del() {

    },
  },
};
</script>

<style>
.todolist-container .todolist-ul li {
  display: block;
  list-style: none;
}
.todolist-container .todolist-ul li input,
.todolist-container .todolist-ul li  .todolist-item-info {
  display: inline-block;
  width: 400px;
}
</style>
