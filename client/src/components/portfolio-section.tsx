import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Star, Github } from "lucide-react";
import { fetchGitHubRepos, getLanguageColor, type GitHubRepo } from "@/lib/github";

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <Card className="hover-lift">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-lg truncate flex-1 mr-2">
            {repo.name}
          </h3>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {repo.description || 'No description available'}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            {repo.language && (
              <span className="flex items-center">
                <span 
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                {repo.language}
              </span>
            )}
            <span className="flex items-center">
              <Star className="h-3 w-3 mr-1" />
              {repo.stargazers_count}
            </span>
          </div>
          <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-6" />
            </div>
            <Skeleton className="h-16 w-full mb-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-8" />
              </div>
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ErrorState() {
  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground mb-4">
        Unable to load repositories. Please visit my GitHub profile directly.
      </p>
      <Button variant="outline" asChild>
        <a 
          href="https://github.com/p-feiteira" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Github className="mr-2 h-4 w-4" />
          View on GitHub
        </a>
      </Button>
    </div>
  );
}

export function PortfolioSection() {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['/api/github/repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Recent projects from my GitHub</p>
        </div>
        
        {isLoading && <LoadingSkeleton />}
        
        {error && <ErrorState />}
        
        {repos && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/p-feiteira" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
