import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Trusted by developers and startups worldwide
          </h2>
          <p>
            Our SaaS Starter Kit helps developers and businesses launch faster
            with all the essential features built-in and ready to customize.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Tech Innovators Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  &ldquo;This SaaS Starter Kit has transformed our development
                  process. We launched our AI-powered analytics platform in just
                  three weeks instead of three months. The pre-built components
                  and integrations saved us countless hours, and the code
                  quality is outstanding.&rdquo;
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Alex Chen"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Alex Chen</cite>
                    <span className="text-muted-foreground block text-sm">
                      CTO, Tech Innovators
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  &ldquo;The AI integration is seamless and the documentation is
                  excellent. We were able to customize everything to match our
                  brand perfectly.&rdquo;
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Sarah Johnson"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Sarah Johnson</cite>
                    <span className="text-muted-foreground block text-sm">
                      Founder, DataFlow
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  &ldquo;The authentication and payment systems worked
                  flawlessly out of the box. Saved us weeks of development
                  time.&rdquo;
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Michael Torres"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Michael Torres</cite>
                    <span className="text-muted-foreground block text-sm">
                      Lead Developer, CodeCraft
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  &ldquo;As a solo founder, this starter kit was a game-changer.
                  I was able to focus on my unique features instead of building
                  infrastructure.&rdquo;
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Emma Wilson"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Emma Wilson</p>
                    <span className="text-muted-foreground block text-sm">
                      Founder, SoloSaaS
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
