import { Title } from "@solidjs/meta";
import { For, createSignal } from "solid-js";
import { A } from "@solidjs/router";

const posts = [
  { id: 1, title: "Premier article" },
  { id: 2, title: "Deuxième article" },
  { id: 3, title: "Troisième article" },
  { id: 4, title: "Quatrième article" },
  { id: 5, title: "Cinquième article" },
];

export default function Projects() {
  const [projectList] = createSignal(posts);

  return (
    <main>
      <Title>Projects</Title>
      <h1>Projects</h1>
      <For each={projectList()}>
        {(post) => (
          <div>
            <A href={`/projects/${post.id}`} state={{ project: post }}>{post.title}</A>
          </div>
        )}
      </For>
    </main>
  );
}
