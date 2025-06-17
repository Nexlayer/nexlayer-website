import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'https://objective-eel-nexlayer-website.alpha.nexlayer.ai',
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  console.log('auth: ', JSON.stringify(socket.handshake.auth));

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

io.on('sendToRoom', (data) => {
    const room = data.room;
    delete data.room;
    console.log('hello',data)

    io.to(room).emit('deployment-started', data);
});

const PORT = 8080;
httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});

export default io; 