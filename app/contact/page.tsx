import React from "react";
import { Container } from "@/components/ui/Container";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/lib/motion";

export default function ContactPage() {
    return (
        <div className="bg-white">
            <section className="bg-gradient-to-b from-primary/5 to-white py-16">
                <Container className="text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            Get in Touch
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                            Have questions? We are here to help. Reach out to us for inquiries about therapy sessions or workshops.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <FadeIn className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-secondary mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <a href="mailto:mindsake.co@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                                                mindsake.co@gmail.com
                                            </a>
                                            <p className="text-sm text-gray-400 mt-1">We typically reply within 24 hours.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-600">+91 96455 10183</p>
                                            <p className="text-sm text-gray-400 mt-1">Available Mon-Fri, 10am - 6pm.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Location</h3>
                                            <p className="text-gray-600">Online & In-person<br />Bangalore, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-amber-50/50 rounded-xl border border-amber-100/50">
                                <h3 className="font-bold text-amber-800 mb-2">Important Note</h3>
                                <p className="text-amber-700 text-sm leading-relaxed">
                                    Mindsake is <strong>not</strong> a crisis intervention service. If you or someone you know is in immediate danger or experiencing a medical emergency, please call your local emergency number or visit the nearest hospital immediately.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <FadeIn delay={0.15}>
                            <ContactForm />
                        </FadeIn>
                    </div>
                </Container>
            </section>
        </div>
    );
}
