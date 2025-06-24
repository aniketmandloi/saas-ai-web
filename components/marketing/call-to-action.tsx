import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Ready to Build Your SaaS?
          </h2>
          <p className="mt-4">
            Get started with our production-ready SaaS Starter Kit and launch
            faster.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/docs">
                <span>Get Started</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/playground">
                <span>Try Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
