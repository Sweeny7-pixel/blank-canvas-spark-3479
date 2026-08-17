import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PageMeta from "@/components/PageMeta";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { caseStudies } from "@/data/portfolio-data";

export default function Work() {
  return (
    <Layout>
      <PageMeta
        title="Work & Case Studies — Sweeny Santo Silvester"
        description="Product case studies, enterprise platform experience, and side projects from Sweeny Santo Silvester."
        canonicalPath="/work"
      />
      <Navigation />

      <section className="px-8 md:px-16 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <p className="text-tiny tracking-widest">My Work</p>
          <h1 className="text-display">Case studies & experience</h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            Deep-dives into the problems I've worked on, the decisions I made, and what
            changed as a result.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((cs) => (
            <article
              key={cs.slug}
              className="flex flex-col rounded-lg border border-foreground/15 p-8 space-y-4"
            >
              <p className="text-tiny tracking-widest text-primary">{cs.timeframe}</p>
              <h2 className="text-large leading-tight">{cs.title}</h2>
              <p className="text-body leading-relaxed text-muted-foreground flex-1">
                {cs.subtitle}
              </p>
              <Link
                to={`/work/${cs.slug}`}
                className="inline-flex items-center gap-2 text-small underline"
              >
                Read case study
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <WorkSection />
      <ProjectsSection />
    </Layout>
  );
}
