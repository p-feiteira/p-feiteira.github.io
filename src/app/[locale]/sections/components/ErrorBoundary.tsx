"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error | null; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    // In production, you might want to log this to an error reporting service
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center space-y-4">
            <AlertCircle className="h-16 w-16 mx-auto text-destructive" aria-hidden="true" />
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-muted-foreground">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="text-left mt-4 p-4 bg-muted rounded-md">
                <summary className="cursor-pointer font-semibold mb-2">Error details</summary>
                <pre className="text-xs overflow-auto">{this.state.error.toString()}</pre>
              </details>
            )}
            <div className="flex gap-4 justify-center mt-6">
              <Button onClick={this.resetError} variant="outline">
                Try again
              </Button>
              <Button onClick={() => window.location.reload()}>
                Refresh page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

