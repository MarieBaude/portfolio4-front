import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Skill } from "~/data/skills/skills.types";
import "./progressBar.scss";

interface ProgressBarProps {
  skill: Skill;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <A href={`/skills/${props.skill.id}`} class="skillCard">
      <div class="skillHeader">
        <img
          src={props.skill.icon}
          alt={props.skill.title}
          class="skillIcon"
        />
        <div class="skillTitleContainer">
          <h3 class="skillTitle">{props.skill.title}</h3>
          <Show when={props.skill.intro}>
            <p class="skillIntro">{props.skill.intro}</p>
          </Show>
        </div>
      </div>

      <div class="progressBarWrapper">
        <span class="skillLevel">{props.skill.level}%</span>
        <div class="progressBarContainer">
          <div
            class="progressBarFill"
            style={{
              width: `${props.skill.level}%`,
              "background-color": `${props.skill.color}`,
            }}
          />
        </div>
      </div>
    </A>
  );
}