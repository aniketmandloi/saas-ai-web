import { Users, BarChart, Code } from "lucide-react";

export function FeatureDemo() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <h3 className="text-lg font-medium">Team Collaboration</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Multi-user workspaces with real-time collaboration features.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5" />
            <h3 className="text-lg font-medium">Analytics</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Built-in analytics dashboard to track user engagement and
            conversion.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <h3 className="text-lg font-medium">API Access</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            RESTful and GraphQL APIs with rate limiting and authentication.
          </p>
        </div>
      </div>
    </section>
  );
}
