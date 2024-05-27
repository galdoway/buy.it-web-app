import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "~/shared/utils/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "success" | "danger" | "warning" | "primary" | "secondary";
};

const ButtonSizes = {
  xs: "px-2 py-1 text-sm",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3",
  xl: "px-8 py-4",
};

const ColorVariants = {
  primary:
    "border-blue-700 bg-blue-700 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400/90",
  secondary:
    "border-blue-200 bg-blue-100 font-semibold leading-6 text-blue-800 hover:border-blue-300 hover:text-blue-900 hover:shadow-sm focus:ring focus:ring-blue-300/25 active:border-blue-200 active:shadow-none dark:border-blue-200 dark:bg-blue-200 dark:hover:border-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-500/50 dark:active:border-blue-200 dark:active:bg-blue-200",
  success:
    "border-emerald-200 bg-emerald-100 font-semibold leading-6 text-emerald-800 hover:border-emerald-300 hover:text-emerald-900 hover:shadow-sm focus:ring focus:ring-emerald-300/25 active:border-emerald-200 active:shadow-none dark:border-emerald-200 dark:bg-emerald-200 dark:hover:border-emerald-300 dark:hover:bg-emerald-300 dark:focus:ring-emerald-500/50 dark:active:border-emerald-200 dark:active:bg-emerald-200",
  danger:
    "border-rose-200 bg-rose-100 font-semibold leading-6 text-rose-800 hover:border-rose-300 hover:text-rose-900 hover:shadow-sm focus:ring focus:ring-rose-300/25 active:border-rose-200 active:shadow-none dark:border-rose-200 dark:bg-rose-200 dark:hover:border-rose-300 dark:hover:bg-rose-300 dark:focus:ring-rose-500/50 dark:active:border-rose-200 dark:active:bg-rose-200",
  warning:
    "border-orange-200 bg-orange-100 font-semibold leading-6 text-orange-800 hover:border-orange-300 hover:text-orange-900 hover:shadow-sm focus:ring focus:ring-orange-300/25 active:border-orange-200 active:shadow-none dark:border-orange-200 dark:bg-orange-200 dark:hover:border-orange-300 dark:hover:bg-orange-300 dark:focus:ring-orange-500/50 dark:active:border-orange-200 dark:active:bg-orange-200",
};

function Button({ children, size, variant, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border",
        ColorVariants[variant || "primary"],
        ButtonSizes[size || "md"]
      )}
    >
      {children}
    </button>
  );
}

export default Button;
