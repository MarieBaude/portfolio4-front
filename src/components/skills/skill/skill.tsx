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
      skill()?.projectIds?.includes(project.id)
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
          {(project, index) => (
            <A
              href={`/projects/${project.id}`}
              class="projectCardInSkill"
              classList={{ alternate: index() % 2 !== 0 }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                class="projectImageInSkill"
              />
              <div class="projectTextInSkill">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
