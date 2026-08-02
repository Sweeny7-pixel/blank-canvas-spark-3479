import { personalInfo, socialLinks } from "@/data/portfolio-data";
import resumeAsset from "@/assets/resume.pdf.asset.json";

/**
 * ContactSection Component
 * Split layout with vertical divider
 */
export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-24">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-32 items-center">
        <div className="flex items-center justify-center lg:justify-end lg:pr-16 lg:border-r border-foreground/15">
          <h2 className="text-section">Contact</h2>
        </div>

        <div className="flex items-center lg:pl-16">
          <div className="space-y-6">
            <div className="mb-10">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-48 h-64 object-cover bg-muted"
              />
            </div>

            <p className="text-large">{personalInfo.name}</p>

            <p className="text-body">
              {personalInfo.location.city}, {personalInfo.location.country}
            </p>

            <a href={`mailto:${personalInfo.email}`} className="text-body underline block">
              {personalInfo.email}
            </a>

            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="text-body underline block"
              >
                {personalInfo.phone}
              </a>
            )}

            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body underline block"
              >
                {link.platform}
              </a>
            ))}

            <div className="pt-4">
              <a
                href={resumeAsset.url}
                download="Sweeny_Santo_Silvester.pdf"
                className="inline-block border border-foreground/30 px-8 py-3 text-small tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
