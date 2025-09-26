import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function Katalon() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Katalon</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône Katalon */}
                    <img src="http://localhost:3000/public/images/skills/Katalon-logo-png.png" class="skillIcon" alt="Katalon" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>Katalon est un outil d'automatisation de tests pour applications. Il fournit une interface graphique avec de nombreuses fonctionnalités, mais permet aussi de coder directement des scénarios de test. Il est utilisé pour valider les évolutions et éviter les régressions avant une mise en production. L'automatisation des tests devient de plus en plus courante dans l'industrie pour accélérer les livraisons et réduire les risques d'erreurs.</p>
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
                        <p>J'ai travaillé pendant neuf mois spécifiquement sur la partie test automatisé. Je débutais complètement avec cet outil, n'ayant auparavant que quelques essais simples avec Playwright.</p>
                        <ul>
                            <li>Utilisation de l'interface d'enregistrement pour les parties simples des tests ;</li>
                            <li>Codage à la main des tests plus précis, nécessitant plus de logique ;</li>
                            <li>Organisation des fichiers objets, test cases, test suite.</li>
                        </ul>
                        <p>Ces scénarios de test ont permis de détecter plusieurs régressions avant la mise en production. Résultat : des livrables plus stables et une meilleure confiance côté client.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Mon expérience sur Katalon se limite à un seul projet mais il m'a permis d'explorer la majorité des situations classiques de tests. J'ai réussi à développer et exécuter des scénarios variés en autonomie, avec l'aide ponctuelle d'un développeur Q.A et le responsable du projet.
                        <br /><br />
                        J'ai encore une bonne marge de progression : je n'ai pas touché aux tests mobiles, aux API ni à l'intégration CI/CD avec Katalon. Certaines limites de l'outil (lenteur, instabilité) réduisent mon intérêt par rapport à des alternatives plus modernes comme Playwright.
                        <br /><br />
                        Dans mon profil, cette compétence reste secondaire, je suis plutôt orienté développement web. Elle m'apporte une compréhension du métier de QA, de l'importance des tests, des bonnes pratiques pour faciliter les tests en tant que dev.
                        <br /><br />
                        Ma montée en compétence s'est faite rapidement. Après un démarrage avec des tests simples, j'ai vite progressé vers du code manuel, plus flexible et contrôlable. Cette rapidité d'autonomie montre que l'outil peut être pris en main efficacement si on adopte une bonne organisation.
                        <br /><br />
                        Avec le recul, je recommande de :
                    </p>
                    <ul>
                        <li>organiser les objets dès le début,</li>
                        <li>construire un plan de tests clair et le suivre,</li>
                        <li>documenter systématiquement,</li>
                        <li>penser la réutilisation des test cases dans plusieurs suites,</li>
                        <li>prendre le temps de réfléchir avant de coder les scénarios.</li>
                    </ul>
                    <p>
                        Ces pratiques m'ont permis d'obtenir des tests plus lisibles, mieux maintenables, et plus facilement transmissibles à d'autres QA même un an après leur création.
                    </p>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je ne cherche pas à progresser spécifiquement avec Katalon, je n'apprécie pas l'outil en lui-même. En revanche, je souhaite approfondir l'automatisation de tests avec des frameworks plus récents comme Playwright ou Cypress. Mon objectif est d'avoir une bonne maîtrise de leur intégration dans des pipelines CI/CD et savoir tester des applications complexes. Ceci me permettra de valoriser mon expérience acquise avec Katalon tout en travaillant avec des outils plus modernes.
                </p>
            </div>
        </div>
    );
}