<template>
    <div class="container mt-4 add-task-container">
      <h1 class="text-center mb-4">Lista de Tareas</h1>
      <button @click="fetchTasks" class="btn btn-primary w-100 mb-4">Cargar Tareas</button>
      <TaskList :tasks="tasks" @toggle-completion="toggleTaskCompletion" @delete-task="deleteTask" />
    </div>
  </template>
  
  <script>
  import TaskList from './TaskList.vue';
  
  export default {
    name: "AboutView",
    components: { TaskList },
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await fetch("https://dummyjson.com/todos");
          const data = await response.json();
          this.tasks = data.todos.map(task => ({
            ...task,
            todo: task.todo || "Sin título",
          }));
        } catch (error) {
          console.error("Error al obtener las tareas:", error);
        }
      },
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .add-task-container {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  