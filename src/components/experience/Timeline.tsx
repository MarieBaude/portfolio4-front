import { For } from "solid-js";
import { TimelineItem } from "~/data/experience/experience.types";
import "./Timelice.scss";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline(props: TimelineProps) {
  return (
    <div class="container">
      <div id="timeline">
        <For each={props.items}>
          {(item) => (
            <div class="timeline-item">
              <div class="timeline-icon">
                <item.icon />
              </div>
              <div class={`timeline-content ${item.position}`}>
                <h2>{item.title}</h2>
                <div class="oneLine">
                  <div class="logoInfo">
                    <img class="expLogo" src={item.logo} />
                  </div>
                  <div class="placeInfo">
                    <span class="campanyExp">{item.campany}</span>
                    <span class="dateExp">{item.date}</span>
                    <span class="cityExp">{item.city}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
