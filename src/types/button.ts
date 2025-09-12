import type { motion } from "motion/react";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "red";
  size?: "sm" | "md" | "lg";
  icon?: string;
}
