import React, { useRef, useEffect } from "react";
import { motion } from "motion/react";
import type { DialogProps } from "../../types/dialog.types";
import { Button } from "../button";

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onCloseOnClickOutside = true,
  onCloseOnEscape = true,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        onCloseOnClickOutside &&
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, onCloseOnClickOutside]);

  // Escape btn bosilganda yopish
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (onCloseOnEscape && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapePress);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpen, onClose, onCloseOnEscape]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      // backdrop
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={dialogRef}
        className="relative w-full max-w-md bg-white dark:bg-gray-800 shadow-xl p-4"
        initial={{ y: -30, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: -30, scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title || "Dialog"}
          </h2>
          <Button
            variant="ghost"
            onClick={onClose}
            aria-label="Yopish"
          >
            <div className="i-tabler:x" />
          </Button>
        </div>

        <div className="text-gray-700 dark:text-gray-300">{children}</div>
      </motion.div>
    </motion.div>
  );
};