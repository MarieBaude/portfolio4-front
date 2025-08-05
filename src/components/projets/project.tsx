import { A, useParams } from "@solidjs/router";
import "./project.scss";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import { SKILLS_DATA } from "~/data/skills/skills.data";
import { For } from "solid-js";

export default function Project() {
  const params = useParams();
  const project = () =>
    PROJECTS_DATA.find((project) => project.id === Number(params.id));

  const skills = () =>
    SKILLS_DATA.filter((skill) => project()?.skillIds?.includes(skill.id));

  return (
    <>
      <section class="imageSection">
        <div class="headerSkill">
          <div class="tagsList">
            <For each={project()?.tags}>
              {(tag) => <span class="tag">#{tag}</span>}
            </For>
          </div>
          <h1>{project()?.title}</h1>
          <h2 class="headerSummary">{project()?.summary}</h2>
        </div>
        <img src={project()?.mainImage} alt="image de présentation du projet" />
      </section>
      
      <section>
        <h2>La présentation, la définition du projet ou de la réalisation</h2>
        <p class="projectText">{project()?.def}</p>

        <h2>Les objectifs, le contexte, l’enjeu, les risques</h2>
        <p class="projectText">{project()?.obj}</p>

        <h2>Les étapes (ce que j’ai fait)</h2>
        <div class="projectText">
          <ul>
            {project()?.step?.map((stepItem) => (
              <li class="listLi">{stepItem}</li>
            ))}
          </ul>
        </div>

        <h2>Les acteurs</h2>
        <div class="projectText">
          <ul>
            {project()?.actor?.map((actorItem) => (
              <li class="listLi">{actorItem}</li>
            ))}
          </ul>
        </div>

        <h2>Les résultats</h2>
        <h3>Pour moi</h3>
        <p class="projectText">{project()?.me}</p>

        <h3>Pour l'entreprise</h3>
        <p class="projectText">{project()?.company}</p>

        <h2>Les lendemains du projet</h2>
        <p class="projectText">{project()?.next}</p>

        <h2>Mon regard critique</h2>
        <p class="projectText">{project()?.crit}</p>

        <h2>Compétences</h2>
        <div class="skills">
          <For each={skills()}>
            {(skill) => (
              <div class="skill">
                <img
                  src={skill.icon}
                  alt={`Icône ${skill.title}`}
                  class="skill-icon"
                />
                <span class="titleSkill">{skill.title}</span>
                <A href={`/skills/${skill.id}`} class="buttonStyle">
                  Action
                </A>
              </div>
            )}
          </For>
        </div>
      </section>
    </>
  );
}
