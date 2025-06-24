import { Metadata } from "next";
import PricingComparator from "@/components/marketing/pricing-comparator";
import FAQsFour from "@/components/marketing/faqs-4";

export const metadata: Metadata = {
  title: "Pricing - SaaS Starter Kit",
  description:
    "Choose the right plan for your SaaS project with our flexible pricing options.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        {/* Header section */}
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Start building with the free tier and upgrade when you&apos;re ready
            to launch
          </p>
        </div>

        {/* Pricing table */}
        <PricingComparator />

        {/* FAQ section */}
        <FAQsFour />
      </div>
    </div>
  );
}
