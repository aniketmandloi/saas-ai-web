import { Button } from "@/components/ui/button";
import { Cpu, Sparkles, Code, Users, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

const tableData = [
  {
    category: "Core Features",
    icon: Cpu,
    features: [
      {
        feature: "Authentication (Clerk)",
        free: true,
        pro: true,
        startup: true,
      },
      {
        feature: "Database Integration",
        free: "Basic",
        pro: "Advanced",
        startup: "Custom",
      },
      {
        feature: "API Routes",
        free: "Limited",
        pro: true,
        startup: true,
      },
    ],
  },
  {
    category: "AI Features",
    icon: Sparkles,
    features: [
      {
        feature: "AI Models Integration",
        free: "1 Model",
        pro: "3 Models",
        startup: "Unlimited",
      },
      {
        feature: "Rate Limiting",
        free: "5/hour",
        pro: "100/hour",
        startup: "Custom",
      },
      {
        feature: "Vector Search",
        free: false,
        pro: true,
        startup: true,
      },
    ],
  },
  {
    category: "Developer Tools",
    icon: Code,
    features: [
      {
        feature: "Edge Functions",
        free: "Limited",
        pro: true,
        startup: true,
      },
      {
        feature: "MDX Documentation",
        free: false,
        pro: true,
        startup: true,
      },
      {
        feature: "Custom Templates",
        free: "1 Template",
        pro: "5 Templates",
        startup: "Unlimited",
      },
    ],
  },
  {
    category: "Team Features",
    icon: Users,
    features: [
      {
        feature: "Team Members",
        free: "3 Members",
        pro: "10 Members",
        startup: "Unlimited",
      },
      {
        feature: "Collaboration Tools",
        free: false,
        pro: true,
        startup: true,
      },
      {
        feature: "Role Management",
        free: false,
        pro: true,
        startup: true,
      },
    ],
  },
  {
    category: "Analytics & Support",
    icon: Globe,
    features: [
      {
        feature: "Usage Analytics",
        free: "Basic",
        pro: "Advanced",
        startup: "Custom",
      },
      {
        feature: "Support",
        free: "Community",
        pro: "Priority Email",
        startup: "Dedicated Slack",
      },
      {
        feature: "SLA",
        free: false,
        pro: "99.9%",
        startup: "Custom",
      },
    ],
  },
];

export default function PricingComparator() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
            <thead className="bg-background sticky top-0">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span className="block">Free</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/docs/getting-started">Get Started</Link>
                  </Button>
                </th>
                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                  <span className="block">Pro</span>
                  <Button asChild size="sm">
                    <Link href="/pricing">Get Pro</Link>
                  </Button>
                </th>
                <th className="space-y-3">
                  <span className="block">Startup</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              {tableData.map((section) => (
                <React.Fragment key={section.category}>
                  <tr className="*:py-3">
                    <td className="flex items-center gap-2 font-medium">
                      <section.icon className="size-4" />
                      <span>{section.category}</span>
                    </td>
                    <td></td>
                    <td className="bg-muted border-none px-4"></td>
                    <td></td>
                  </tr>
                  {section.features.map((row, index) => (
                    <tr key={index} className="*:border-b *:py-3">
                      <td className="text-muted-foreground">{row.feature}</td>
                      <td>
                        {row.free === true ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : row.free === false ? (
                          "-"
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="bg-muted border-none px-4">
                        <div className="-mb-3 border-b py-3">
                          {row.pro === true ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : row.pro === false ? (
                            "-"
                          ) : (
                            row.pro
                          )}
                        </div>
                      </td>
                      <td>
                        {row.startup === true ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : row.startup === false ? (
                          "-"
                        ) : (
                          row.startup
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
