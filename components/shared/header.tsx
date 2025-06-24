import Link from "next/link";
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { GITHUB_REPO } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SaaS Kit</span>
          </Link>
          <Navigation className="hidden md:flex" />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="icon" asChild>
            <Link href={GITHUB_REPO.URL} target="_blank" rel="noreferrer">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild>
            <Link href="/playground">Try Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
