import type { ButtonHTMLAttributes } from "react";
import type { HTMLMotionProps } from "motion/react";
import React from "react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "liquid";
  size?: "sm" | "md" | "lg";
  icon?: string;
  children: React.ReactNode;
}
