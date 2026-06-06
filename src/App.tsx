import { CursorGlow } from "@/components/CursorGlow";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ThemeToggle } from "@/components/ThemeToggle";
import { sections } from "@/constants/sections";
import { ThemeProvider } from "@/providers/ThemeProvider";

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <main>
          <ThemeToggle />
          <CursorGlow />
          <Hero />

          {sections.map((section, index) => {
            const SectionComponent = section.component;
            const number = index.toString();

            return (
              <div key={section.id} className="mx-auto max-w-3xl px-6">
                <SectionComponent title={section.title} number={number} />
              </div>
            );
          })}

          <div className="mx-auto max-w-3xl px-6">
            <Footer />
          </div>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
