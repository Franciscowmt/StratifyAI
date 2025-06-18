import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import DifferentiatorsSection from "@/components/differentiators-section"
import UseCasesSection from "@/components/use-cases-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DemoSection from "@/components/demo-section"
import MetricsSection from "@/components/metrics-section"
import IntegrationsSection from "@/components/integrations-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DifferentiatorsSection />
        <UseCasesSection />
        <HowItWorksSection />
        <DemoSection />
        <MetricsSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
