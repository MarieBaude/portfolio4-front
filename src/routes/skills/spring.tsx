import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function SpringBoot() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Spring Boot</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône Spring Boot */}
                    <img src="http://localhost:3000/public/images/skills/Spring_Boot.svg.png" class="skillIcon" alt="Spring Boot" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>Spring Boot est un framework Java back-end permettant de créer des API REST robustes et des services sécurisés.</p>
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
                        <ul>
                            <li>Gestion des projets, tâches et rôles via API REST sécurisées.</li>
                            <li>Mise en place de tests unitaires backend avec JUnit et intégration dans un pipeline CI/CD.</li>
                            <li>Industrialisation complète : Dockerisation, automatisation des builds et déploiement.</li>
                        </ul>
                        <p>Ma première API Rest en Java avec Spring Boot réalisée seule, j'ai pu découvrir le framework sans pression.</p>
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
                        <p>J'ai travaillé plus de six mois sur ce projet, c'était mon premier gros projet Spring et surtout en entreprise avec rendu client.</p>
                        <ul>
                            <li>Gestion des rôles sécurisés.</li>
                            <li>Historisation complète des modifications et contrôle d'accès aux données.</li>
                            <li>Gestion d'imports importants et optimisation back-end pour assurer performance et fiabilité.</li>
                        </ul>
                        <p>L'API Spring Boot assure des échanges de données rapides et fiables.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Je me débrouille avec les bases de Spring Boot. Je travaille avec l'ORM intégré pour la gestion des données et je veille à bien séparer les couches : logique métier dans les services, contrôleurs clairs, repositories pour l'accès aux données, et DTO/mappers lorsque c'est nécessaire. J'ai également mis en place des traitements batch pour optimiser des imports volumineux. Les tests unitaires et d'intégration ont été une étape importante, avec une couverture conséquente qui m'a permis d'améliorer la fiabilité du code.
                        <br /><br />
                        Ma marge de progression se situe surtout au niveau de la sécurité. Pour l'instant, mes pratiques restent limitées à des configurations simples, et je n'ai pas encore approfondi les aspects plus avancés comme l'authentification complexe ou la gestion fine des rôles.
                        <br /><br />
                        Spring Boot est aujourd'hui mon framework backend principal. Sa place est importante dans mon profil, d'autant qu'il m'a permis de passer d'un univers Node.js à un environnement Java plus structuré. L'adaptation a demandé un effort, notamment face au caractère verbeux du langage, mais l'architecture claire et la maturité de l'écosystème ont facilité la transition.
                        <br /><br />
                        Avec le recul, je formule ces conseils :
                    </p>
                    <ul>
                        <li>avoir déjà une base en Java avant d'attaquer Spring Boot ;</li>
                        <li>pour un débutant complet, commencer par un framework plus simple peut être plus progressif ;</li>
                        <li>bien nommer fonctions, variables et fichiers, car le langage Java est verbeux et ça impose une certaine rigueur.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    Je souhaite approfondir ma maîtrise de Spring Boot, notamment en explorant les architectures microservices et en renforçant mes compétences sur la sécurité, la scalabilité et la performance. Je prévois de travailler sur des projets plus volumineux et complexes afin de consolider mes pratiques CI/CD et de mieux gérer les interactions entre services backend et frontend. Je consolide mes compétences en entreprise, Spring Boot y étant très utilisé.
                </p>
            </div>
        </div>
    );
}