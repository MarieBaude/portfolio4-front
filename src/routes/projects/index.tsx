import { Title } from "@solidjs/meta";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import "./index.scss";

export default function Projects() {
  return (
    <section>
      <Title>Projects</Title>
      <h2 class="sectionTitle">Mes réalisations</h2>
      <div class="projectCard">
        {PROJECTS_DATA.map((project) => (
          <div class="oneCard">
            <a href={`/projects/${project.id}`}>
              <div class="test">
                <img
                  src={project.mainImage}
                  alt={`Présentation ${project.title}`}
                  class="projectImage"
                />
                <div class="projectCardText">
                  <h3 class="projectMainTitle">{project.title}</h3>
                  <p>{project.summary}</p>
                  <div class="projectTags">
                    {project.tags.map((tag) => (
                      <span class="projectTag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
