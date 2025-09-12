import { useCallback } from "react";
import type { UseToastReturn, ToastOptions } from "../../types/toast";
import { useToastContext } from "./toast-context";

export const useToast = (): UseToastReturn => {
  const { addToast } = useToastContext();

  const toast = useCallback(
    (message: string, options: Omit<ToastOptions, "description"> = {}) => {
      addToast({
        description: message,
        ...options,
      });
    },
    [addToast]
  );

  const success = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "description" | "type"> = {}
    ) => {
      toast(message, { ...options, type: "success" });
    },
    [toast]
  );

  const error = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "description" | "type"> = {}
    ) => {
      toast(message, { ...options, type: "error" });
    },
    [toast]
  );

  const warning = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "description" | "type"> = {}
    ) => {
      toast(message, { ...options, type: "warning" });
    },
    [toast]
  );

  const info = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "description" | "type"> = {}
    ) => {
      toast(message, { ...options, type: "info" });
    },
    [toast]
  );

  Object.assign(toast, { success, error, warning, info });

  return toast as UseToastReturn;
};
