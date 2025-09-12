import React from "react";
import type { ToastContextType } from '../../types/toast'

export const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined,
);

export const useToastContext = (): ToastContextType => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return context;
};
