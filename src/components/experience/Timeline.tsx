import { For, createSignal } from "solid-js";
import { TimelineItem } from "~/data/experience/experience.types";
import "./Timelice.scss";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline(props: TimelineProps) {
  const [selectedItem, setSelectedItem] = createSignal<TimelineItem | null>(
    null
  );

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

      {selectedItem() && (
        <div class="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div class="popup-content" onClick={(e) => e.stopPropagation()}>
            <button class="popup-close" onClick={() => setSelectedItem(null)}>
              ×
            </button>
            <h2>{selectedItem()!.title}</h2>
            <div class="popup-details">
              <img src={selectedItem()!.logo} alt={selectedItem()!.campany} />
              <div>
                <p>
                  <strong>{selectedItem()!.campany}</strong>
                </p>
                <p>{selectedItem()!.date}</p>
                <p>{selectedItem()!.city}</p>
              </div>
            </div>
            <p>{selectedItem()!.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
