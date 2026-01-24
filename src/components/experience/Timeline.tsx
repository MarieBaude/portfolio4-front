import { For, createSignal, Show } from "solid-js";
import {
  TimelineItem,
  WorkTimelineItem,
  EducationTimelineItem,
} from "~/data/experience/experience.types";
import "./Timeline.scss";
import { PROJECTS_DATA } from "~/data/projets/projects.data";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline(props: TimelineProps) {
  const [selectedItem, setSelectedItem] = createSignal<TimelineItem | null>(
    null,
  );

  const isWorkItem = (item: TimelineItem): item is WorkTimelineItem => {
    return item.type === "work";
  };

  const isEducationItem = (
    item: TimelineItem,
  ): item is EducationTimelineItem => {
    return item.type === "education";
  };

  return (
    <div class="container">
      <div id="timeline">
        <For each={props.items}>
          {(item) => (
            <div class="timeline-item">
              <div class="timeline-icon">
                <item.icon />
              </div>
              <div
                class={`timeline-content ${item.position}`}
                onClick={() => setSelectedItem(item)}
              >
                <h2>{item.title}</h2>
                <div class="oneLine">
                  <div class="logoInfo">
                    <img class="expLogo" src={item.logo} alt={item.campany} />
                  </div>
                  <div class="placeInfo">
                    <span class="campanyExp">{item.campany}</span>
                    <span class="dateExp">{item.date}</span>
                    <span class="cityExp">{item.city}</span>
                    <span class="more">Voir plus de détails</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>

      <Show when={selectedItem()}>
        <div class="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div class="popup-content" onClick={(e) => e.stopPropagation()}>
            <button class="popup-close" onClick={() => setSelectedItem(null)}>
              ×
            </button>
            <h2>{selectedItem()!.title}</h2>

            {/* <a href={selectedItem()!.websiteUrl} target="_blank">
              <div class="popup-details">
                <Show when={selectedItem()!.logo}>
                  <img
                    src={selectedItem()!.logo}
                    alt={selectedItem()!.campany}
                  />
                </Show>
                <div>
                  <p>
                    <strong>{selectedItem()!.campany}</strong>
                  </p>
                  <p>{selectedItem()!.date}</p>
                  <p>{selectedItem()!.city}</p>
                </div>
              </div>
            </a> */}

            <Show
              when={selectedItem()!.websiteUrl}
              fallback={
                <div class="popup-details no-link">
                  <Show when={selectedItem()!.logo}>
                    <img
                      src={selectedItem()!.logo}
                      alt={selectedItem()!.campany}
                    />
                  </Show>
                  <div>
                    <p>
                      <strong>{selectedItem()!.campany}</strong>
                    </p>
                    <p>{selectedItem()!.date}</p>
                    <p>{selectedItem()!.city}</p>
                  </div>
                  <span class="no-link-badge">Pas de site web</span>
                </div>
              }
            >
              <a href={selectedItem()!.websiteUrl} target="_blank">
                <div class="popup-details">
                  <Show when={selectedItem()!.logo}>
                    <img
                      src={selectedItem()!.logo}
                      alt={selectedItem()!.campany}
                    />
                  </Show>
                  <div>
                    <p>
                      <strong>{selectedItem()!.campany}</strong>
                    </p>
                    <p>{selectedItem()!.date}</p>
                    <p>{selectedItem()!.city}</p>
                  </div>
                </div>
              </a>
            </Show>

            <Show when={isWorkItem(selectedItem()!)}>
              <div class="work-details">
                <Show when={(selectedItem() as WorkTimelineItem).status}>
                  <div class="detail-section">
                    <h3>Statut</h3>
                    <p class="status-badge">
                      {(selectedItem() as WorkTimelineItem).status}
                    </p>
                  </div>
                </Show>

                <div class="detail-section">
                  <h3>Responsabilité</h3>
                  <ul class="details-list">
                    <For
                      each={
                        (selectedItem() as WorkTimelineItem).responsabilities
                      }
                    >
                      {(responsability) => <li>{responsability}</li>}
                    </For>
                  </ul>
                </div>

                <div class="detail-section">
                  <h3>Détail des missions</h3>
                  <ul class="details-list">
                    <For each={(selectedItem() as WorkTimelineItem).missions}>
                      {(mission) => <li>{mission}</li>}
                    </For>
                  </ul>
                </div>

                <Show when={(selectedItem() as WorkTimelineItem).achievements}>
                  <div class="detail-section">
                    <h3>Réalisations</h3>
                    <div class="projectsGrid">
                      <For
                        each={(selectedItem() as WorkTimelineItem).achievements}
                      >
                        {(achievement) => {
                          const projectId = achievement.url
                            ?.replace("/projects/", "")
                            .replace("/", "");
                          const projectData = PROJECTS_DATA.find(
                            (p) => p.id === projectId,
                          );

                          return (
                            <Show
                              when={achievement.url}
                              fallback={
                                <div class="projectCard no-link">
                                  <span class="projectTitle">
                                    {achievement.title}
                                  </span>
                                </div>
                              }
                            >
                              <a
                                href={achievement.url}
                                class="projectCard"
                                target="_blank"
                              >
                                <Show when={projectData?.mainImage}>
                                  <div class="projectImageWrapper">
                                    <img
                                      src={projectData!.mainImage}
                                      alt={achievement.title}
                                      class="projectImage"
                                    />
                                  </div>
                                </Show>
                                <span class="projectTitle">
                                  {achievement.title}
                                </span>
                              </a>
                            </Show>
                          );
                        }}
                      </For>
                    </div>
                  </div>
                </Show>

                <Show when={(selectedItem() as WorkTimelineItem).skills}>
                  <div class="detail-section">
                    <h3>Compétences associées</h3>
                    <div class="skills-tags">
                      <For each={(selectedItem() as WorkTimelineItem).skills}>
                        {(skill) => (
                          <a href="/skills">
                            <span class="skill-tag">{skill}</span>
                          </a>
                        )}
                      </For>
                    </div>
                  </div>
                </Show>
              </div>
            </Show>

            <Show when={isEducationItem(selectedItem()!)}>
              <div class="education-details">
                <div class="education-details">
                  <div class="detail-section">
                    <h3>Diplôme obtenu</h3>
                    <p class="diploma">
                      {(selectedItem() as EducationTimelineItem).diploma}
                    </p>
                  </div>

                  <div class="detail-section">
                    <h3>À propos de l'établissement</h3>
                    <p>
                      {
                        (selectedItem() as EducationTimelineItem)
                          .institutionDescription
                      }
                    </p>
                  </div>

                  <div class="detail-section">
                    <h3>Mon regard sur la pédagogie</h3>
                    <p class="pedagogy">
                      {(selectedItem() as EducationTimelineItem).pedagogyVision}
                    </p>
                  </div>
                </div>
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}
