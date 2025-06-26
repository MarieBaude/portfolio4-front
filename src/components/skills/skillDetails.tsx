import { Title } from "@solidjs/meta";
import { createMemo, For } from "solid-js";
import { SKILLS_DATA } from "../../data/skills/skills.data";
import ProgressBar from "../../components/skills/progressBar/progressBar";
import "./skillDetails.scss";

export default function SkillDetails() {
  const techSkills = createMemo(() =>
    SKILLS_DATA.filter((skill) => skill.type === "tech")
  );
  const nonTechSkills = createMemo(() =>
    SKILLS_DATA.filter((skill) => skill.type === "non-tech")
  );

  return (
    <>
      <h1>Compétences</h1>
      <section class="progress_bar_content">
        <div>
          <h2>Technique</h2>
          <For each={techSkills()}>
            {(skill) => <ProgressBar skill={skill} />}
          </For>
          <h2>Non technique</h2>
          <For each={nonTechSkills()}>
            {(skill) => <ProgressBar skill={skill} />}
          </For>
        </div>
      </section>
    </>
  );
}
