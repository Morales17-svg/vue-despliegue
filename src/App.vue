<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Gestor de Tareas</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/addtask">Agregar Tarea</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Lista de Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/combinedview">Vistas combinadas</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-bottom: 30px;
}

nav .nav-link {
  font-weight: bold;
  color: #2c3e50;
}

nav .nav-link.active {
  color: #007bff; /* Resalta el enlace activo */
}
</style>
