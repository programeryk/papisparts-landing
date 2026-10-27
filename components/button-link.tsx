import type { AnchorHTMLAttributes } from "react";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  light: "bg-white text-brand hover:bg-surface",
  outline: "border-2 border-white text-white hover:bg-white hover:text-brand",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
    />
  );
}
