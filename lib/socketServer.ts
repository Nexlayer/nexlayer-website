import { Server } from 'socket.io';
import { createServer } from 'http';
import type { Socket } from 'socket.io';

interface DeploymentData {
  room: string;
  type: string;
  status: string;
  message: string;
}

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST']
  },
  path: '/socket.io/', // Explicit path for WebSocket connections
  transports: ['websocket', 'polling'], // Allow both WebSocket and polling
  allowEIO3: true, // Allow Engine.IO v3 clients
  pingTimeout: 60000, // Increase ping timeout for Kubernetes networking
  pingInterval: 25000, // Adjust ping interval
});

io.on('connection', (socket: Socket) => {
  console.log('Client connected:', socket.id);
  console.log('auth: ', JSON.stringify(socket.handshake.auth));

  // Handle room joining
  socket.on('join-room', (room: string) => {
    socket.join(room);
    console.log(`Client ${socket.id} joined room: ${room}`);
  });

  // Handle room leaving
  socket.on('leave-room', (room: string) => {
    socket.leave(room);
    console.log(`Client ${socket.id} left room: ${room}`);
  });

  // Handle deployment events
  socket.on('sendToRoom', (data: DeploymentData) => {
    const { room, ...deploymentData } = data;
    console.log('Received deployment event:', deploymentData);
    io.to(room).emit('deployment-started', deploymentData);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 8080;
httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

export default io; 