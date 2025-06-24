"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsFour() {
  const faqItems = [
    {
      id: "item-1",
      question: "What's included in the free tier?",
      answer:
        "The free tier includes core features like authentication, basic database integration, and API routes. You can build and test your application with limited usage of AI features (1 model, 5 requests/hour) and team collaboration tools (up to 3 team members).",
    },
    {
      id: "item-2",
      question: "How does Polar payment integration work?",
      answer:
        "Polar provides a hosted checkout experience that handles all payment processing. Once integrated, you can start accepting payments immediately with support for multiple currencies and payment methods. The integration is seamless and requires minimal setup.",
    },
    {
      id: "item-3",
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade to the Pro plan or contact sales for a custom Startup plan at any time. Downgrades are also supported with pro-rated refunds for unused time. All your data and settings are preserved when switching plans.",
    },
    {
      id: "item-4",
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for the Pro plan. If you're not satisfied with your purchase, we'll provide a full refund, no questions asked. This gives you peace of mind to try all the premium features risk-free.",
    },
    {
      id: "item-5",
      question: "What kind of support is included?",
      answer:
        "Free tier includes community support through GitHub discussions. Pro tier includes priority email support with 24-hour response time, while Startup tier adds dedicated Slack support and implementation assistance with a dedicated success manager.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Get answers to common questions about our SaaS Starter Kit pricing,
            features, and support options.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Have more questions? Check out our{" "}
            <Link
              href="/docs"
              className="text-primary font-medium hover:underline"
            >
              documentation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
