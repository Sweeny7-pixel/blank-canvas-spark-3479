import { Link } from "react-router-dom";
import { personalInfo } from "@/data/portfolio-data";
import RotatingText from "@/components/RotatingText";

/**
 * HeaderSection Component
 * Animated headline with rotating phrase, CTAs and the profile image
 */
export default function HeaderSection() {
  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 pt-24 pb-20 md:pt-28 md:pb-24 bg-background text-foreground">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full border border-border px-5 py-2 text-tiny tracking-widest mb-8 md:mb-10">
              {personalInfo.eyebrow}
            </span>

            <h1 className="text-display lg:text-[5.5rem] leading-[1.05] font-light lg:font-normal">
              <span className="block">{personalInfo.headlinePrefix}</span>
              <RotatingText
                phrases={personalInfo.headlinePhrases}
                className="text-primary"
              />
            </h1>

            <p className="text-large mt-6 md:mt-8 text-foreground">
              {personalInfo.taglineTriplet}
            </p>

            <p className="text-body leading-relaxed mt-6 md:mt-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10">
              <Link
                to="/work"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 text-small tracking-widest hover:opacity-90 transition-opacity"
              >
                View My Work
              </Link>
              <Link
                to="/about"
                className="inline-block border border-foreground/40 px-8 py-3 text-small tracking-widest hover:border-primary hover:text-primary transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[32rem]">
              <img
                src={personalInfo.avatar}
                alt={`${personalInfo.name}, ${personalInfo.title}`}
                className="w-full h-auto aspect-[52/60] object-cover bg-background"
              />
              <span className="absolute bottom-4 left-0 lg:-left-8 bg-primary text-primary-foreground px-5 py-3 text-tiny tracking-widest shadow-lg">
                {personalInfo.credentialBadge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
