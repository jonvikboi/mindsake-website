"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { GlassCard } from "@/components/ui/glass";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-light/5 to-primary/8" />
      <div className="absolute inset-0 bg-gradient-calm" />

      {/* Subtle floating glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16">
        <Container className="flex flex-col items-center text-center">
          {/* Hero glass panel with glow */}
          <FadeIn>
            <div className="relative">
              {/* Soft glow behind content */}
              <div className="absolute inset-0 -m-8 bg-primary-light/6 rounded-3xl blur-2xl" />

              <div className="relative glass-panel p-8 md:p-12 glow-soft">
                <h1 className="text-4xl lg:text-6xl font-bold font-heading text-primary mb-6 tracking-tight">
                  Find Calm in the Chaos
                </h1>

                <p className="text-xl text-secondary font-light max-w-2xl mb-10 leading-relaxed mx-auto">
                  Professional, safe, and empathetic counseling psychology services for adolescents, youth, and adults.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">
                      Book Session
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="lg" href="/workshops">
                      Explore Workshops
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Services Section */}
      <section className="relative py-16 lg:py-24">
        {/* Section tinted background layer */}
        <div className="absolute inset-0 bg-tint-primary" />

        <Container className="relative">
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading text-secondary text-center mb-12">
              How We Can Help
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-full"
              >
                <GlassCard hover className="text-left h-full glow-soft">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Individual Therapy</h3>
                  <p className="text-gray-600 mb-4">
                    Personalized one-on-one sessions helping you navigate anxiety, stress, and self-growth.
                  </p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent" href="/services">
                    Learn More →
                  </Button>
                </GlassCard>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-full"
              >
                <GlassCard hover className="text-left h-full glow-soft">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Group Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Psychoeducational sessions on specific topics in a supportive group setting.
                  </p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent" href="/workshops">
                    See Topics →
                  </Button>
                </GlassCard>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="h-full"
              >
                <GlassCard hover className="text-left h-full glow-soft">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Resources</h3>
                  <p className="text-gray-600 mb-4">
                    Curated psychology content to help you understand yourself better.
                  </p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent">
                    Read Content →
                  </Button>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>
    </div>
  );
}
