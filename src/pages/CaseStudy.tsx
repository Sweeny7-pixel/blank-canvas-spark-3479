import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PageMeta from "@/components/PageMeta";
import { caseStudies } from "@/data/portfolio-data";

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return (
      <Layout>
        <PageMeta
          title="Case study not found — Sweeny Santo Silvester"
          description="This case study could not be found."
          canonicalPath="/work"
        />
        <Navigation />
        <section className="px-8 md:px-16 lg:px-24 pt-32 pb-24 md:pt-40">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-section">Case study not found</h1>
            <Link to="/work" className="text-body underline">
              Back to all work
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageMeta
        title={`${study.title} — Sweeny Santo Silvester`}
        description={study.subtitle}
        canonicalPath={`/work/${study.slug}`}
      />
      <Navigation />

      <article className="px-8 md:px-16 lg:px-24 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-small underline mb-12"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All work
          </Link>

          <p className="text-tiny tracking-widest text-primary">{study.role}</p>
          <h1 className="text-hero mt-6">{study.title}</h1>
          <p className="text-body text-muted-foreground mt-6 leading-relaxed">
            {study.subtitle}
          </p>
          <p className="text-small text-muted-foreground mt-4">{study.timeframe}</p>

          {study.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 py-10 border-y border-foreground/15">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-large leading-tight text-primary">{metric.value}</p>
                  <p className="text-tiny tracking-widest text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className="text-body leading-relaxed mt-12">{study.summary}</p>

          <div className="mt-16 space-y-14">
            {study.sections.map((section) => (
              <section key={section.heading} className="space-y-5">
                <h2 className="text-large leading-tight">{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-body leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-foreground/15">
            <Link
              to="/contact"
              className="inline-block border border-foreground/40 px-8 py-3 text-small tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
