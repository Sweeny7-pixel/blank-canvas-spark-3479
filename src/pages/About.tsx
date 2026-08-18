import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PageMeta from "@/components/PageMeta";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { personalInfo } from "@/data/portfolio-data";

export default function About() {
  const paragraphs = personalInfo.bio.split("\n\n");

  return (
    <Layout>
      <PageMeta
        title="About Sweeny Santo Silvester — Product Manager"
        description="12+ years across enterprise platforms and quality engineering, now focused on product management, adoption, and AI-first delivery."
        canonicalPath="/about"
      />
      <Navigation />

      <section className="px-8 md:px-16 lg:px-24 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-tiny tracking-widest">About Me</p>
          <h1 className="text-display">{personalInfo.name}</h1>
          <p className="text-large text-muted-foreground">{personalInfo.taglineTriplet}</p>
          <div className="space-y-6 pt-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <EducationSection />
      <SkillsSection />
    </Layout>
  );
}
