import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ThemeDock } from "@/components/theme-dock";
import { WhatsappDock } from "@/components/whatsapp-dock";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ThemeDock />
      <WhatsappDock />
    </>
  );
}
