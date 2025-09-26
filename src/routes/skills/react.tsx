import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function React() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>React</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône React */}
                    <img src="http://localhost:3000/public/images/skills/React.png" class="skillIcon" alt="React" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>React est une bibliothèque JavaScript qui permet de créer des interfaces utilisateurs dynamiques. C'est un framework largement adopté par les développeurs.</p>
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
                        <p>J'ai travaillé plusieurs mois sur la solution front du projet Nowelia, réalisée avec NextJS. L'équipe était compétente sur React mais le projet nécessitait du SSG.</p>
                        <ul>
                            <li>Intégration responsive des pages avec Tailwind CSS</li>
                            <li>Gestion dynamique du contenu (SSR, SSG) et des états via hooks React</li>
                            <li>Formulaire de création d'histoire et chapitre avec upload d'image et tags multiples</li>
                        </ul>
                        <p>L'interface permet d'utiliser toutes les fonctionnalités développées côté back-end. L'association React/Next.js/Tailwind CSS a permis de créer rapidement un MVP à la fois fonctionnel et ergonomique.</p>
                    </div>
                </A>

                {/* Projet Pinterest clone */}
                <div class="projectCardInSkill alternate">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="Pinterest clone"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>Pinterest clone</h3>
                        <p>J'ai passé quelques jours à suivre un tutoriel YouTube en pair programming afin de réaliser un clone de Pinterest comme sujet de découverte de React.</p>
                        <ul>
                            <li>Système d'enregistrement et connexion via Google</li>
                            <li>Gestion de profil</li>
                            <li>Ajout d'image avec tag</li>
                            <li>Mur d'image interactif et responsive</li>
                        </ul>
                        <p>L'application reprend les principales fonctionnalités de Pinterest et a été déployée avec succès.</p>
                    </div>
                </div>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Je suis à l'aise avec les composants fonctionnels, les hooks, la gestion des formulaires et le routing. J'ai également travaillé sur des projets utilisant Next.js pour le rendu statique (SSG) et réalisé des tests unitaires, ce qui m'a permis de produire du code fiable et modulable.
                        <br /><br />
                        Ma marge de progression se situe surtout sur Redux et ses usages avancés, que j'ai explorés mais peu exploités, et sur certaines optimisations de performance ou aspects plus complexes comme le SSR approfondi.
                        <br /><br />
                        React occupe aujourd'hui une place secondaire dans mon profil front-end. Je l'ai progressivement délaissé au profit d'Angular, qui est devenu mon framework principal, mais je reste capable de reprendre des projets existants et d'y apporter des évolutions efficaces.
                        <br /><br />
                        Mon apprentissage a été progressif. React a constitué mon premier vrai framework après des langages JavaScript/TypeScript purs. Les débuts ont été complexes, en particulier sur des bases lourdes, mais la pratique et l'expérience m'ont permis de comprendre la philosophie des frameworks front-end et d'appliquer les bonnes pratiques.
                        <br /><br />
                        Avec le recul, je conseille :
                    </p>
                    <ul>
                        <li>une bonne connaissance de JavaScript ou TypeScript avant de se lancer ;</li>
                        <li>comprendre ce qu'est un framework et comment il structure un projet ;</li>
                        <li>se concentrer sur les hooks et le JSX avant d'aborder Redux ou d'autres outils avancés ;</li>
                        <li>progresser par étapes, en consolidant les bases avant de complexifier.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je souhaite reprendre ma montée en compétence avec React et Next.js. J'aimerais apprendre à utiliser des concepts plus complexes, être à l'aise avec Redux, pousser encore plus le SSR/SSG pour optimiser le SEO et les performances. Si en entreprise je fais surtout de l'Angular, j'aimerais me former sur React en parallèle afin de renforcer ma polyvalence et être opérationnelle dans les deux écosystèmes front-end les plus utilisés.
                </p>
            </div>
        </div>
    );
}