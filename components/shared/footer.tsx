import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">SaaS Kit</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Production-ready SaaS starter kit with AI capabilities
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:col-span-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Links</h3>
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Connect</h3>
              <div className="flex flex-col gap-2">
                <Link
                  href={SOCIAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href={SOCIAL_LINKS.TWITTER}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SaaS Starter Kit. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
