import { Title } from "@solidjs/meta";
import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";

const skills = [
  { id: 1, title: "Premier compétence" },
  { id: 2, title: "Deuxième compétence" },
  { id: 3, title: "Troisième compétence" },
  { id: 4, title: "Quatrième compétence" },
  { id: 5, title: "Cinquième compétence" },
];

export default function Skills() {
  const [skillsList] = createSignal(skills);

  return (
    <main>
      <Title>Skills</Title>
      <h1>Skills</h1>
      <For each={skillsList()}>
        {(skill) => (
          <div>
            <A href={`/skills/${skill.id}`} state={{ skill: skill }}>{skill.title}</A>
          </div>
        )}
      </For>
    </main>
  );
}
