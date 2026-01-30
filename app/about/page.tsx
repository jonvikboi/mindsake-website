"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
                <Container className="text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            About Mindsake
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                            A safe, non-judgmental space dedicated to your mental well-being and personal growth.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Therapist Profile Section */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Image Column - Enhanced with glass styling */}
                        <FadeIn className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <div className="relative">
                                {/* Primary-light halo behind image */}
                                <div className="absolute inset-0 -m-4 bg-primary-light/15 rounded-full blur-2xl" />

                                {/* Glass container with hover effect */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 8px 40px rgba(128, 178, 169, 0.2), 0 0 60px rgba(164, 212, 201, 0.15)"
                                    }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                                    className="relative glass-card p-3 rounded-full glow-soft"
                                >
                                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/therapist.jpg"
                                            alt="Therapist Profile"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </FadeIn>

                        {/* Content Column */}
                        <FadeIn delay={0.15} className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-secondary mb-2">
                                    Meet the Therapist
                                </h2>
                                <p className="text-primary font-medium text-lg">Counseling Psychologist</p>
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    With a deep commitment to empathetic care, I work with adolescents, youth, and adults to navigate life's challenges. My approach is rooted in creating a safe, validating environment where you feel heard and understood.
                                </p>
                                <p>
                                    At Mindsake, we believe that therapy is not just about "fixing" problems, but about understanding yourself, building resilience, and finding your own path to emotional balance.
                                </p>
                                <p>
                                    Whether you are dealing with anxiety, stress, relationship issues, or simply seeking personal growth, I am here to support you on your journey.
                                </p>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-lg font-semibold text-secondary mb-2">Qualifications & Experience</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>M.Sc. in Counseling Psychology</li>
                                    <li>Specialized in Adolescent & Youth Counseling</li>
                                    <li>Experience with Anxiety, Stress, and Emotional Regulation</li>
                                    <li>Trauma-Informed Approach</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Philosophy Section */}
            <section className="bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24">
                <Container className="text-center max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-8">
                            Our Philosophy
                        </h2>
                    </FadeIn>
                    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Empathy First</h3>
                                <p className="text-gray-600 text-sm">
                                    We prioritize deep listening and understanding, ensuring you never feel judged.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Evidence-Based</h3>
                                <p className="text-gray-600 text-sm">
                                    Our methods are grounded in psychological science and proven therapeutic techniques.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Holistic Growth</h3>
                                <p className="text-gray-600 text-sm">
                                    We focus on the whole person, addressing emotional, mental, and relational well-being.
                                </p>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </Container>
            </section>
        </div>
    );
}
