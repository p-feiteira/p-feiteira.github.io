import { ExternalLink, Star } from "lucide-react";
import {getLanguageColor, type GitHubRepo } from "@/lib/github";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <Card className="hover-lift bg-muted-foreground/5 dark:bg-muted/10 transition-shadow duration-300">
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