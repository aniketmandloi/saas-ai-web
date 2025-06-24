import { Metadata } from "next";
import HeroSection from "@/components/marketing/hero-section";
import Features from "@/components/marketing/features-1";
import StatsSection from "@/components/marketing/stats";
import Testimonials from "@/components/marketing/testimonials";
import CallToAction from "@/components/marketing/call-to-action";
import { getGitHubStats } from "@/lib/github";

export const metadata: Metadata = {
  title:
    "SaaS Starter Kit - Production-ready SaaS starter with AI capabilities",
  description:
    "A production-ready SaaS starter kit with AI capabilities, built with Next.js, Tailwind CSS, and more.",
};

export default async function HomePage() {
  // Fetch GitHub stats for the repository
  const stats = await getGitHubStats();

  return (
    <>
      <HeroSection stats={stats} />
      <StatsSection stats={stats} />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
}
