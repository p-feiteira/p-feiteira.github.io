"use client"

import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Github } from "lucide-react"
import { fetchGitHubRepos, type GitHubRepo } from "@/lib/github"
import RepoCard from "@/components/common/repoCard"
import Link from "next/link"
import { GITHUB, SITE_CONFIG } from "@/lib/constants"

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
  )
}

function ErrorState({ onRetry, isRetrying }: { onRetry: () => void; isRetrying: boolean }) {
  const t = useTranslations("projects")

  return (
    <div className="text-center py-8" role="alert">
      <p className="text-muted-foreground mb-4">{t("errorMessage")}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" onClick={onRetry} disabled={isRetrying}>
          {isRetrying ? t("retrying") : t("tryAgain")}
        </Button>
        <Button variant="outline" asChild>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("visitProfileAriaLabel")}
          >
            <Github className="mr-2 h-4 w-4" />
            {t("viewOnGithub")}
          </a>
        </Button>
      </div>
    </div>
  )
}

export default function Projects() {
  const t = useTranslations("projects")
  const {
    data: repos,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["/api/github/repos"],
    queryFn: fetchGitHubRepos,
    staleTime: GITHUB.staleTime,
    retry: GITHUB.retryAttempts,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  })

  return (
    <section id="projects" className="section-spacing scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold my-8">{t("title")}</h2>
        </div>

        {(isLoading || isRefetching) && <LoadingSkeleton />}

        {error && !isLoading && (
          <ErrorState onRetry={() => refetch()} isRetrying={isRefetching} />
        )}

        {!isLoading && !error && Array.isArray(repos) && repos.length > 0 && (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(repos as GitHubRepo[]).map((repo: GitHubRepo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://github.com/p-feiteira"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("visitProfileAriaLabel")}
                >
                  {t("viewAllOnGithub")}
                </Link>
              </Button>
            </div>
          </>
        )}

        {!isLoading && !error && Array.isArray(repos) && repos.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">{t("noRepos")}</p>
            <Button variant="outline" asChild>
              <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {t("visitProfile")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
