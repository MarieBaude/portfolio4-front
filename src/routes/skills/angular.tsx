import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function Angular() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Angular</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône Angular */}
                    <img src="http://localhost:3000/public/images/skills/Angular_full_color_logo.svg.png" class="skillIcon" alt="Angular" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>Angular est un framework front-end utilisé pour créer des interfaces web. Il permet de structurer le code en composants réutilisables. C'est une solution très populaire et robuste surtout en entreprise.</p>
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
                        <p>Projet de validation du bloc de développement de ma formation, j'y ai passé plusieurs mois, travaillant le week-end dessus.</p>
                        <br />
                        <ul>
                            <li> - Développement de tableaux de bord et de gestion des tâches, avec affichage par statut et notifications.</li>
                            <li> - Création de composants réutilisables et modales interactives pour la création et l'édition des tâches.</li>
                            <li> - Tests unitaires, intégration CI/CD et Dockerisation.</li>
                        </ul>
                        <br />
                        <p>M'a permis de découvrir Angular sur un petit projet, seule, tranquillement afin de prendre mes marques sur ce framework.</p>
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
                        <p>J'ai travaillé plus de six mois sur ce projet, c'était mon premier gros projet Angular et surtout en entreprise avec rendu client.</p>
                        <br />
                        <ul>
                            <li> - Développement de tableaux interactifs, tri et filtres avancés.</li>
                            <li> - Modales sécurisées avec verrouillage, pré-remplissage, duplication et historisation des actions.</li>
                            <li> - Gestion de la performance.</li>
                        </ul>
                        <br />
                        <p>Le front-end de l'application couvre les attentes clients, il y a une vrai plus value, surtout en terme d'ergonomie par rapport à leur solutions précédente : excel.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    Mon niveau sur Angular est solide sur les bases : création de composants, gestion des modules, services et routing. J'ai travaillé à la fois sur la version 15 et la 19, ce qui m'a permis d'appréhender deux approches assez différentes. Aujourd'hui, je ne me contente plus de construire des composants correspondant aux pages mais je commence à concevoir des composants comme de vraies fonctionnalités réutilisables, ce qui limite les répétitions et améliore la structure du projet.
                    <br /><br />
                    Ma marge de progression reste importante sur certains points plus avancés. Par exemple, je n'ai pas encore exploré en profondeur la gestion d'état avec RxJS ou NgRx, ni les optimisations de performance complexes, mais j'ai déjà mis en place les tests unitaires.
                    <br /><br />
                    Angular occupe une place centrale dans mon profil : c'est mon framework front principal et celui dans lequel je me sens le plus à l'aise. J'apprécie particulièrement la manière dont il impose une structure claire, avec une séparation nette des technologies entre fichiers et dossiers.
                    <br /><br />
                    Ma montée en compétence a été facilitée par mon expérience préalable en TypeScript et React. Après une première impression de complexité, j'ai rapidement compris qu'avoir beaucoup de fichiers légers (HTML, CSS, TS, test) est une force. Cette organisation me convient et renforce la lisibilité du code.
                    <br /><br />
                    Avec le recul, je conseillerais : 
                    <ul>
                        <li> - de bien séparer et nommer les composants dès le départ.</li>
                        <li> - de faire de la réutilisation si à l'aise sinon une fois que la logique de base est maîtrisée.</li>
                        <li> - de bien s'organiser ca simplifie énormément la maintenance et permet ensuite de faire évoluer les projets plus rapidement.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je souhaite continuer à approfondir mes compétences Angular en travaillant sur des projets front-end complexes. Mon objectif est d'améliorer la performance, la maintenabilité et la qualité des interfaces, ainsi que de perfectionner mes tests unitaires. Je compte également explorer davantage les outils de debugging et d'optimisation pour créer des applications plus rapides et robustes. Je ne prévois pas de formation pour le moment, étant donner qu'Angular est souvent utiliser en entreprise, je me forme directement sur le tas.
                </p>
            </div>
        </div>
    );
}