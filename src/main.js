import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Importa el JS para los componentes interactivos de Bootstrap

const app = createApp(App);
app.use(router);  // Usa el enrutador en la aplicación
app.mount('#app');  // Monta la aplicación en el div con id 'app'
