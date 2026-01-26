import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Calendar, Clock, Users } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";

export default function WorkshopsPage() {
    return (
        <div className="bg-white">
            <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
                <Container className="text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            Group Workshops
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                            Interactive, psychoeducational group sessions designed to foster connection, learning, and shared growth.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <section className="py-16 md:py-24">
                <Container>
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-12">Upcoming Topics</h2>
                    </FadeIn>
                    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Workshop Card 1 */}
                        <StaggerItem>
                            <Card className="flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                                        Coming Soon
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-secondary mb-3">
                                    Managing Anxiety
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    Learn practical tools to ground yourself, understand your triggers, and navigate anxious thoughts with compassion.
                                </p>

                                <div className="space-y-3 mb-8 text-sm text-gray-500 border-t border-neutral-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" /> <span>90 Minutes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" /> <span>Group Size: 8-10</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full">Register Interest</Button>
                            </Card>
                        </StaggerItem>

                        {/* Workshop Card 2 */}
                        <StaggerItem>
                            <Card className="flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full uppercase tracking-wide">
                                        Popular
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-secondary mb-3">
                                    Mindful Stress Relief
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    Discover mindfulness techniques to reduce stress and increase presence in your daily life.
                                </p>

                                <div className="space-y-3 mb-8 text-sm text-gray-500 border-t border-neutral-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" /> <span>60 Minutes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="h-4 w-4" /> <span>Group Size: 10-15</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full">Register Interest</Button>
                            </Card>
                        </StaggerItem>

                        {/* Workshop Card 3 */}
                        <StaggerItem>
                            <Card className="flex flex-col h-full bg-neutral-50/50">
                                <div className="mb-4">
                                    <span className="px-3 py-1 bg-neutral-200 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wide">
                                        Interest Check
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-secondary mb-3">
                                    Self-Compassion 101
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    Break the cycle of self-criticism and learn to treat yourself with the same kindness you offer friends.
                                </p>

                                <div className="space-y-3 mb-8 text-sm text-gray-500 border-t border-neutral-200 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" /> <span>Date TBD</span>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full bg-white">Notify Me</Button>
                            </Card>
                        </StaggerItem>
                    </Stagger>
                </Container>
            </section>
        </div>
    );
}
