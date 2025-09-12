export type ToastType = "default" | "success" | "error" | "warning" | "info";

export interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  type?: ToastType;
}

export interface ToastData
  extends Required<Omit<ToastOptions, "title" | "description">> {
  id: string;
  title?: string;
  description?: string;
  timestamp: number;
}

export interface ToastContextType {
  addToast: (toast: ToastOptions & { description: string }) => void;
  removeToast: (id: string) => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

export interface ToastProps {
  toast: ToastData;
  onRemove: () => void;
}

export interface UseToastReturn {
  (message: string, options?: Omit<ToastOptions, "description">): void;

  success: (
    message: string,
    options?: Omit<ToastOptions, "description" | "type">
  ) => void;

  error: (
    message: string,
    options?: Omit<ToastOptions, "description" | "type">
  ) => void;

  warning: (
    message: string,
    options?: Omit<ToastOptions, "description" | "type">
  ) => void;
  
  info: (
    message: string,
    options?: Omit<ToastOptions, "description" | "type">
  ) => void;
}
