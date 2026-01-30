import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Enable hover effects */
    hover?: boolean;
    /** Glass intensity variant */
    variant?: "default" | "soft" | "primary";
}

/**
 * GlassCard - A glassmorphism card component
 * 
 * Use for content cards, feature highlights, and discrete content blocks.
 * Includes optional hover state for interactive cards.
 */
export function GlassCard({
    children,
    className,
    hover = true,
    variant = "default",
    ...props
}: GlassCardProps) {
    const variants = {
        default: "glass-card",
        soft: "glass-soft",
        primary: "glass-primary",
    };

    return (
        <div
            className={cn(
                variants[variant],
                "p-6",
                hover && "hover:scale-[1.01] hover:-translate-y-0.5",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
