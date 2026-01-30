"use client";

/**
 * Mindsake Motion Presets
 * 
 * Calm, accessibility-respecting animation presets using Framer Motion.
 * All animations are intentionally subtle for mental health context.
 */

import React from "react";
import { motion, type Variants, type Transition, type TargetAndTransition, type HTMLMotionProps } from "framer-motion";

// Shared calm easing - gentle and smooth
const calmEase = [0.25, 0.1, 0.25, 1.0] as const;

// Default transition for calm animations
const calmTransition: Transition = {
    duration: 0.4,
    ease: calmEase,
};

// ----------------------------------------
// Fade Presets
// ----------------------------------------

export const fadeSoft: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: calmTransition,
    },
    exit: {
        opacity: 0,
        transition: { ...calmTransition, duration: 0.3 },
    },
};

// ----------------------------------------
// Rise Presets
// ----------------------------------------

export const riseSoft: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: calmEase },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: { duration: 0.3, ease: calmEase },
    },
};

export const riseSoftDelayed: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: calmEase },
    },
};

// ----------------------------------------
// Hover & Tap Presets
// ----------------------------------------

export const hoverSoftScale: TargetAndTransition = {
    scale: 1.03,
    transition: { duration: 0.2, ease: calmEase },
};

export const tapSoft: TargetAndTransition = {
    scale: 0.98,
    transition: { duration: 0.1, ease: calmEase },
};

// ----------------------------------------
// Container Variants
// ----------------------------------------

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// ----------------------------------------
// Utilities
// ----------------------------------------

export const prefersReducedMotion = (): boolean => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const getMotionProps = <T extends object>(props: T): T | object => {
    if (prefersReducedMotion()) return {};
    return props;
};

// ----------------------------------------
// Preset Bundles
// ----------------------------------------

export const cardMotion = {
    whileHover: hoverSoftScale,
    whileTap: tapSoft,
    variants: fadeSoft,
    initial: "initial" as const,
    animate: "animate" as const,
};

export const listItemMotion = {
    variants: riseSoftDelayed,
    initial: "initial" as const,
    animate: "animate" as const,
};

// ----------------------------------------
// React Motion Components
// ----------------------------------------

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.4, className, ...props }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay, ease: calmEase }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    staggerDelay?: number;
    className?: string;
}

export function Stagger({ children, staggerDelay = 0.08, className, ...props }: StaggerProps) {
    const staggerVariants: Variants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={staggerVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
    const itemVariants: Variants = {
        initial: { opacity: 0, y: 12 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: calmEase },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
