import { HeroHeader } from "@/components/marketing/header";
import FooterSection from "@/components/marketing/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroHeader />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}
