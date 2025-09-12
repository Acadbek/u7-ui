import React from 'react'
import { motion } from "motion/react";
import type { ToastProps, ToastType } from "../../types/toast";

const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const { styles, icon } = React.useMemo(() => {
    const baseStyles =
      "px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border min-w-80 cursor-pointer select-none";

    const getVariantStyles = (type: ToastType): string => {
      switch (type) {
        case "success":
          return "bg-green-50/90 border-green-200 text-green-800";
        case "error":
          return "bg-red-50/90 border-red-200 text-red-800";
        case "warning":
          return "bg-yellow-50/90 border-yellow-200 text-yellow-800";
        case "info":
          return "bg-blue-50/90 border-blue-200 text-blue-800";
        default:
          return "bg-white/90 border-gray-200 text-gray-800";
      }
    };

    const getIcon = (type: ToastType): string => {
      switch (type) {
        case "success":
          return "✓";
        case "error":
          return "✗";
        case "warning":
          return "⚠";
        case "info":
          return "i";
        default:
          return "●";
      }
    };

    return {
      styles: `${baseStyles} ${getVariantStyles(toast.type)}`,
      icon: getIcon(toast.type),
    };
  }, [toast.type])

  const handleClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onRemove();
  }, [onRemove]);

  const handleCloseClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove();
    },
    [onRemove],
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.5 }}
      className={styles}
      onClick={handleClick}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-current/20 text-sm font-bold"
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          {toast.title && (
            <div className="font-semibold mb-1 truncate">{toast.title}</div>
          )}

          {toast.description && (
            <div className="text-sm opacity-80 break-words">
              {toast.description}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleCloseClick}
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full hover:bg-current/20 transition-colors text-xs opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current/30"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </motion.div>
  )
}


export default React.memo(Toast)