"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { io, Socket } from "socket.io-client";

export type Deployment = {
  id: number;
  product: string;
  timestamp: number;
  status: "completed" | "in-progress" | "failed";
};

interface NotificationContextProps {
  notifications: Deployment[];
  unreadCount: number;
  visibleNotifications: Deployment[];
  isPanelOpen: boolean;
  setIsPanelOpen: (val: boolean) => void;
  markAllRead: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<Deployment[]>([]);
  const [visibleNotifications, setVisibleNotifications] = useState<Deployment[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const nextIdRef = useRef(1);
  const maxVisibleNotifications = 1;

  const SOCKET_URL = process.env.NEXT_PUBLIC_DEPLOYMENT_SOCKET_URL || "https://deployer.nexlayer.io";

  const handleDeployment = (data: { templateID: string; status: string; timestamp: string }) => {
    const deployment: Deployment = {
      id: nextIdRef.current++,
      product: data.templateID || "deployment",
      status: data.status as Deployment["status"],
      timestamp: new Date(data.timestamp).getTime(),
    };

    setNotifications((prev) => [deployment, ...prev]);
    setVisibleNotifications((prev) => {
      const recent = prev
        .filter((n) => Date.now() - n.timestamp < 9000)
        .slice(-maxVisibleNotifications + 1);
      return [...recent, deployment];
    });
    setUnreadCount((prev) => Math.min(prev + 1, 999));
  };

  useEffect(() => {
    const socket: Socket = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      console.log("[nexlayer.com] Connected to deployment socket");
      socket.emit("joinRoom", "deployments");
    });

    socket.on("newDeployment", (data) => {
      console.log("📡 newDeployment received:", data);
      handleDeployment(data);
    });

    socket.on("disconnect", () => {
      console.log("[nexlayer.com] Disconnected from socket");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const markAllRead = () => setUnreadCount(0);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        visibleNotifications,
        isPanelOpen,
        setIsPanelOpen,
        markAllRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotifications must be used inside NotificationProvider");
  return context;
};
