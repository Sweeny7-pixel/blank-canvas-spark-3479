import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * ProjectsSection Component
 * Split layout listing side projects
 */
export default function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <SplitSection title="Projects" id="projects">
      <div className="space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <div key={project.id}>
            {index > 0 && <hr className="border-t border-foreground/15 mb-16 md:mb-20" />}
            <div className="space-y-3">
              <h3 className="text-large leading-tight">{project.name}</h3>
              <p className="text-small">{project.techStack.join(", ")}</p>
              <p className="text-body leading-relaxed mt-6">{project.description}</p>
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-6 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SplitSection>
  );
}
