import { Title } from "@solidjs/meta";
import AboutComponent from '../components/about/About';
import Timeline from "~/components/experience/Timeline";
import { TIMELINE_DATA } from "~/data/experience/experience.data";

export default function About() {
  return (
    <div>
      <Title>A propos - Portfolio</Title>
      <AboutComponent />
      <Timeline items={TIMELINE_DATA} />
    </div>
  );
}
