import { FEATURES } from "@/lib/constants";
import {
  Brain,
  Lock,
  CreditCard,
  Users,
  BarChart,
  Code,
  Database,
  Zap,
  FileText,
} from "lucide-react";

const iconMap = {
  lock: Lock,
  brain: Brain,
  "credit-card": CreditCard,
  users: Users,
  "bar-chart": BarChart,
  code: Code,
  database: Database,
  zap: Zap,
  "file-text": FileText,
};

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="text-center">
        <h2 className="text-balance text-3xl font-semibold lg:text-4xl">
          Everything You Need to Build Your SaaS
        </h2>
        <p className="mt-4 text-muted-foreground">
          Production-ready features that save you months of development time
        </p>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];

          if (!Icon) {
            console.warn(`Icon not found for feature: ${feature.title}`);
            return null;
          }

          return (
            <div key={feature.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
