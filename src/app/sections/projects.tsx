import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Github } from "lucide-react";
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github";
import RepoCard from "@/components/common/repoCard";
import Link from "next/link";


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

export default function Projects() {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['/api/github/repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold my-8">Projects</h2>
        </div>
        
        {isLoading && <LoadingSkeleton />}
        
        {error && <ErrorState />}
        
        {Array.isArray(repos) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(repos as GitHubRepo[]).map((repo: GitHubRepo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/p-feiteira" 
              target="_blank" 
              rel="noopener noreferrer">
              View All on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}