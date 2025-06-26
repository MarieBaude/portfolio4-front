import { A } from "@solidjs/router";
import { Skill } from "~/data/skills/skills.types";
import "./progressBar.scss";

interface ProgressBarProps {
  skill: Skill;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <>
      <A href={`/skills/${props.skill.id}`}>
        <>
          <img
            src={props.skill.icon}
            alt={props.skill.title}
            class="skillsIcon"
          />
          <h3>{props.skill.title}</h3>
        </>

        <>
          <div class="basicBar">
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
        </>
      </A>
    </>
  );
}
