<template>
  <div class="todolist-box">
    <todo-list />
    <todo-list1 />
  </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue';
import TodoList1 from '@/components/TodoList1.vue';

export default {
  components: { TodoList, TodoList1 },
};
</script>
