import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import PageMeta from "@/components/PageMeta";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <Layout>
      <PageMeta
        title="Contact Sweeny Santo Silvester"
        description="Get in touch with Sweeny Santo Silvester — email, phone, LinkedIn, and resume download."
        canonicalPath="/contact"
      />
      <Navigation />

      <section className="px-8 md:px-16 lg:px-24 pt-32 pb-8 md:pt-40">
        <div className="max-w-6xl mx-auto space-y-6">
          <p className="text-tiny tracking-widest">Contact</p>
          <h1 className="text-display">Let's talk product</h1>
          <p className="text-body text-muted-foreground max-w-2xl">
            Open to product management roles and conversations about adoption, discovery,
            and AI-first delivery.
          </p>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
