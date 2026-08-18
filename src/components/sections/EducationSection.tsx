import { education, certifications } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

export default function EducationSection() {
  return (
    <SplitSection title="Education" id="education">
      <div className="space-y-16 md:space-y-20">
        {education.map((edu, index) => (
          <div key={edu.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <p className="text-large leading-tight">
                {edu.degree} {edu.field}, {edu.institution}
              </p>
              {(edu.startYear || edu.endYear) && (
                <p className="text-small">
                  {edu.startYear} - {edu.endYear}
                </p>
              )}
              {edu.details && <p className="text-body mt-4">{edu.details}</p>}
            </div>
          </div>
        ))}

        {certifications.length > 0 && (
          <div>
            <hr className="border-t border-foreground/15 mb-16 md:mb-20" />
            <p className="text-tiny tracking-widest mb-8">Certifications</p>
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="space-y-3">
                  <p className="text-large leading-tight">
                    {cert.name}, {cert.issuer}
                  </p>
                  <p className="text-small">{cert.year}</p>
                  {(cert.liveUrl || cert.url) && (
                    <a
                      href={cert.liveUrl || cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body underline block"
                    >
                      View certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </SplitSection>
  );
}
