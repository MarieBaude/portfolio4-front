import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function Agilite() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Agilité</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône agilité */}
                    <img src="http://localhost:3000/public/images/skills/scrum.png" class="skillIcon" alt="Agilité" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>L'agilité regroupe un ensemble de pratiques permettant de gérer les projets collaboratifs. Dans mon cas, j'ai principalement travaillé avec la méthode Scrum et l'outil Jira. Scrum repose sur des rituels (daily, sprint planning, review, rétrospective) et sur une organisation du travail en tickets (user stories, epics, bugs) qui favorisent l'adaptation continue et les itérations. Ces méthodes sont devenues incontournables dans le développement logiciel, car elles permettent d'accélérer la livraison et l'implication des utilisateurs.</p>
                    </div>
                </div>

                {/* Preuves */}
                <h2>Mes éléments de preuve</h2>
                
                {/* Projet P1 - Wahis */}
                <A href="/projects/1" class="projectCardInSkill">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P1 - Wahis"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P1 - Wahis</h3>
                        <p>J'ai intégré une équipe en tant que Q.A déjà organisée sous Jira.</p>
                        <ul>
                            <li>Créer mes tickets de tests</li>
                            <li>Créer des tickets bug pour les développeurs</li>
                            <li>Réunion d'équipe et client</li>
                        </ul>
                        <p>La communication client et d'équipe s'est bien passée tout au long du projet.</p>
                    </div>
                </A>

                {/* Projet P3 - T-Source */}
                <A href="/projects/3" class="projectCardInSkill alternate">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P3 - T-Source"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P3 - T-Source</h3>
                        <p>Sur ce projet, l'organisation agile était pilotée par la cheffe de projet.</p>
                        <ul>
                            <li>Gestion des tickets</li>
                            <li>Daily</li>
                            <li>Démo client</li>
                        </ul>
                        <p>La gestion de projet n'a pas été correctement appliquée et nous avons rencontré des difficultés de communication avec le client, prouvant bien l'importance de l'agilité.</p>
                    </div>
                </A>

                {/* Projet P4 - Nowelia */}
                <A href="/projects/4" class="projectCardInSkill">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P4 - Nowelia"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P4 - Nowelia</h3>
                        <p>Dans ce projet, j'ai mis en place moi-même l'organisation Scrum avec un petit groupe.</p>
                        <ul>
                            <li>Définir les epics, user story</li>
                            <li>Créer et suivre les tickets</li>
                            <li>Animé les rituels (planning, daily, review et rétrospective)</li>
                        </ul>
                        <p>Cette expérience m'a permis de passer organisatrice et m'a assuré de la qualité du suivi de travail.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Mon intégration dans les équipes agiles s'est toujours faite sans difficulté. Je sais mettre en place et participer activement aux rituels scrum. L'outil Jira a été un peu difficile à appréhender, je l'ai trouvé peu intuitif et chargé d'options au départ, ce qui a freiné ma progression. Avec le temps, j'ai fini par m'en sortir. Ma marge de progression se situe dans l'amélioration de la qualité des tickets et l'animation des rituels. J'ai relevé que les rituels sont parfois mal appliqués notamment en terme de temps de réunion, cela ne remet pas en cause la méthode mais rappelle l'importance de bien l'appliquer.
                        <br /><br />
                        L'agilité occupe une place essentielle dans mon métier actuel : tous mes projets sont organisés avec, et cela influence directement ma productivité et la qualité du travail d'équipe.
                        <br /><br />
                        <strong>Recul et conseils :</strong>
                    </p>
                    <ul>
                        <li>Bien comprendre le rôle de chaque rituel et s'y tenir</li>
                        <li>Éviter les réunions trop longues ou sans objectif clair</li>
                        <li>Prendre en main l'outillage (tickets, backlog) pour mieux comprendre la dynamique d'équipe</li>
                        <li>Observer les points d'amélioration dans l'organisation sans remettre en cause la méthode elle-même</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    J'ai commencé avec de simples kanbans sur Trello, avant de travailler en Scrum complet avec Jira. Je souhaite continuer à renforcer mes compétences sur ces outils et à progresser sur l'animation de rituels, afin de fluidifier le travail d'équipe et être toujours plus efficace. Je ne vise pas une spécialisation en gestion de projet, mais je considère que l'agilité est une compétence transversale incontournable.
                </p>
            </div>
        </div>
    );
}