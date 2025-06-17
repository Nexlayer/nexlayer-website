"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import useSocketListener from "@/hooks/useSocketListener";

export type Deployment = {
  id: number;
  product: string;
  timestamp: number;
  status: string;
  message: string;
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

  const SOCKET_URL = "https://nexlayer.com";

  // Listen for sendToRoom events in the 'deployments' room
  const { data: socketDeployment } = useSocketListener(
    "deployments",
    "deployment-started"
  );

  // When a new deployment notification arrives, add it to state
  useEffect(() => {
    if (socketDeployment) {
      const newDeployment: Deployment = {
        id: nextIdRef.current++,
        product: "Product launched",
        timestamp: Date.now(),
        status: socketDeployment.status,
        message: socketDeployment.message
      };

      setNotifications((prev) => [newDeployment, ...prev]);
      setVisibleNotifications((prev) => {
        const recent = prev
          .filter((n) => Date.now() - n.timestamp < 9000)
          .slice(-maxVisibleNotifications + 1);
        return [...recent, newDeployment];
      });
      setUnreadCount((prev) => Math.min(prev + 1, 999));
    }
  }, [socketDeployment]);

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
