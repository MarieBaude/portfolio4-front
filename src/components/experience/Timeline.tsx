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
                <p>{item.content}</p>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
