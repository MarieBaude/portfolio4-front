import { Title } from "@solidjs/meta";
import Timeline from "~/components/experience/Timeline";
import { TIMELINE_DATA } from "~/data/experience/experience.data";

export default function Experience() {
  return (
    <main>
      <Title>Parcours</Title>
      {/* <h1>Parcours</h1> */}

      <Timeline items={TIMELINE_DATA} />
    </main>
  );
}
