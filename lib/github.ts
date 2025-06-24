import { cache } from "react";
import { Octokit } from "@octokit/rest";
import { prisma } from "./db";

// Initialize Octokit with GitHub token
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// Repository details
const REPO_OWNER = process.env.GITHUB_REPO_OWNER || "yourusername";
const REPO_NAME = process.env.GITHUB_REPO_NAME || "saas-starter-kit";

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
  lastUpdated: string;
}

// Get GitHub stats with caching
export const getGitHubStats = cache(async () => {
  try {
    // Try to fetch fresh data from GitHub API
    const [repoData, contributorsData] = await Promise.all([
      octokit.repos.get({
        owner: REPO_OWNER,
        repo: REPO_NAME,
      }),
      octokit.repos.listContributors({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        per_page: 100,
      }),
    ]);

    const stats = {
      stars: repoData.data.stargazers_count,
      forks: repoData.data.forks_count,
      contributors: contributorsData.data.length,
      lastUpdated: new Date().toISOString(),
    };

    // Store stats in database for fallback
    await storeGitHubStats(stats);

    return stats;
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);

    // Fall back to cached stats from database
    return getFallbackGitHubStats();
  }
});

// Store GitHub stats in database for fallback
async function storeGitHubStats(stats: GitHubStats) {
  try {
    // Convert ISO string to timestamp that PostgreSQL can understand
    await prisma.$executeRaw`
      INSERT INTO github_stats (stars, forks, contributors, last_updated)
      VALUES (${stats.stars}, ${stats.forks}, ${stats.contributors}, ${new Date(
      stats.lastUpdated
    )})
      ON CONFLICT (id) DO UPDATE
      SET stars = ${stats.stars},
          forks = ${stats.forks},
          contributors = ${stats.contributors},
          last_updated = ${new Date(stats.lastUpdated)}
    `;
  } catch (error) {
    console.error("Failed to store GitHub stats:", error);
  }
}

// Get fallback GitHub stats from database
async function getFallbackGitHubStats() {
  try {
    const fallbackStats = await prisma.$queryRaw<
      Array<{
        stars: number;
        forks: number;
        contributors: number;
        lastUpdated: string;
      }>
    >`
      SELECT stars, forks, contributors, last_updated as "lastUpdated"
      FROM github_stats
      ORDER BY last_updated DESC
      LIMIT 1
    `;

    return (
      fallbackStats[0] || {
        stars: 0,
        forks: 0,
        contributors: 0,
        lastUpdated: new Date().toISOString(),
      }
    );
  } catch (error) {
    console.error("Failed to get fallback GitHub stats:", error);
    return {
      stars: 0,
      forks: 0,
      contributors: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Get repository releases
export async function getRepositoryReleases(limit = 5) {
  try {
    const releases = await octokit.repos.listReleases({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      per_page: limit,
    });

    return releases.data.map((release) => ({
      id: release.id,
      name: release.name,
      tagName: release.tag_name,
      body: release.body,
      createdAt: release.created_at,
      url: release.html_url,
    }));
  } catch (error) {
    console.error("Failed to fetch repository releases:", error);
    return [];
  }
}
