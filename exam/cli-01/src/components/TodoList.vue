<template>
  <div class="todolist-container">
    <input type="text" v-model="currentVal" class="todolist-input" />
    <button @click="addWord" class="=todolist-btn">添加</button>
    <ul class="todolist-ul">
      <li v-for="(item, index) in list" :key="index" >
        <p class="todolist-item-info" v-show="!item.isActive">{{ item.word }}</p>
        <input v-show="item.isActive" type="text" v-model="item.word" />
        <span v-show="item.isActive" @click="update(index)">修改</span>
        <span v-show="!item.isActive" @click="openUpd(index)">修改</span>
        <span @click="delItem(index)">删除</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      currentVal: '',
      idCount: 1,
      list: [],
    };
  },
  methods: {
    addWord() {
      if (this.currentVal) {
        this.idCount += 1;
        this.list.push({
          id: this.idCount,
          word: this.currentVal,
          isActive: false,
        });
        this.currentVal = '';
        console.log(this.list);
      }
    },
    openUpd(index) {
      if (this.list[index]) {
        this.list[index].isActive = true;
      }
    },
    update(index) {
      this.list[index].isActive = false;
    },
    delItem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

<style>
.todolist-container {
  display: block;
  margin: 10px auto;
}
.todolist-container .todolist-input {
  display: inline-block;
  width: 400px;
}
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
