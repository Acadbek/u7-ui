import { cva } from "class-variance-authority";
import cn from "classnames";
import { motion } from "motion/react";
import type { ButtonProps } from "../../types/button";

const buttonVariants = cva(
  "inline-flex flex gap-2 items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
        outline:
          "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
        ghost: "text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const Button = ({
  variant,
  size,
  icon,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children} {icon && <i className={icon}></i>}
    </motion.button>
  )
}