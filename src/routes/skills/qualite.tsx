import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function QualiteCode() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Qualité du code</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône qualité du code */}
                    <img src="http://localhost:3000/public/images/skills/quality.png" class="skillIcon" alt="Qualité du code" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>La qualité du code repose sur de la rigueur : tests, documentation, lisibilité pour l'équipe. Un code de qualité est fiable, compréhensible et maintenable.</p>
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
                        <p>J'ai repris un projet avec des tests non documentés, ce qui me ralentissait lorsque je devais intervenir sur les anciens tests.</p>
                        <ul>
                            <li>Élaboration d'un plan de test précis</li>
                            <li>Demande de conseils au Q.A plus expérimenté</li>
                            <li>Documentation des tests</li>
                            <li>Relecture et amélioration du code pour le rendre plus lisible et robuste</li>
                        </ul>
                        <p>J'ai décidé de documenter correctement tous les tests et de travailler à leur robustesse. Le QA qui a repris le projet n'a quasiment plus à intervenir sur le code des tests.</p>
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
                        <p>Nous avons décidé de mettre en place de bonnes pratiques dès le début du projet.</p>
                        <ul>
                            <li>Mise en place de tests complets couvrant toute la pyramide</li>
                            <li>Documentation précise des fonctionnalités</li>
                            <li>Veille et recherche de bonnes pratiques pour améliorer les standards</li>
                            <li>Amélioration continue des processus et du code</li>
                        </ul>
                        <p>Les tests ont permis de prévenir les régressions et la documentation a facilité l'intégration de nouveaux développeurs.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        La qualité est pour moi un aspect central du développement. J'ai travaillé sur des projets intégrant SonarQube, et toutes mes pull requests passent en revue par le lead développeur, ce qui favorise l'apprentissage et la rigueur. J'applique systématiquement des pratiques comme les tests (unitaires et manuels), la relecture de code, la documentation et le commentaire pertinent. J'effectue aussi une veille régulière pour rester à jour sur les bonnes pratiques. Je sais que je dois progresser dans l'application concrète de certains design patterns que je ne maîtrise encore qu'en théorie. La qualité est indispensable à plusieurs niveaux : maintenir la lisibilité et l'évolutivité du code, faciliter le travail d'équipe et garantir la fiabilité des applications livrées.
                        <br /><br />
                        <strong>Recul et conseils :</strong>
                    </p>
                    <ul>
                        <li>Ne pas négliger la documentation, même minimale</li>
                        <li>Toujours combiner tests automatiques et tests manuels</li>
                        <li>Demander des relectures systématiques pour progresser et améliorer le code</li>
                        <li>Introduire progressivement des patterns et standards reconnus pour structurer le développement</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je souhaite renforcer mes bonnes pratiques de développement, notamment les design patterns et l'architecture logicielle pour améliorer la réutilisabilité et la maintenabilité du code. Je veux continuer à documenter pour rendre mes projets plus accessibles et faciliter la collaboration.
                </p>
            </div>
        </div>
    );
}