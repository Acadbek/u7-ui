import React from 'react'
import { AnimatePresence } from "motion/react";
import type { ToastData } from "../../types/toast";
import Toast from './toast';

interface ToastContainerProps {
  toasts: ToastData[];
  removeToast: (id: string) => void;
}


const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      <AnimatePresence mode='popLayout'>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onRemove={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ToastContainer