import { Title } from "@solidjs/meta";
import { useParams, Navigate } from "@solidjs/router";
import { Show } from "solid-js";
import Skill from "~/components/skills/skill/skill";
import ErrorBoundary from "~/components/common/ErrorBoundary";
import { createSkillRouteValidator } from "~/utils/navigationErrorHandler";

import { SKILLS_DATA } from "~/data/skills/skills.data";

export default function SkillCard() {
  const params = useParams();
  const skill = () =>
    SKILLS_DATA.find((skill) => skill.id === params.id);

  const isValidSkill = createSkillRouteValidator();
  
  if (!isValidSkill(params.id)) {
    return <Navigate href="/404" />;
  }

  return (
    <ErrorBoundary>
      <Title>{skill()?.title + " - Portfolio"}</Title>

      <Show 
        when={skill()} 
        fallback={<Navigate href="/404" />}
      >
        <Skill />
      </Show>
    </ErrorBoundary>
  );
}
