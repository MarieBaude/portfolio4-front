import { Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { Show } from "solid-js";

interface LocationState {
  project?: { id: number; title: string };
}

export default function Project() {
  const location = useLocation<LocationState>();
  const project = location.state?.project;

  return (
    <main>
      <Title>Project Details</Title>
      <h1>Project Details</h1>
      <Show when={project} fallback={<p>Project not found</p>}>
        <div>
          <p>ID: {project!.id}</p>
        </div>
      </Show>
    </main>
  );
}
