import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "hover";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl bg-white p-6 transition-all duration-300 ease-out",
                variant === "default" && "shadow-sm border border-neutral-100",
                variant === "hover" && "shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
