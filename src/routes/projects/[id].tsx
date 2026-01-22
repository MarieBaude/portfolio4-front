import { Title } from "@solidjs/meta";
import { Navigate, useLocation, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import ErrorBoundary from "~/components/common/ErrorBoundary";
import Project from "~/components/projets/project";
import { PROJECTS_DATA } from "~/data/projets/projects.data";
import { createProjectRouteValidator } from "~/utils";

export default function ProjectCard() {
  const params = useParams();
  const project = () =>
    PROJECTS_DATA.find((project) => project.id === params.id);

  const isValidProject = createProjectRouteValidator();
  
  if (!isValidProject(params.id)) {
    return <Navigate href="/404" />;
  }

  return (
    <ErrorBoundary>
      <Title>{project()?.title + " - Portfolio"}</Title>

      <Show 
        when={project()} 
        fallback={<Navigate href="/404" />}
      >
        <Project />
      </Show>
    </ErrorBoundary>
  );
}

