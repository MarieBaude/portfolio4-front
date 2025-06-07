import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import Skill from "~/components/skills/skill/skill";

import { SKILLS_DATA } from "~/data/skills/skills.data";

export default function SkillCard() {
  const params = useParams();
  const skill = () =>
    SKILLS_DATA.find((skill) => skill.id === Number(params.id));

  return (
    <main>
      <Title>{skill()?.title}</Title>

      {skill() ? <Skill /> : <p>Compétence non trouvée</p>}
    </main>
  );
}
