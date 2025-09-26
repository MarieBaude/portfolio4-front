import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function NestJS() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>NestJS</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône NestJS */}
                    <img src="http://localhost:3000/public/images/skills/Nest.js.png" class="skillIcon" alt="NestJS" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>NestJS est un framework NodeJs orienté vers l'architecture modulaire et fortement inspiré d'Angular. Il facilite la création d'API REST ou GraphQL robustes, maintenables et testables. Sa popularité en entreprise progresse grâce à sa structure claire et son intégration avec TypeScript.</p>
                    </div>
                </div>

                {/* Preuves */}
                <h2>Mes éléments de preuve</h2>
                
                {/* Projet P4 - Nowelia */}
                <A href="/projects/4" class="projectCardInSkill">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P4 - Nowelia"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P4 - Nowelia</h3>
                        <p>J'ai travaillé plusieurs mois sur l'API REST du projet Nowelia. Nous devions travailler sur un framework back end NodeJS et notre choix s'est porté sur NestJS.</p>
                        <ul>
                            <li>Implémentation des CRUD principaux</li>
                            <li>Recherche avancée avec filtres multiples (tags, auteurs, type…)</li>
                            <li>Tests unitaires et d'intégration</li>
                        </ul>
                        <p>Le back-end est fonctionnel, documenté et testé, permettant une utilisation fluide par le front.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Mon niveau est correct sur les bases : j'ai mis en place des CRUD, géré le découpage en couches, utilisé Prisma comme ORM, rédigé des tests unitaires et d'intégration, intégré Swagger pour la documentation et développé à la fois une API Rest et un back avec templating. Cette pratique me rend autonome sur les cas courants.
                        <br /><br />
                        Ma marge de progression reste importante sur les usages avancés comme GraphQL, les websockets, la sécurité ou encore les microservices. Ces manques limitent la polyvalence de ma compétence.
                        <br /><br />
                        NestJS occupe une place secondaire dans mon profil. Je l'apprécie, mais je privilégie Spring Boot comme framework back principal. J'ai aussi quelques réserves sur les performances de Node.js en production, ce qui diminue son rôle stratégique dans mon parcours.
                        <br /><br />
                        La montée en compétence a été rapide et agréable, facilitée par mon expérience préalable en TypeScript et par l'accompagnement d'une autre personne. L'architecture inspirée d'Angular a aussi favorisé l'adoption.
                        <br /><br />
                        <strong>Recul et conseils</strong>
                    </p>
                    <ul>
                        <li>Un minimum d'expérience en TypeScript est nécessaire pour être efficace.</li>
                        <li>L'approche est idéale pour ceux qui apprécient Angular, l'architecture est proche.</li>
                        <li>Peut convenir comme premier framework back si l'on veut démarrer rapidement.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    J'ai beaucoup aimé travailler avec NestJS, son architecture est agréable et Typescript est peu verbeux comparé à du Java. Mais je suis un peu déçu des performances du NodeJs en général, j'aimerais retester un projet en NestJs afin de voir comment améliorer les performances, l'utilisation de WebSockets ou encore tester le microservices avec Kafka ou RabbitMQ. Ce n'est cependant pas une priorité dans ma montée en compétence.
                </p>
            </div>
        </div>
    );
}