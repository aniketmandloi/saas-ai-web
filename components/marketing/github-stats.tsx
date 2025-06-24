import { GitHubStats } from "@/types";
import { Star, GitFork, Users, Clock } from "lucide-react";

interface GitHubStatsDisplayProps {
  stats: GitHubStats;
}

export function GitHubStatsDisplay({ stats }: GitHubStatsDisplayProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4" />
        <span>{stats.stars.toLocaleString()} stars</span>
      </div>
      <div className="flex items-center gap-1">
        <GitFork className="h-4 w-4" />
        <span>{stats.forks.toLocaleString()} forks</span>
      </div>
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4" />
        <span>{stats.contributors.toLocaleString()} contributors</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>Updated {new Date(stats.lastUpdated).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
