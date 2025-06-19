import { Title } from "@solidjs/meta";
import { useLocation, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import Project from "~/components/projets/project";
import { PROJECTS_DATA } from "~/data/projets/projects.data";

interface LocationState {
  project?: { id: number; title: string };
}

export default function ProjectCard() {
  // const location = useLocation<LocationState>();
  // const project = location.state?.project;

  const params = useParams();
  const project = () =>
    PROJECTS_DATA.find((project) => project.id === Number(params.id));

  return (
    <>
      <Title>Project Details</Title>
      {project() ? <Project /> : <p>Projet non trouvée</p>}
    </>
  );
}
