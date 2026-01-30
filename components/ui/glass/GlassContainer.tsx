import React from "react";
import { cn } from "@/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    /** HTML element to render as */
    as?: React.ElementType;
    /** Glass intensity variant */
    variant?: "default" | "soft" | "strong";
}

/**
 * GlassContainer - A glassmorphism container wrapper
 * 
 * Use for section backgrounds, panels, and large content areas.
 * Applies translucent background with backdrop blur effect.
 */
export function GlassContainer({
    children,
    className,
    as: Component = "div",
    variant = "default",
    ...props
}: GlassContainerProps) {
    const variants = {
        default: "glass-panel",
        soft: "glass-soft",
        strong: "glass-strong",
    };

    return (
        <Component
            className={cn(variants[variant], "p-6 md:p-8", className)}
            {...props}
        >
            {children}
        </Component>
    );
}
