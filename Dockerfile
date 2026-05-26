FROM node:22.15.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

# Copiar el build
COPY --from=builder /app/dist /usr/share/nginx/html

# Config nginx para SPA + puerto 8080 (OpenShift no permite root/80)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Permisos para OpenShift (corre como usuario no-root)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]