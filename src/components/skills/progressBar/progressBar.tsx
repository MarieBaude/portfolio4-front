import { A } from "@solidjs/router";
import { Skill } from "~/data/skills/skills.types";
import "./progressBar.scss";

interface ProgressBarProps {
  skill: Skill;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div class="progress_bar">
      <A href={`/skills/${props.skill.title}`}>
        <div class="logo_title">
          <img
            src={props.skill.icon}
            alt={props.skill.title}
            width="50"
            height="50"
          />
          <h3>{props.skill.title}</h3>
        </div>

        <div class="bar_content">
          <div
            style={{
              width: "100%",
              "background-color": "#A0A0C0",
              "border-radius": "10px",
              overflow: "hidden",
              "margin-bottom": "0.5rem",
            }}
          >
            <div
              style={{
                width: `${props.skill.level}%`,
                height: "20px",
                "background-color": `${props.skill.color}`,
                transition: "width 0.5s ease-out",
              }}
            />
          </div>

          <span>{props.skill.level}%</span>
        </div>
      </A>
    </div>
  );
}
