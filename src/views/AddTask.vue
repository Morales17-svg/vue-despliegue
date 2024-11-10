<template>
    <div class="container mt-4 add-task-container">
      <h1 class="text-center mb-4">Añadir Tarea</h1>
      <div class="input-group mb-3">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Añadir nueva tarea"
          class="form-control"
        />
        <button @click="addTask" class="btn btn-primary">Añadir</button>
      </div>
      <div v-if="tasks.length > 0" class="task-list">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item d-flex justify-content-between align-items-center p-2 border-bottom"
        >
          <span :class="{ completed: task.completed }" class="flex-grow-1">
            {{ task.todo }}
          </span>
          <div>
            <button
              @click="toggleTaskCompletion(task)"
              class="btn btn-sm btn-outline-success me-2"
            >
              {{ task.completed ? "Desmarcar" : "Completar" }}
            </button>
            <button
              @click="deleteTask(task)"
              class="btn btn-sm btn-outline-danger"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddTask",
    data() {
      return {
        newTask: "", // Tarea a añadir
        tasks: [], // Arreglo de tareas
      };
    },
    methods: {
      // Método para añadir una nueva tarea
      addTask() {
        if (this.newTask.trim() === "") return; // Si está vacío, no hace nada
  
        const newTask = {
          todo: this.newTask,
          completed: false, // La tarea no está completada por defecto
          id: Date.now(), // Usamos el timestamp como id único
        };
  
        this.tasks.unshift(newTask); // Añadimos la nueva tarea al principio
        this.newTask = ""; // Limpiamos el campo de entrada
      },
      // Método para eliminar una tarea
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id); // Filtramos la tarea a eliminar
      },
      // Método para marcar como completada o incompleta
      toggleTaskCompletion(task) {
        task.completed = !task.completed; // Cambiamos el estado de completado
      },
    },
  };
  </script>
  
  <style scoped>
  .add-task-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  .task-item {
    cursor: pointer;
  }
  
  .task-item .completed {
    color: #6c757d;
  }
  
  .task-item .btn {
    min-width: 90px;
  }
  
  .input-group input {
    max-width: 450px;
  }
  </style>
  