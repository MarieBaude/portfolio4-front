import { Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { Show } from "solid-js";

interface LocationState {
skill?: { id: number; title: string };
}

export default function Project() {
  const location = useLocation<LocationState>();
  const skill = location.state?.skill;

  return (
    <main>
      <Title>Skill Details</Title>
      <h1>Skill Details</h1>
      <Show when={skill} fallback={<p>Skill not found</p>}>
        <div>
          <p>ID: {skill!.id}</p>
        </div>
      </Show>
    </main>
  );
}
