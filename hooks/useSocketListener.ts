import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Type for the events you're expecting to receive
interface ServerToClientEvents {
  'deployment-started': (data: { 
    type: string;
    status: string;
    message: string;
    ip: string;
  }) => void;
}

const SOCKET_URL = 'https://objective-eel-nexlayer-website.alpha.nexlayer.ai';

export const useSocketListener = <T extends keyof ServerToClientEvents>(
  room: string,
  eventName: T,
  initialData?: Parameters<ServerToClientEvents[T]>[0]
) => {
  const [data, setData] = useState<Parameters<ServerToClientEvents[T]>[0] | undefined>(initialData);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      transports: ['websocket'],
      autoConnect: true,
    });

    socket.on('connect', () => {
      setIsConnected(true);
      socket.emit('join-room', room);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on(eventName, (newData: Parameters<ServerToClientEvents[T]>[0]) => {
      setData(newData);
    });

    return () => {
      socket.emit('leave-room', room);
      socket.disconnect();
    };
  }, [room, eventName]);

  return {
    data,
    isConnected
  };
};

export default useSocketListener; 