# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build

# Socket.IO build stage
FROM node:20-alpine AS socket-builder
WORKDIR /socket
COPY package*.json .
COPY tsconfig.socket.json .
COPY lib/socketServer.ts .
RUN npm install --legacy-peer-deps
RUN npm install -g typescript
RUN npm install @types/node @types/socket.io --legacy-peer-deps
RUN tsc --project tsconfig.socket.json

# Production stage
FROM nginx:alpine
# Install Node.js and npm
RUN apk add --update nodejs npm

# Copy Socket.IO server files
COPY --from=socket-builder /socket/dist/socketServer.js /socket/
COPY --from=socket-builder /socket/node_modules /socket/node_modules

# Copy Nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .

# Expose both Nginx and Socket.IO ports
EXPOSE 80 8080

# Start both Nginx and Socket.IO server
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]