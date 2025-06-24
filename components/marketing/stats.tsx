import { GitHubStats } from "@/types";

interface StatsProps {
  stats?: GitHubStats;
}

export default function StatsSection({ stats }: StatsProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            SaaS Starter Kit in Numbers
          </h2>
          <p>
            Our production-ready SaaS Starter Kit helps developers and
            businesses build and launch faster with all the essential features
            built-in.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              {stats ? `+${stats.stars.toLocaleString()}` : "+1200"}
            </div>
            <p>Stars on GitHub</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              {stats ? `+${stats.contributors.toLocaleString()}` : "+50"}
            </div>
            <p>Contributors</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">
              {stats ? `+${stats.forks.toLocaleString()}` : "+500"}
            </div>
            <p>Project Forks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
