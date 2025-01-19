# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY ./app/frontend ./frontend

# Construir la aplicación
RUN npm run build --prefix frontend

# Etapa 2: Servir los archivos estáticos
FROM nginx:alpine

# Copiar los archivos construidos desde la etapa anterior al servidor web
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# Exponer el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
