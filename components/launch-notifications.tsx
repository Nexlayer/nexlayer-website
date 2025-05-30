"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

export type Deployment = {
  id: number;
  product: string;
  city: string;
  country: string;
  flag: string;
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

const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<Deployment[]>([]);
  const [visibleNotifications, setVisibleNotifications] = useState<
    Deployment[]
  >([]);
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

  const cities = Object.keys(cityToCountry);
  const products = [
    "neural network",
    "AI assistant",
    "RAG system",
    "NLP service",
    "GPT wrapper",
    "ML model",
    "analytics dashboard",
    "vector database",
    "language model",
    "AI search engine",
    "voice assistant",
    "data pipeline",
    "image generator",
    "recommendation engine",
    "AI chatbot",
    "AI API",
    "computer vision app",
    "AI agent",
    "LLM app",
    "code generator",
  ];

  const generateNotification = (): Deployment => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    const { country, flag } = cityToCountry[city];
    const statuses: Deployment["status"][] = [
      "completed",
      "in-progress",
      "failed",
    ];
    const status =
      statuses[Math.floor(Math.random() * (statuses.length - 0.2))];

    return {
      id: nextIdRef.current++,
      product,
      city,
      country,
      flag,
      timestamp: Date.now(),
      status,
    };
  };

  useEffect(() => {
    const first = generateNotification();
    setNotifications([first]);
    setVisibleNotifications([first]);
    setUnreadCount(1);

    const interval = setInterval(() => {
      const newNotification = generateNotification();

      setNotifications((prev) => [newNotification, ...prev]);
      setVisibleNotifications((prev) => {
        const recent = prev
          .filter((n) => Date.now() - n.timestamp < 9000)
          .slice(-maxVisibleNotifications + 1);
        return [...recent, newNotification];
      });
      setUnreadCount((prev) => Math.min(prev + 1, 999));
    }, 8000);

    return () => clearInterval(interval);
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

export default NotificationProvider;

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotifications must be used inside NotificationProvider"
    );
  return context;
};
