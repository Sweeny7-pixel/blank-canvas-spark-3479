import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PageMeta from "@/components/PageMeta";
import HeaderSection from "@/components/sections/HeaderSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      <PageMeta
        title="Sweeny Santo Silvester — Product Manager"
        description="Lead QA Analyst turned Product Manager. 12+ years in enterprise platforms, Agile delivery, and customer adoption roadmaps."
        canonicalPath="/"
      />
      <Navigation />
      <HeaderSection />
      <DifferentiatorsSection />
      <UpdatesSection />

      <section className="px-8 md:px-16 lg:px-24 pb-8">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Case studies, roles, and side projects live on the Work page.
          </p>
          <Link
            to="/work"
            className="inline-block border border-foreground/40 px-8 py-3 text-small tracking-widest hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
          >
            Explore my work
          </Link>
        </div>
      </section>
    </Layout>
  );
}
