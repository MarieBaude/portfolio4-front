import { A, useParams } from "@solidjs/router";
import "./project.scss";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import { SKILLS_DATA } from "~/data/skills/skills.data";
import { For, Show } from "solid-js";
import { parseFormattedText } from "~/utils/textParser";

export default function Project() {
  const params = useParams();
  const project = () =>
    PROJECTS_DATA.find((project) => project.id === params.id);

  const skills = () =>
    SKILLS_DATA.filter((skill) => project()?.skillIds?.includes(skill.id));

  return (
    <div class="projectContent">
      {/* Hero Section */}
      <section class="projectHero">
        <div class="heroContent">
          <div class="tagsContainer">
            <For each={project()?.tags}>
              {(tag) => <span class="tag">#{tag}</span>}
            </For>
          </div>
          <h1 class="projectTitle">{project()?.title}</h1>
          <p class="projectSummary">{project()?.summary}</p>
        </div>
        <div class="heroImage">
          <img src={project()?.mainImage} alt={project()?.title} />
        </div>
      </section>

      <div class="projectContainer">
        {/* Présentation */}
        <section class="projectSection">
          <h2 class="sectionTitle">Présentation du projet</h2>
          <div class="contentCard">
            <p class="textContent">
              {project()?.presentation && parseFormattedText(project()!.presentation)}
            </p>
          </div>
        </section>

        {/* Objectifs & Contexte */}
        <section class="projectSection">
          <h2 class="sectionTitle">Objectifs & Contexte</h2>

          {/* Objectifs */}
          <h3 class="subsectionMainTitle">Objectifs</h3>
          <div class="subsectionGroup">
            <For each={project()?.objectives}>
              {(section) => (
                <Show when={section?.items && section.items.length > 0}>
                  <div class="subsection">
                    <h4 class="subsectionTitle">{section.title}</h4>
                    <ul class="bulletList">
                      <For each={section.items}>
                        {(item) => <li>{item}</li>}
                      </For>
                    </ul>
                  </div>
                </Show>
              )}
            </For>
          </div>

          {/* Contexte */}
          <h3 class="subsectionMainTitle">Contexte</h3>

          <div class="contextGrid">
            <div class="contextCard">
              <h4 class="contextLabel">Période</h4>
              <p class="contextValue">{project()?.context?.period}</p>
            </div>
            <div class="contextCard">
              <h4 class="contextLabel">Cadre</h4>
              <p class="contextValue">{project()?.context?.framework}</p>
            </div>
            <div class="contextCard">
              <h4 class="contextLabel">Mode</h4>
              <p class="contextValue">{project()?.context?.mode}</p>
            </div>
          </div>

          <Show
            when={
              project()?.context?.team && project()!.context.team.length > 0
            }
          >
            <div class="subsection">
              <h4 class="subsectionTitle">Équipe</h4>
              <ul class="bulletList">
                <For each={project()!.context.team}>
                  {(member) => <li>{member}</li>}
                </For>
              </ul>
            </div>
          </Show>

          <Show
            when={
              project()?.context?.organization &&
              project()!.context.organization.length > 0
            }
          >
            <div class="subsection">
              <h4 class="subsectionTitle">Organisation projet</h4>
              <ul class="bulletList">
                <For each={project()!.context.organization}>
                  {(item) => <li>{item}</li>}
                </For>
              </ul>
            </div>
          </Show>

          <Show
            when={
              project()?.context?.stack && project()!.context.stack.length > 0
            }
          >
            <div class="subsection">
              <h4 class="subsectionTitle">Stack technique</h4>
              <ul class="bulletList">
                <For each={project()!.context.stack}>
                  {(tech) => <li>{tech}</li>}
                </For>
              </ul>
            </div>
          </Show>

          {/* Enjeux */}
          <Show when={project()?.stakes && project()!.stakes.length > 0}>
            <h3 class="subsectionMainTitle otherSection">Enjeux</h3>
            <div class="subsection">
              <ul class="bulletList">
                <For each={project()!.stakes}>
                  {(stake) => <li>{stake}</li>}
                </For>
              </ul>
            </div>
          </Show>

          {/* Risques */}
          <Show when={project()?.risks && project()!.risks.length > 0}>
            <h3 class="subsectionMainTitle otherSection">Risques</h3>
            <div class="subsection">
              <ul class="bulletList">
                <For each={project()!.risks}>{(risk) => <li>{risk}</li>}</For>
              </ul>
            </div>
          </Show>
        </section>

        {/* Étapes & Réalisations */}
        <Show when={project()?.phases && project()!.phases.length > 0}>
          <section class="projectSection">
            <h2 class="sectionTitle">Étapes & Réalisations</h2>
            <div class="phasesContainer">
              <For each={project()!.phases}>
                {(phase, index) => (
                  <div class="phaseCard">
                    <div class="phaseNumber">{index() + 1}</div>
                    <div class="phaseContent">
                      <h3 class="phaseTitle">{phase.title}</h3>
                      <p class="phaseDescription">{phase.description}</p>
                      <ul class="phaseAchievements">
                        <For each={phase.achievements}>
                          {(achievement) => <li>{achievement}</li>}
                        </For>
                      </ul>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        {/* Acteurs */}
        <Show when={project()?.actors && project()!.actors.length > 0}>
          <section class="projectSection">
            <h2 class="sectionTitle">Acteurs & Interactions</h2>
            <div class="actorsContainer">
              <For each={project()!.actors}>
                {(actor) => (
                  <div class="actorCard">
                    <h3 class="actorRole">{actor.role}</h3>
                    <p class="actorDescription">{actor.description}</p>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        {/* Résultats */}
        <section class="projectSection">
          <h2 class="sectionTitle">Résultats</h2>

          <div class="resultsGrid">
            <div class="resultCard">
              <h3 class="resultTitle">Pour moi</h3>

              <Show
                when={
                  project()?.results?.personal?.technical &&
                  project()!.results.personal.technical.length > 0
                }
              >
                <div class="resultSubsection">
                  <h4 class="resultSubtitle">Compétences techniques</h4>
                  <ul class="bulletList">
                    <For each={project()!.results.personal.technical}>
                      {(item) => <li>{item}</li>}
                    </For>
                  </ul>
                </div>
              </Show>

              <Show
                when={
                  project()?.results?.personal?.organizational &&
                  project()!.results.personal.organizational.length > 0
                }
              >
                <div class="resultSubsection">
                  <h4 class="resultSubtitle">Compétences organisationnelles</h4>
                  <ul class="bulletList">
                    <For each={project()!.results.personal.organizational}>
                      {(item) => <li>{item}</li>}
                    </For>
                  </ul>
                </div>
              </Show>

              <Show
                when={
                  project()?.results?.personal?.pride &&
                  project()!.results.personal.pride
                }
              >
                <div class="prideSection">
                  <p class="prideText">{project()!.results.personal.pride}</p>
                </div>
              </Show>
            </div>

            <div class="resultCard">
              <h3 class="resultTitle">Pour l'entreprise</h3>

              <Show
                when={
                  project()?.results?.company?.achievements &&
                  project()!.results.company.achievements.length > 0
                }
              >
                <div class="resultSubsection">
                  <h4 class="resultSubtitle">Réalisations</h4>
                  <ul class="bulletList">
                    <For each={project()!.results.company.achievements}>
                      {(item) => <li>{item}</li>}
                    </For>
                  </ul>
                </div>
              </Show>

              <Show
                when={
                  project()?.results?.company?.satisfaction &&
                  project()!.results.company.satisfaction.length > 0
                }
              >
                <div class="resultSubsection">
                  <h4 class="resultSubtitle">Satisfaction client</h4>
                  <ul class="bulletList">
                    <For each={project()!.results.company.satisfaction}>
                      {(item) => <li>{item}</li>}
                    </For>
                  </ul>
                </div>
              </Show>

              <Show
                when={
                  project()?.results?.company?.impact &&
                  project()!.results.company.impact
                }
              >
                <div class="impactSection">
                  <p class="impactText">{project()!.results.company.impact}</p>
                </div>
              </Show>
            </div>
          </div>
        </section>

        {/* Lendemains du projet */}
        <section class="projectSection">
          <h2 class="sectionTitle">Lendemains du projet</h2>

          <div class="futureTimeline">
            <Show
              when={
                project()?.future?.immediate &&
                project()!.future.immediate.length > 0
              }
            >
              <div class="timelineCard">
                <h3 class="timelineTitle">Futur immédiat</h3>
                <ul class="bulletList">
                  <For each={project()!.future.immediate}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>
            </Show>

            <Show
              when={
                project()?.future?.midTerm &&
                project()!.future.midTerm.length > 0
              }
            >
              <div class="timelineCard">
                <h3 class="timelineTitle">À distance</h3>
                <ul class="bulletList">
                  <For each={project()!.future.midTerm}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>
            </Show>

            <Show
              when={
                project()?.future?.current &&
                project()!.future.current.length > 0
              }
            >
              <div class="timelineCard current">
                <h3 class="timelineTitle">Aujourd'hui</h3>
                <ul class="bulletList">
                  <For each={project()!.future.current}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>
            </Show>
          </div>
        </section>

        {/* Regard critique */}
        <Show when={project()?.critique && project()!.critique.length > 0}>
          <section class="projectSection">
            <h2 class="sectionTitle">Mon regard critique</h2>
            <div class="critiqueCard">
              <For each={project()!.critique}>
                {(paragraph) => <p class="critiqueParagraph">{paragraph}</p>}
              </For>
            </div>
          </section>
        </Show>

        {/* Compétences liées */}
        <Show when={skills().length > 0}>
          <section class="projectSection">
            <h2 class="sectionTitle">Compétences associées</h2>
            <div class="skillsGrid">
              <For each={skills()}>
                {(skill) => (
                  <A href={`/skills/${skill.id}`} class="skillCard">
                    <img src={skill.icon} alt={skill.title} class="skillIcon" />
                    <span class="skillTitle">{skill.title}</span>
                  </A>
                )}
              </For>
            </div>
          </section>
        </Show>
      </div>
    </div>
  );
}
