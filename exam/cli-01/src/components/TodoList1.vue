<template>
  <div class="todolist-container">
    <input type="text" v-model="currentVal" class="todolist-input" />
    <button @click="addWord" class="=todolist-btn">添加</button>
    <ul class="todolist-ul">
      <li v-for="(item, index) in list" :key="index">
        <todo-list-item :word="item" :index="index"
                       @deleteItem="deleteItem" @updateItem="updateItem" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList1',
  components: { TodoListItem },
  data() {
    return {
      currentVal: '',
      list: [],
    };
  },
  methods: {
    addWord() {
      if (this.currentVal) {
        this.list.push(this.currentVal);
        this.currentVal = '';
        console.log(this.list);
      }
    },
    deleteItem() {
      console.log('delete');
    },
    updateItem() {
      console.log('update');
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
