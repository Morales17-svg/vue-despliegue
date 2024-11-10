<template>
  <div class="welcome-container">
    <h1>Bienvenido a la Aplicación de Tareas con Vue</h1>
    <p>
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas
      manualmente o extraerlas desde una API.
    </p>
    <div class="logo-container">
      <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
    </div>
    <h2>Secciones de la Aplicación</h2>
    <ul>
      <li><strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.</li>
      <li><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</li>
      <li><strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</li>
    </ul>
  </div>
</template>

<style scoped>
.welcome-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.welcome-container h1 {
  color: #007bff;
  font-size: 2.5em;
  margin-bottom: 10px;
}

.welcome-container p {
  color: #6c757d;
  font-size: 1.1em;
  margin-bottom: 30px;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.logo-container img {
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.welcome-container h2 {
  color: #00cfff;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.welcome-container ul {
  list-style-type: none;
  padding: 0;
  color: #6c757d;
  text-align: left;
}

.welcome-container li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.welcome-container li strong {
  color: #007bff;
}
</style>
