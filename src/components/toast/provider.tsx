import React, { useState, useCallback } from "react";
import { ToastContext } from './toast-context'
import ToastContainer from "./toast-container";
import type {
  ToastProviderProps,
  ToastData,
  ToastOptions,
} from "../../types/toast";

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);


  const addToast = useCallback((toast: ToastOptions) => {
    const id = Math.random().toString(36).slice(2, 9);
    const newToast: ToastData = {
      id,
      title: toast.title,
      description: toast.description,
      type: toast.type || "default",
      duration: toast.duration || 4000,
      timestamp: Date.now(),
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )

}

export default ToastProvider