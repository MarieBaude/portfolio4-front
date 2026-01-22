import { useParams } from "@solidjs/router";
import "./skill.scss";
import { SKILLS_DATA } from "~/data/skills/skills.data";
import { For, Show } from "solid-js";
import { PROJECTS_DATA } from "~/data/projets/projects.data";

export default function Skill() {
  const params = useParams();
  const skill = () => SKILLS_DATA.find((skill) => skill.id === params.id);

  const renderStars = (level: number) => {
    const stars = Math.round(level / 20);
    return "⭐".repeat(stars);
  };

  return (
    <div class="skillContent">
      <div class="skillContainer">
        {/* Header avec icône et titre */}
        <div class="skillHeader">
          <img src={skill()?.icon} class="skillIcon" alt={skill()?.title} />
          <h1 class="skillTitle">{skill()?.title}</h1>
        </div>

        {/* Définition */}
        <section class="skillSection">
          <h2 class="sectionTitle">Ma définition</h2>
          <div class="definitionCard">
            <p class="definitionText">{skill()?.def}</p>
          </div>
        </section>

        {/* Preuves */}
        <Show when={skill()?.proofs && skill()!.proofs.length > 0}>
          <section class="skillSection">
            <h2 class="sectionTitle">Mes éléments de preuve</h2>
            <div class="proofsContainer">
              <For each={skill()?.proofs}>
                {(proof) => (
                  <div class="proofCard">
                    <h3 class="proofTitle">{proof.title}</h3>
                    <p class="proofDescription">{proof.description}</p>
                    <ul class="proofAchievements">
                      <For each={proof.achievements}>
                        {(achievement) => <li>{achievement}</li>}
                      </For>
                    </ul>
                    <p class="proofDescription">{proof.conclusion}</p>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        {/* Auto critique */}
        <section class="skillSection">
          <h2 class="sectionTitle">Mon autocritique</h2>
          <div class="critiqueCard">
            <div class="levelBadge">
              <span class="levelText">Niveau :</span>
              <span class="stars">{renderStars(skill()?.level || 0)}</span>
              <span class="levelNumber">({skill()?.level}/100)</span>
            </div>
            <div class="critiqueContent">
              <For each={skill()?.crit.paragraphs}>
                {(paragraph) => <p class="critiqueParagraph">{paragraph}</p>}
              </For>

              <Show
                when={skill()?.crit.advice && skill()!.crit.advice.length > 0}
              >
                <div class="adviceSection">
                  <h4 class="adviceTitle">Recul et conseils :</h4>
                  <ul class="adviceList">
                    <For each={skill()?.crit.advice}>
                      {(advice) => <li>{advice}</li>}
                    </For>
                  </ul>
                </div>
              </Show>
            </div>
          </div>
        </section>

        {/* Evolution */}
        <section class="skillSection">
          <h2 class="sectionTitle">Mon évolution dans cette compétence</h2>
          <div class="evolutionCard">
            <p class="evolutionText">{skill()?.evol.text}</p>

            <Show
              when={skill()?.evol.roadmap && skill()!.evol.roadmap.length > 0}
            >
              <div class="roadmapSection">
                <h4 class="roadmapTitle">Roadmap :</h4>
                <ul class="roadmapList">
                  <For each={skill()?.evol.roadmap}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>
            </Show>
          </div>
        </section>

        {/* Projets */}
        <section class="skillSection">
          <h2 class="sectionTitle">Réalisations rattachées</h2>
          <Show when={skill()?.project && skill()!.project.length > 0}>
            <div class="projectsGrid">
              <For each={skill()?.project}>
                {(proj) => {
                  const projectData = PROJECTS_DATA.find(
                    (p) => p.id === proj.url?.split("/").pop(),
                  );
                  return (
                    <a href={proj.url} class="projectCard">
                      <Show when={projectData?.mainImage}>
                        <div class="projectImageWrapper">
                          <img
                            src={projectData!.mainImage}
                            alt={proj.title}
                            class="projectImage"
                          />
                        </div>
                      </Show>
                      <span class="projectTitle">{proj.title}</span>
                    </a>
                  );
                }}
              </For>
            </div>
          </Show>
        </section>
      </div>
    </div>
  );
}
