import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',   // Escuchar en todas las interfaces de red
    port: 5173,         // Asegúrate de que el puerto esté configurado correctamente
    watch: {
      usePolling: true, // Forzar el uso de polling
      interval: 100,    // Intervalo de polling (puedes aumentar este valor si es necesario)
    },
    hmr: {
      protocol: 'ws',   // Usar WebSocket para la recarga en caliente
      host: '0.0.0.0', // Configuración del host para HMR
    },
  },
});
