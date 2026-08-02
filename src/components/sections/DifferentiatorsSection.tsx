import { Target, Brain, Zap } from "lucide-react";
import { differentiators } from "@/data/portfolio-data";

const icons = { target: Target, brain: Brain, zap: Zap } as const;

/**
 * DifferentiatorsSection Component
 * Three-card grid highlighting what sets me apart
 */
export default function DifferentiatorsSection() {
  if (differentiators.length === 0) return null;

  return (
    <section
      id="differentiators"
      className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center space-y-6">
          <h2 className="text-section">What Sets Me Apart</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Not just another PM — a unique combination of skills and mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20">
          {differentiators.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.id}
                className="rounded-lg border border-foreground/15 p-8 md:p-10 space-y-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-large leading-tight">{item.title}</h3>
                <p className="text-body leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
