import { HOBBIT } from "~/data/about/about.data";
import "./About.scss";

export default function AboutComponent() {
  return (
    <>
      <section class="presentation">
        <div class="mainText">
          <h2>Présentation</h2>
          <hr />
          <p>
            En alternance chez Kapela en tant que développeuse full-stack, en
            master d’expert en ingénierie logicielle.
            <br />
            <br />
            Mon parcours a débuté en tant qu'infographiste avant une
            réorientation vers le développement web. Après une première
            formation puis un bachelor en conception développeur d'applications
            (CDA), j’ai intégré un master en alternance pour approfondir mes
            compétences.
          </p>
        </div>
      </section>

      <section>
        <h3>Mes valeurs</h3>
        <p class="para">
          <b>L’intégrité</b> occupe une place importante à mes yeux : je
          communique de façon transparente, aussi bien sur les réussites que sur
          les difficultés rencontrées.
          <br />
          <br />
          <b>Mon ouverture d’esprit</b> se traduit par un choix pragmatique des
          technologies, adaptées au contexte, sans attachement aux modes ni aux
          écosystèmes dominants.
          <br />
          <br />
          <b>L’humilité</b> fait partie de ma façon de travailler : je ne mets
          pas d’ego dans mon code, j’accueille les retours comme des
          possibilités d’amélioration, je reconnais mes erreurs et je demande de
          l’aide lorsque cela s’impose.
        </p>

        <h3>Mon projet professionnel</h3>
        <p class="para">
          Au cours de ces dernières années, j'ai expérimenté différents domaines
          : frontend, backend, test auto. Cela m'a permis de bâtir de solides
          bases afin de comprendre les enjeux de chaque domaine, même si je suis
          convaincue que l'on est plus efficace quand on se spécialise.
          <br />
          <br />À <b>court</b> terme, je poursuis ma montée en compétences au
          sein d'une entreprise afin de consolider mes capacités techniques. À{" "}
          <b>moyen</b> terme, j’envisage de m’investir pleinement dans une
          spécialisation, tout en restant ouverte aux évolutions technologiques.
          À <b>long</b> terme, j'envisage une activité indépendante, qui me
          permettrait de conserver un rôle technique centré sur la conception et
          le développement.
          <br />
          Je suis satisfaite de ma reconversion et déterminée à continuer dans
          ce milieu professionnel.
        </p>

        <h3>Mes qualités humaines</h3>
        <p class="para">
          Mes collègues me décrivent souvent comme une personne rigoureuse, je
          fais attention à la qualité du code livré, au bon fonctionnement
          métier, à une bonne gestion de projet, etc. J'aime obtenir le meilleur
          résultat possible.
          <br />
          <br />
          Méticuleuse, j'accorde une importance aux détails, à la clarté du
          code, à des architectures propres, à la documentation pour le confort
          de toute l'équipe.
          <br />
          <br />
          Ma polyvalence me permet de m'adapter à différents rôles selon les
          besoins : concevoir des architectures, développer en frontend ou
          backend, ou encore mettre en place des tests automatisés.
        </p>
      </section>

      <section>
        <h2>Mes centres d'intérêt</h2>

        <div class="hobby">
          {HOBBIT.map((item) => (
            <div class="oneHobby">
                <span class="oneHobbyTitle">
                    <item.icon />
                    <h3>{item.title}</h3>
                </span>
                {item.subTitle && <span>{item.subTitle}</span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
