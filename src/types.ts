/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  role?: string;
  description: string;
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

export interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

export interface GitHubStats {
  followers: number;
  public_repos: number;
  total_stars: number;
}
