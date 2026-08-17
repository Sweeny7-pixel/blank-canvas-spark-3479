import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Rocket, Compass } from "lucide-react";
import { updates } from "@/data/portfolio-data";

const icons = { briefcase: Briefcase, rocket: Rocket, compass: Compass } as const;

/**
 * UpdatesSection
 * Three-card "What I'm Up To" strip driven by portfolio data.
 */
export default function UpdatesSection() {
  if (updates.length === 0) return null;

  return (
    <section
      id="updates"
      className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-24"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center space-y-6">
          <h2 className="text-section">What I'm Up To</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my latest work, projects, and explorations in product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20">
          {updates.map((item) => {
            const Icon = icons[item.icon];
            const isExternal = item.href.startsWith("http");

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-lg border border-foreground/15 border-l-4 border-l-primary p-8 space-y-4"
              >
                <span className="inline-flex items-center gap-3 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-tiny tracking-widest">{item.eyebrow}</span>
                </span>

                <p className="text-small text-muted-foreground">{item.kicker}</p>

                <h3 className="text-large leading-tight">{item.title}</h3>

                <p className="text-body leading-relaxed text-muted-foreground flex-1">
                  {item.description}
                </p>

                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-small underline"
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-small underline"
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
