<template>
    <div class="task-item">
      <div>
        <h5 :class="{ completed: completed }">{{ title }}</h5>
        <span>{{ completed ? 'Completada' : 'Pendiente' }}</span>
      </div>
  
      <div>
        <button @click="$emit('toggle-completion')">
          Marcar como {{ completed ? 'Pendiente' : 'Completada' }}
        </button>
        <button @click="$emit('delTodo')">Eliminar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      title: String,
      completed: Boolean,
    },
  };
  </script>
  
  <style scoped>
  .task-item {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  button {
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  