import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

/**
 * GlassButtonSurface - A glassmorphism surface for button groups
 * 
 * Use to wrap buttons or interactive elements with a glass backdrop.
 * Provides a subtle container effect without affecting button behavior.
 */
export function GlassButtonSurface({
    children,
    className,
    ...props
}: GlassButtonSurfaceProps) {
    return (
        <div
            className={cn(
                "glass-button-surface",
                "inline-flex items-center gap-2 p-2",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
