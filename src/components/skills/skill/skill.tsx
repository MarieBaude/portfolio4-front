import { A, useParams } from "@solidjs/router";
import "./skill.scss";
import { SKILLS_DATA } from "~/data/skills/skills.data";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import { For } from "solid-js";

export default function Skill() {
  const params = useParams();
  const skill = () =>
    SKILLS_DATA.find((skill) => skill.id === Number(params.id));

  const relatedProjects = () =>
    PROJECTS_DATA.filter((project) =>
      project.skillIds?.includes(Number(params.id))
    );

  return (
    <div class="skillContent">
      <div class="skillContainer">
        {/* <h1>{skill()?.title}</h1> */}

        {/* Définition */}
        <div class="def_section">
          <img src={skill()?.icon} class="skillIcon" alt={skill()?.title} />
          <div class="def_text">
            <h2>Ma définition</h2>
            <p>{skill()?.def}</p>
          </div>
        </div>

        {/* Preuves */}
        <h2>Mes éléments de preuve</h2>
        <For each={relatedProjects()}>
          {(project) => (
            <A href={`/projects/${project.id}`} class="project-card">
              <img
                src={project.mainImage}
                alt={project.title}
                class="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div class="project-tags">
                <For each={project.tags?.slice(0, 3)}>
                  {(tag) => <span>#{tag}</span>}
                </For>
              </div>
            </A>
          )}
        </For>

        {/* Auto critique */}
        <h2>Mon autocritique</h2>
        <p>{skill()?.crit}</p>

        {/* Evolution */}
        <h2>Mon évolution dans cette compétence</h2>
        <p>{skill()?.evol}</p>
      </div>
    </div>
  );
}
