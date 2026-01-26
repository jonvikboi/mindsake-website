import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-white to-primary/3">
      <Container className="py-20 lg:py-32 flex flex-col items-center text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-primary mb-6 tracking-tight">
            Find Calm in the Chaos
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xl text-secondary font-light max-w-2xl mb-10 leading-relaxed mx-auto">
            Professional, safe, and empathetic counseling psychology services for adolescents, youth, and adults.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex gap-4 mb-20">
            <Button size="lg" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">Book Session</Button>
            <Button variant="outline" size="lg" href="/workshops">Explore Workshops</Button>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <StaggerItem>
            <Card variant="hover" className="text-left h-full">
              <h3 className="text-xl font-semibold text-secondary mb-3">Individual Therapy</h3>
              <p className="text-gray-600 mb-4">
                Personalized one-on-one sessions helping you navigate anxiety, stress, and self-growth.
              </p>
              <Button variant="ghost" className="p-0 hover:bg-transparent" href="/services">
                Learn More →
              </Button>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="hover" className="text-left h-full">
              <h3 className="text-xl font-semibold text-secondary mb-3">Group Workshops</h3>
              <p className="text-gray-600 mb-4">
                Psychoeducational sessions on specific topics in a supportive group setting.
              </p>
              <Button variant="ghost" className="p-0 hover:bg-transparent" href="/workshops">
                See Topics →
              </Button>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card variant="hover" className="text-left h-full">
              <h3 className="text-xl font-semibold text-secondary mb-3">Resources</h3>
              <p className="text-gray-600 mb-4">
                Curated psychology content to help you understand yourself better.
              </p>
              <Button variant="ghost" className="p-0 hover:bg-transparent">
                Read Content →
              </Button>
            </Card>
          </StaggerItem>
        </Stagger>
      </Container>
    </div>
  );
}
