import "./advantages.scss";

export default function Advantages() {
  const skills = [
    { label: "Autonomie", weight: 10, href: "/skills/autonomie" },
    { label: "Katalon", weight: 9, href: "/skills/katalon" },
    { label: "Agile", weight: 8, href: "/skills/agile" },
    { label: "Spring Boot", weight: 7, href: "/skills/spring" },
    { label: "Angular", weight: 6, href: "/skills/angular" },
    { label: "React", weight: 5, href: "/skills/react" },
    { label: "NestJS", weight: 4, href: "/skills/nestJS" },
    { label: "Relationnelle", weight: 3, href: "/skills/client" },
    { label: "Qualité", weight: 2, href: "/skills/qualite" },
    { label: "Docker", weight: 1, href: "/skills/docker" },
  ];

  return (
    <>
      <h2 class="sectionTitle">Mes compétences clés</h2>
      <section class="skillsCloudSection">
        <div class="cloud-container">
          <ul class="cloud" role="list" aria-label="Nuage de compétences">
            {skills.map((skill) => (
              <li>
                <a href={skill.href} data-weight={skill.weight}>
                  <span>{skill.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
