FROM node:22.15.0-alpine AS build

WORKDIR /app

ENV NODE_ENV=production

# Copiar package.json y lock
COPY package*.json ./

RUN npm ci --silent

COPY . .

# Build estático de la app
RUN npm run build

FROM nginx:stable-alpine

# Remover contenido por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar build al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración nginx que escucha en 8080 y hace SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Permisos para UID arbitrario (OpenShift)
RUN chown -R 0:0 /usr/share/nginx/html /var/cache/nginx && \
    chmod -R g+rwX /usr/share/nginx/html /var/cache/nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]