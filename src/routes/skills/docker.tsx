import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function Docker() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Docker</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône Docker */}
                    <img src="http://localhost:3000/public/images/skills/docker.png" class="skillIcon" alt="Docker" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>Docker est un outil de conteneurisation qui permet de réunir une application et tout ce dont elle a besoin pour fonctionner dans un environnement isolé, portable et facilement transmissible.</p>
                    </div>
                </div>

                {/* Preuves */}
                <h2>Mes éléments de preuve</h2>
                
                {/* Projet P2 - MPMT */}
                <A href="/projects/2" class="projectCardInSkill">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P2 - MPMT"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P2 - MPMT</h3>
                        <p>Pour ce projet, j'ai utilisé Docker pour le déploiement du front-end et du back-end.</p>
                        <ul>
                            <li>Dockerisation du frontend et backend</li>
                            <li>Publication des images sur Docker Hub</li>
                            <li>Pipeline CI/CD (GitHub Actions) automatisant le build, les tests et le déploiement</li>
                        </ul>
                        <p>Les images générées étaient récupérables par d'autres développeurs sans problème.</p>
                    </div>
                </A>

                {/* Projet P4 - Nowelia */}
                <A href="/projects/4" class="projectCardInSkill alternate">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P4 - Nowelia"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P4 - Nowelia</h3>
                        <p>Sur ce projet, Docker a été intégré dès le départ pour assurer un déploiement fiable et automatisé.</p>
                        <ul>
                            <li>Déploiement de la base de données PostgreSQL dans un conteneur Docker.</li>
                            <li>Hébergement sur un VPS OVH avec Docker.</li>
                        </ul>
                        <p>Ca a permis d'avoir une application qui se déployait automatiquement en ligne juste avec un push dans une branche git. Une fois correctement mis en place, on pouvait développer et tester sans avoir à revenir sur la partie devops.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    Je maîtrise les bases nécessaires : création d'images, mise en place d'une CI/CD avec mise à jour automatique à chaque push sur la branche principale, utilisation de conteneurs. J'ai aussi déjà travaillé avec un fichier <em>docker-compose</em> simple.
                    <br /><br />
                    Ma marge de progression est large : je n'ai pas encore exploré les usages avancés comme l'orchestration, la sécurité, l'optimisation des images ou le monitoring. Je reste donc au stade débutant.
                    <br /><br />
                    Docker occupe une place très secondaire dans mon profil. Ce n'est pas une compétence que je développe en priorité, car je ne vise pas une spécialisation DevOps.
                    <br /><br />
                    Mon apprentissage a été progressif, parfois avec des retours en arrière pour assimiler les bases. La pratique régulière, même sur des cas simples, a été essentielle pour progresser.
                    <br /><br />
                    <strong>Recul et conseils</strong>
                    <ul>
                        <li>Consolider les bases avant de viser des usages complexes.</li>
                        <li>Répéter les manipulations simples pour bien les ancrer.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je reste encore débutante dans le domaine du DevOps, mais Docker m'a permis d'en comprendre les bases essentielles : conteneurisation, automatisation et déploiement continu. J'aimerais continuer à monter en compétence, notamment sur des pipelines plus complexes, la sécurité, Kubernetes... Je ne souhaite pas me spécialiser en DevOps, mais développer ces connaissances me semble indispensable pour être autonome en développement.
                </p>
            </div>
        </div>
    );
}