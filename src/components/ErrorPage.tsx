import { Button } from "@/components/Button";

interface ErrorPageProps {
  error?: Error;
}

export function ErrorPage(props: ErrorPageProps) {
  const { error } = props;

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div>
        <h1 className="mb-4 font-bold text-4xl text-foreground">
          Something went wrong
        </h1>
        <p className="mb-8 text-muted-foreground">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        {error && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-muted-foreground text-sm">
              Error Details
            </summary>
            <pre className="mt-4 overflow-auto rounded bg-muted p-4 text-xs">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
