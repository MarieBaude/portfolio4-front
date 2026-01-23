import "./skills.scss";
import { createMemo, For } from "solid-js";
import { SKILLS_DATA } from "~/data/skills/skills.data";
import ProgressBar from "~/components/skills/progressBar/progressBar";

export default function Skills() {
  const techSkills = createMemo(() =>
    SKILLS_DATA.filter((skill) => skill.type === "tech")
  );
  const nonTechSkills = createMemo(() =>
    SKILLS_DATA.filter((skill) => skill.type === "non-tech")
  );
  
  return (
    <div class="skillsContent">
      <section class="skillsSection">
        <h2 class="sectionTitle">Compétences Techniques</h2>
        <div class="skillsGrid">
          <For each={techSkills()}>
            {(skill) => <ProgressBar skill={skill} />}
          </For>
        </div>
      </section>

      <section class="skillsSection">
        <h2 class="sectionTitle">Compétences Non Techniques</h2>
        <div class="skillsGrid">
          <For each={nonTechSkills()}>
            {(skill) => <ProgressBar skill={skill} />}
          </For>
        </div>
      </section>
    </div>
  );
}