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
  ip: string;
};

interface NotificationContextProps {
  notifications: Deployment[];
  unreadCount: number;
  visibleNotifications: Deployment[];
  isPanelOpen: boolean;
  setIsPanelOpen: (val: boolean) => void;
  markAllRead: () => void;
}

const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Deployment[]>([]);
  const [visibleNotifications, setVisibleNotifications] = useState<Deployment[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const nextIdRef = useRef(0);
  const maxVisibleNotifications = 1;

  const cityToCountry: Record<string, { country: string; flag: string }> = {
    "New York City": { country: "United States", flag: "🇺🇸" },
    "San Francisco": { country: "United States", flag: "🇺🇸" },
    Austin: { country: "United States", flag: "🇺🇸" },
    Miami: { country: "United States", flag: "🇺🇸" },
    London: { country: "United Kingdom", flag: "🇬🇧" },
    Tokyo: { country: "Japan", flag: "🇯🇵" },
    Berlin: { country: "Germany", flag: "🇩🇪" },
    Singapore: { country: "Singapore", flag: "🇸🇬" },
    Toronto: { country: "Canada", flag: "🇨🇦" },
    Vancouver: { country: "Canada", flag: "🇨🇦" },
    Sydney: { country: "Australia", flag: "🇦🇺" },
    Paris: { country: "France", flag: "🇫🇷" },
    Amsterdam: { country: "Netherlands", flag: "🇳🇱" },
    Bangalore: { country: "India", flag: "🇮🇳" },
    Seoul: { country: "South Korea", flag: "🇰🇷" },
    Stockholm: { country: "Sweden", flag: "🇸🇪" },
    "Tel Aviv": { country: "Israel", flag: "🇮🇱" },
    Dubai: { country: "UAE", flag: "🇦🇪" },
    Zurich: { country: "Switzerland", flag: "🇨🇭" },
    "Hong Kong": { country: "Hong Kong", flag: "🇭🇰" },
  };

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
        message: socketDeployment.message,
        ip: socketDeployment.ip,
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

export default NotificationProvider;

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotifications must be used inside NotificationProvider"
    );
  return context;
};
