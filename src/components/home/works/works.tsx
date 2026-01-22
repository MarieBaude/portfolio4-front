import { Title } from "@solidjs/meta";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import "./works.scss";
import { A } from "@solidjs/router";
import { For, Show } from "solid-js";

export default function Works() {
  // Filtrer les projets Nowelia et Gecko (insensible à la casse)
  const featuredProjects = PROJECTS_DATA.filter(
    (project) =>
      project.id.toLowerCase() === "nowelia" ||
      project.id.toLowerCase() === "gecko",
  );

  return (
    <section class="worksSection">
      <h2 class="sectionTitle">Projets majeurs</h2>
      <Show when={featuredProjects.length > 0}>
        <div class="projectsGrid">
          <For each={featuredProjects}>
            {(project) => (
              <A href={`/projects/${project.id}`} class="projectCard">
                <Show when={project.mainImage}>
                  <div class="projectImageWrapper">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      class="projectImage"
                    />
                  </div>
                </Show>
                <span class="projectTitle">{project.title}</span>
                <Show when={project.tags && project.tags.length > 0}>
                  <div class="projectTags">
                    <For each={project.tags.slice(0, 3)}>
                      {(tag) => <span class="projectTag">{tag}</span>}
                    </For>
                  </div>
                </Show>
              </A>
            )}
          </For>
        </div>
      </Show>
    </section>
  );
}
