"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

// Centralized motion variants - subtle and calming
// Using cubic bezier for smooth easing [0.25, 0.1, 0.25, 1] = ease-out
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// FadeIn wrapper component with reduced motion support
interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "none";
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const variants = direction === "up" ? fadeInUp : fadeIn;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Section wrapper with stagger animation
interface StaggerProps {
    children: ReactNode;
    className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item (for use inside Stagger)
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
    return (
        <motion.div variants={fadeInUp} className={className}>
            {children}
        </motion.div>
    );
}
