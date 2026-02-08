"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { GlassCard } from "@/components/ui/glass";
import { motion } from "framer-motion";

// Dynamic import - only loads SilkBackground on this page
const Silk = dynamic(() => import("@/components/backgrounds/SilkBackground"), {
  ssr: false,
  loading: () => null,
});

// Hook to detect reduced motion preference
function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

export default function Home() {
  const reducedMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity and scale for hero logo based on scroll
  // Faster fade: disappears by 200px scroll instead of 300px
  const heroLogoOpacity = Math.max(0, 1 - scrollY / 200);
  const heroLogoScale = Math.max(0.5, 1 - scrollY / 400);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-light/5 to-primary/8" />
      <div className="absolute inset-0 bg-gradient-calm" />

      {/* Subtle floating glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-80 lg:pt-96 pb-16">
        {/* SilkBackground - only rendered if reduced motion is not preferred */}
        {!reducedMotion ? (
          <div
            className="absolute inset-0 z-0 pointer-events-none bg-[#f8faf9]"
            aria-hidden="true"
          >
            <Silk
              speed={3}
              scale={1.2}
              color="#80B2A9"
              noiseIntensity={0.8}
              rotation={0}
            />
          </div>
        ) : (
          // Static fallback for reduced motion - subtle gradient
          <div
            className="absolute inset-0 z-0 bg-gradient-to-br from-primary-light/10 via-transparent to-primary/5"
            aria-hidden="true"
          />
        )}

        {/* Silk Dimming Overlay - reduces highlight clash */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-[#2a3f3d]/10"
          aria-hidden="true"
        />

        {/* Large Centered Hero Logo - animates on scroll */}
        <motion.div
          className="absolute top-20 left-0 right-0 z-[5] flex items-center justify-center pointer-events-none"
          style={{
            opacity: heroLogoOpacity,
            scale: heroLogoScale,
          }}
          transition={{ duration: 0 }}
        >
          <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
            {/* MIND text on left */}
            <h2
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary-dark tracking-tight"
              style={{
                fontFamily: 'var(--font-playfair)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              MIND
            </h2>

            {/* Large Logo Image in center */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 overflow-hidden rounded-full shadow-2xl flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="Mindsake Logo"
                className="h-full w-full object-cover"
              />
            </div>

            {/* SAKE text on right */}
            <h2
              className="text-7xl md:text-8xl lg:text-9xl font-bold text-primary-dark tracking-tight"
              style={{
                fontFamily: 'var(--font-playfair)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              SAKE
            </h2>
          </div>
        </motion.div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          {/* Hero glass panel with glow */}
          <FadeIn>
            <div className="relative">
              {/* Soft glow behind content */}
              <div className="absolute inset-0 -m-8 bg-primary-light/8 rounded-[28px] blur-2xl" />

              {/* Strengthened glass panel - frosted acrylic feel */}
              <div
                className="relative p-8 md:p-12"
                style={{
                  background: 'rgba(255, 255, 255, 0.32)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Headline - charcoal, grounded, confident */}
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-6"
                  style={{
                    color: '#1e293b',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.15,
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',
                  }}
                >
                  Find Calm in the Chaos
                </h1>

                {/* Subtext - readable, comfortable, clear */}
                <p
                  className="text-base md:text-lg font-medium mb-10 mx-auto"
                  style={{
                    color: '#475569',
                    maxWidth: '28rem',
                    lineHeight: 1.75,
                    textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)',
                  }}
                >
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

        {/* Hero fade-out transition - subtle dissolve to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[2]"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.95) 100%)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
          }}
        />
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
