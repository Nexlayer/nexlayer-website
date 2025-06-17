import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Allow all origins for development
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  console.log('auth: ', JSON.stringify(socket.handshake.auth));

  // Handle room joining
  socket.on('join-room', (room) => {
    socket.join(room);
    console.log(`Client ${socket.id} joined room: ${room}`);
  });

  // Handle room leaving
  socket.on('leave-room', (room) => {
    socket.leave(room);
    console.log(`Client ${socket.id} left room: ${room}`);
  });

  // Handle deployment events
  socket.on('sendToRoom', (data) => {
    const room = data.room;
    delete data.room;
    console.log('Received deployment event:', data);
    io.to(room).emit('deployment-started', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 8080;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

export default io; 