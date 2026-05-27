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

# PERMISOS CRÍTICOS: OpenShift usa un UID aleatorio pero SIEMPRE pertenece al grupo GID 0 (root)
RUN chown -R 101:0 /usr/share/nginx/html && \
    chmod -R g+rwX /usr/share/nginx/html && \
    # Damos permisos al grupo 0 sobre las carpetas de Nginx y logs
    chown -R 101:0 /var/cache/nginx /var/log/nginx /etc/nginx && \
    chmod -R g+rwX /var/cache/nginx /var/log/nginx /etc/nginx && \
    # En Alpine, /var/run suele ser un enlace a /run. Aseguramos permisos ahí para el PID por defecto
    chown -R 101:0 /var/run /run && \
    chmod -R g+rwX /var/run /run

# Forzamos a ejecutar con UID 101 y GID 0 (Grupo root) para entornos locales
USER 101:0

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]