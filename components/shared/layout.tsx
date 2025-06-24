import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  className,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {showHeader && <Header />}
      <main className={cn("flex-1", className)}>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
