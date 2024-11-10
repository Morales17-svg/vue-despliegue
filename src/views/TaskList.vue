<template>
    <div class="container mt-4 task-list">
      <div v-if="tasks.length > 0">
        <div v-for="task in tasks" :key="task.id" class="task-item d-flex justify-content-between align-items-center p-2 border-bottom">
          <span :class="{ completed: task.completed }" class="flex-grow-1">
            {{ task.todo }}
          </span>
          <div>
            <button @click="toggleCompletion(task)" class="btn btn-sm btn-outline-success me-2">
              {{ task.completed ? 'Desmarcar' : 'Completar' }}
            </button>
            <button @click="deleteTask(task)" class="btn btn-sm btn-outline-danger">
              Eliminar
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">No hay tareas para mostrar. Carga las tareas usando el botón arriba.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    props: {
      tasks: {
        type: Array,
        required: true
      }
    },
    methods: {
      toggleCompletion(task) {
        this.$emit("toggle-completion", task);
      },
      deleteTask(task) {
        this.$emit("delete-task", task);
      }
    }
  };
  </script>
  
  <style scoped>
  .task-list {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  