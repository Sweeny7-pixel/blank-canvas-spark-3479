import { personalInfo } from "@/data/portfolio-data";
import RotatingText from "@/components/RotatingText";

/**
 * HeaderSection Component
 * Animated headline with rotating phrase, paired with the profile image
 */
export default function HeaderSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="flex items-center justify-center px-8 md:px-16 lg:px-24 pt-24 pb-20 md:pt-28 md:pb-24 bg-[#141414] text-[oklch(96%_0.01_85)]">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full border border-foreground/20 px-5 py-2 text-tiny tracking-widest mb-8 md:mb-10">
              {personalInfo.eyebrow}
            </span>

            <h1 className="text-display lg:text-[5.5rem] leading-[1.05] font-light lg:font-normal">
              <span className="block">{personalInfo.headlinePrefix}</span>
              <RotatingText
                phrases={personalInfo.headlinePhrases}
                className="text-primary"
              />
            </h1>

            <p className="text-body leading-relaxed mt-8 md:mt-10 max-w-xl mx-auto lg:mx-0 text-muted-foreground">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full max-w-[32rem] h-auto aspect-[52/60] object-cover rounded-t-[160px] bg-muted"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
