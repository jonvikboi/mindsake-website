import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    href?: string;
    target?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, href, target, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20",
            secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-sm",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-secondary hover:bg-gray-100 hover:text-primary",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.02] active:scale-[0.98]",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            if (href.startsWith("http")) {
                return (
                    // @ts-ignore
                    <a href={href} className={classes} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined}>
                        {children}
                    </a>
                );
            }
            return (
                // @ts-ignore
                <Link href={href} className={classes} target={target}>
                    {children}
                </Link>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                disabled={isLoading || props.disabled}
                className={classes}
                {...props}
            >
                {isLoading && (
                    <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
