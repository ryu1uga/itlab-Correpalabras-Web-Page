FROM node:22.15.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine

# Copiar el build de la SPA
COPY --from=builder /app/dist /usr/share/nginx/html

# Reemplazar la configuración por defecto de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# IMPORTANTE: Permisos para el grupo ROOT (GID 0) exigido por OpenShift
RUN chown -R 101:0 /usr/share/nginx/html && \
    chmod -R g+rwX /usr/share/nginx/html && \
    chown -R 101:0 /var/cache/nginx /var/log/nginx /etc/nginx && \
    chmod -R g+rwX /var/cache/nginx /var/log/nginx /etc/nginx && \
    touch /tmp/nginx.pid && \
    chown 101:0 /tmp/nginx.pid && \
    chmod g+rw /tmp/nginx.pid

# Usar el UID 101 (usuario nginx de la imagen alpine) por compatibilidad local
USER 101

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]