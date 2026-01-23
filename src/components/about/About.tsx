import { HOBBIT } from "~/data/about/about.data";
import "./About.scss";

export default function AboutComponent() {
  return (
    <>
      <section class="presentation">
        <div class="mainText">
          <h3 class="mainSectionTitle">Présentation</h3>
          <p>
            En alternance chez Kapela en tant que développeuse full-stack, en
            master d'expert en ingénierie logicielle. Mon parcours professionnel
            a débuté en tant qu'infographiste avant une réorientation vers le
            développement web. Après une première formation puis un bachelor en
            conception développeur d'applications (CDA), j'ai intégré un mastère
            en alternance pour approfondir mes compétences techniques et monter
            en autonomie.
          </p>
        </div>
        <div>
          <img src="\images\photo_Marie_Baude.jpg" alt="" class="photo" />
        </div>
      </section>

      <section class="values-section">
        <h3 class="mainSectionTitle">Mes valeurs</h3>
        <div class="values-grid">
          <div class="value-card">
            <h4>Intégrité</h4>
            <p>
              Je communique de façon transparente, aussi bien sur les réussites
              que sur les difficultés rencontrées. Derrière chaque ligne de
              code, il y a des professionnels qui ont besoin d'outils efficaces
              pour travailler sereinement.
            </p>
          </div>
          <div class="value-card">
            <h4>Ouverture d'esprit</h4>
            <p>
              Je fais des choix pragmatiques de technologies, adaptées au
              contexte, sans attachement aux modes ni aux écosystèmes dominants.
            </p>
          </div>
          <div class="value-card">
            <h4>Humilité</h4>
            <p>
              Je ne mets pas d'ego dans mon code, j'accueille les retours comme
              des possibilités d'amélioration, je reconnais mes erreurs et je
              demande de l'aide lorsque cela s'impose.
            </p>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h3 class="mainSectionTitle">Mon projet professionnel</h3>
        <p class="intro-text">
          Ce qui me plaît profondément dans le métier de développeur, c'est la
          satisfaction de faire fonctionner des systèmes, de voir une
          architecture bien organisée prendre forme.
        </p>

        <div class="project-cards">
          <div class="project-card">
            <h4>À court terme</h4>
            <ul>
              <li>
                Trouver le bon équilibre entre autonomie et communication avec
                les équipes
              </li>
              <li>Développer mes compétences en gestion de projet Agile</li>
              <li>Renforcer mes compétences en tests automatisés</li>
              <li>
                Pratiquer le DevOps et l'automatisation (CI/CD,
                conteneurisation)
              </li>
            </ul>
          </div>

          <div class="project-card">
            <h4>À moyen terme</h4>
            <ul>
              <li>
                Me spécialiser progressivement, tout en restant attentive aux
                évolutions du métier
              </li>
              <li>
                Poursuivre ma montée en compétences au sein d'une entreprise
              </li>
              <li>M'essayer au TDD</li>
              <li>
                Approfondir les design patterns et l'architecture logicielle
              </li>
            </ul>
          </div>

          <div class="project-card">
            <h4>À long terme</h4>
            <ul>
              <li>
                Envisager une activité indépendante sur des projets de petite et
                moyenne envergure
              </li>
              <li>
                Conserver un rôle technique centré sur la conception et le
                développement
              </li>
              <li>
                Rester ouverte aux opportunités, en privilégiant les défis
                techniques et la qualité de la collaboration
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="qualities-section">
        <h3 class="mainSectionTitle">Mes qualités humaines</h3>
        <div class="qualities-grid">
          <div class="quality-card">
            <h4>Curiosité</h4>
            <p>
              J'explore régulièrement de nouvelles technologies et ma curiosité
              me pousse à m'intéresser à plusieurs facettes du métier :
              développement fullstack, QA, architecture logicielle, DevOps,
              Scrum Master.
            </p>
          </div>
          <div class="quality-card">
            <h4>Polyvalence</h4>
            <p>
              Mon parcours m'a amenée à toucher à différents domaines. Une année
              en QA, du frontend (Angular, React) et backend (Spring Boot,
              NestJS, PHP). Je sais comprendre les enjeux de chaque métier.
            </p>
          </div>
          <div class="quality-card">
            <h4>Rigueur</h4>
            <p>
              Je teste toujours manuellement mes développements, j'implémente
              des tests unitaires et end-to-end. J'organise mon code pour qu'il
              soit lisible et je documente systématiquement.
            </p>
          </div>
          <div class="quality-card">
            <h4>Persévérance</h4>
            <p>
              Lorsque je rencontre un blocage, je prends une pause, j'essaie une
              autre approche, et si nécessaire, je n'hésite pas à solliciter de l'aide. Je
              n'ai jamais abandonné un projet.
            </p>
          </div>
        </div>
      </section>

      <section class="hobbies-section">
        <h3 class="mainSectionTitle">Mes centres d'intérêt</h3>

        <div class="hobbies-container">
          {HOBBIT.map((item) => (
            <div class="hobby-card">
              <h4>{item.title}</h4>
              {item.subTitle && <p class="hobby-subtitle">{item.subTitle}</p>}
            </div>
          ))}
        </div>
      </section>

      <h3 class="mainSectionTitle">Mon parcours</h3>
    </>
  );
}
