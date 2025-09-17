import type { ButtonHTMLAttributes } from "react";
import type { HTMLMotionProps } from "motion/react";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "sm" | "md" | "lg";
  icon?: string;
}
