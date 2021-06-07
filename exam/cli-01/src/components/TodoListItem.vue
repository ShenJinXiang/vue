<template>
  <div class="todolist-item-con">
    <p class="todolist-item-info" v-show="!isActive">{{ item }}</p>
    <input v-show="isActive" type="text" v-model="content" />
    <span v-show="isActive" @click="update()">确定</span>
    <span v-show="!isActive" @click="openUpd()">修改</span>
    <span @click="del()">删除</span>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['item', 'index'],
  data() {
    return {
      content: this.item,
      isActive: false,
    };
  },
  methods: {
    update() {
      this.$emit('updateListItem', this.content, this.index);
      this.isActive = false;
    },
    openUpd() {
      this.content = this.item;
      this.isActive = true;
    },
    del() {
      this.$emit('deleteListItem', this.index);
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
