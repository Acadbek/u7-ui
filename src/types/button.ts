import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" |  "success" | "error" | "warning" | "info";
  size?: "sm" | "md" | "lg";
  icon?: string;
}
