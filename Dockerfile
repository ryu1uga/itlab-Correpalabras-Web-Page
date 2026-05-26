FROM node:22.15.0-alpine AS build

WORKDIR /app

# Copiar package.json y lock si existe
COPY package*.json ./

RUN npm ci --silent

COPY . .

# Build estático de la app (usa "build" en package.json)
RUN npm run build

# Stage final: nginx para servir los archivos estáticos (más adecuado para OpenShift)
FROM nginx:stable-alpine

# Eliminar el contenido por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar build al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Hacer que el contenido sea accesible por un UID arbitrario (OpenShift)
RUN chown -R 0:0 /usr/share/nginx/html && \
    chmod -R g+rwX /usr/share/nginx/html

# Copiar configuración de nginx si necesitas SPA fallback (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]