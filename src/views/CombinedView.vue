<template>
    <div class="combined-view">
      <h1>Vista Combinada</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Agregar Tarea</h2>
          <!-- Componente de agregar tarea -->
          <AddTask />
        </div>
        <div class="col-md-6">
          <h2>Lista de Tareas</h2>
          <!-- Componente de lista de tareas -->
          <TaskList :tasks="tasks" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importar los componentes de Agregar Tarea y Lista de Tareas
  import AddTask from '@/views/AddTask.vue';
  import TaskList from '@/views/AboutView.vue';
  
  export default {
    name: 'CombinedView',
    components: {
      AddTask,
      TaskList,
    },
    data() {
      return {
        // Aquí deberías gestionar las tareas, puedes usar una data o props
        tasks: [
          { id: 1, todo: 'Tarea 1', completed: false },
          { id: 2, todo: 'Tarea 2', completed: true },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .combined-view {
    padding: 20px;
  }
  
  h2 {
    margin-top: 20px;
  }
  </style>
  