import { useParams } from "@solidjs/router";
import "./skill.scss";
import { SKILLS_DATA } from "~/data/skills/skills.data";

export default function Skill() {
  const params = useParams();
  const skill = () =>
    SKILLS_DATA.find((skill) => skill.id === Number(params.id));

  return (
    <div class="main">
      <div class="container">
        {/* <h1>{skill()?.title}</h1> */}

        {/* Définition */}
        <div class="def_section">
          <img src={skill()?.icon} alt={skill()?.title} />
          <div class="def_text">
            <h2>Ma définition</h2>
            <p>{skill()?.def}</p>
          </div>
        </div>

        {/* Preuves */}
        <h2>Mes éléments de preuve</h2>

        {/* Auto critique */}
        <h2>Mon autocritique</h2>
        <p>{skill()?.crit}</p>

        {/* Evolution */}
        <h2>Mon évolution dans cette compétence</h2>
        <p>{skill()?.evol}</p>
      </div>
    </div>
  );
}
