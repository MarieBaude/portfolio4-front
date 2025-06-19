import { Title } from "@solidjs/meta";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import "./index.scss";
import { A } from "@solidjs/router";

export default function Projects() {
  return (
    <>
      <Title>Projects</Title>
      {/* <h1>Projects</h1> */}

      <div class="projectCard">
        {PROJECTS_DATA.map((project) => (
          <div class="oneCard">
            <A href={`/projects/${project.id}`}>
              <div class="test">
                <img
                  src={project.mainImage}
                  alt={`Présentation ${project.title}`}
                  class="projectImage"
                />
                <div class="projectText">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div class="projectTags">
                    {project.tags.map((tag) => (
                      <span>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </A>
          </div>
        ))}
      </div>
    </>
  );
}
