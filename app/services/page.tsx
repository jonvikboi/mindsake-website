import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
                <Container className="text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            Individual Therapy
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                            One-on-one sessions tailored to your unique needs, providing a confidential space for healing and growth.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Target Audiences */}
            <section className="py-16 md:py-24">
                <Container>
                    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Adolescents</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Navigating the complex transition from childhood to adulthood. We help with academic pressure, peer relationships, identity formation, and emotional regulation.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Age 12-18</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Parental involvement as needed</li>
                                </ul>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="p-8 rounded-xl bg-primary/5 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-2 -mt-2"></div>
                                <h3 className="text-2xl font-bold font-heading text-primary-dark mb-4">Youth (18-25)</h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Support for early adulthood challenges: university life, career uncertainty, relationship dynamics, and establishing independence.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> University students</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Early career professionals</li>
                                </ul>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Adults</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Addressing work-life balance, relationship issues, parenting stress, and deeper self-exploration for meaningful living.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Age 25+</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Flexible scheduling</li>
                                </ul>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </Container>
            </section>

            {/* Focus Areas */}
            <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
                <Container>
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-heading text-secondary text-center mb-12">
                            Key Focus Areas
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Anxiety & Panic', 'Depression', 'Stress Management', 'Trauma Recovery', 'Relationship Issues', 'Self-Esteem', 'Grief & Loss', 'Personal Growth'].map((area) => (
                                <span key={area} className="px-5 py-2.5 bg-white rounded-full text-secondary font-medium shadow-sm border border-neutral-100 text-sm transition-all duration-200 hover:shadow-md hover:border-primary/20">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <Container>
                    <FadeIn>
                        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-10 md:p-16 shadow-lg">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                Ready to start your journey?
                            </h2>
                            <p className="text-lg text-primary-light/90 mb-10 max-w-xl mx-auto">
                                Taking the first step is often the hardest. We are here to support you.
                            </p>
                            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-50" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">
                                Book Your Session
                            </Button>
                        </div>
                    </FadeIn>
                </Container>
            </section>
        </div>
    );
}
