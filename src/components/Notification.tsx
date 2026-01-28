import { useEffect, useState } from "react";

interface NotificationProps {
  type: "success" | "error" | "info" | "warning";
  title: string;
  message: string;
  autoClose?: boolean;
  duration?: number;
}

export default function Notification({
  type,
  title,
  message,
  autoClose = true,
  duration = 5000,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  if (!isVisible) return null;

  // Styles for different notification types
  const styles = {
    success: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      icon: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
      title: "text-green-900 dark:text-green-100",
      text: "text-green-800 dark:text-green-200",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      icon: "bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400",
      title: "text-red-900 dark:text-red-100",
      text: "text-red-800 dark:text-red-200",
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-100",
      text: "text-blue-800 dark:text-blue-200",
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      border: "border-yellow-200 dark:border-yellow-800",
      icon: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400",
      title: "text-yellow-900 dark:text-yellow-100",
      text: "text-yellow-800 dark:text-yellow-200",
    },
  };

  const style = styles[type];

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  };

  return (
    <div
      className={`rounded-lg border-2 ${style.bg} ${style.border} p-4 animate-in slide-in-from-top-4 fixed top-4 left-1/2 -translate-x-1/2 z-50 shadow-lg w-full max-w-md`}
    >
      <div className="flex gap-4 items-start">
        {/* Icon */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${style.icon}`}
        >
          {icons[type]}
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className={`font-semibold ${style.title}`}>{title}</h3>
          <p className={`mt-1 text-sm ${style.text}`}>{message}</p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className={`shrink-0 text-lg font-bold transition-opacity hover:opacity-60 ${style.title}`}
        >
          ×
        </button>
      </div>
    </div>
  );
}
