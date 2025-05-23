# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]