import { useParams } from "@solidjs/router";
import "./project.scss";
import { PROJECTS_DATA } from "~/data/projets/projects.data";

export default function Project() {
  const params = useParams();
  const project = () =>
    PROJECTS_DATA.find((project) => project.id === Number(params.id));

  return (
    <>
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
    </>
  );
}
