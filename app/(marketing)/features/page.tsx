import { Metadata } from "next";
import Features1 from "@/components/marketing/features-1";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { FeatureDemo } from "@/components/marketing/feature-demo";
import PricingComparator from "@/components/marketing/pricing-comparator";

export const metadata: Metadata = {
  title: "Features - SaaS Starter Kit",
  description:
    "Explore the powerful features of our SaaS Starter Kit with AI capabilities, modern tech stack, and production-ready components.",
};

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Each section gets proper spacing and padding */}
      <div className="flex-1">
        {/* Overview section */}
        <Features1 />

        {/* Feature grid with proper spacing */}
        <div className="py-16 md:py-24">
          <FeatureGrid />
        </div>

        {/* Feature demo with proper spacing */}
        <div className="py-16 md:py-24 bg-muted/50">
          <FeatureDemo />
        </div>

        {/* Comparison section */}
        <div className="py-16 md:py-24">
          <PricingComparator />
        </div>
      </div>
    </div>
  );
}
