import { Skill } from "./skills.types";
import { ASSET_PATHS } from "~/config/assets";

export const SKILLS_DATA: Skill[] = [
  {
    id: "angular",
    title: "Angular",
    type: "tech",
    icon: ASSET_PATHS.skills.angular,
    level: 60,
    color: "#C3002F",
    def: "Angular est un framework TypeScript développé pour créer des applications web robustes et structurées. Il permet de construire des interfaces avec une séparation claire entre HTML, CSS et TypeScript. Sa structure modulaire en fait une solution particulièrement appréciée en entreprise.",
    proofs: [
      {
        projectId: 1,
        title: "MPMT - Découverte d'Angular sur projet académique",
        description:
          "Projet de validation du bloc de développement de ma formation, j'y ai passé plusieurs mois, travaillant le week-end dessus. MPMT est une application qui centralise la gestion des utilisateurs, des projets et des tâches, avec un système de rôles et de permissions.",
        achievements: [
          "Développement de tableaux de bord et de gestion des tâches, avec affichage par statut et notifications",
          "Création de composants réutilisables et modales interactives pour la création et l'édition des tâches",
          "Tests unitaires, intégration CI/CD et Dockerisation",
        ],
        conclusion:
          "Ce projet m'a permis de découvrir Angular seule, tranquillement afin de prendre mes marques sur ce framework.",
        link: '/projects/mpmt'
      },
      {
        projectId: 2,
        title: "T-Source - Premier gros projet Angular en entreprise",
        description:
          "J'ai travaillé six mois sur ce projet, c'était mon premier gros projet Angular et surtout en entreprise avec rendu client. T-Source est une application qui centralise la traçabilité des matières premières via des tableaux interactifs et d’autres fonctionnalités développées sur mesure.",
        achievements: [
          "Développement de tableaux interactifs, tri et filtres avancés",
          "Modales sécurisées avec verrouillage, pré-remplissage, duplication et historisation des actions",
          "Optimisation des performances pour gérer des imports de milliers de lignes de données",
        ],
        conclusion:
          "Le front-end de l'application couvre les attentes clients, il y a une vraie plus-value, surtout en termes d'ergonomie par rapport à leur solution précédente : Excel.",
        link: '/projects/tsource'
      },
    ],
    crit: {
      paragraphs: [
        "Je suis à l'aise avec les bases d'Angular : création de composants, gestion des modules, services et routing. J'ai travaillé à la fois sur la version 15 et la 19, ce qui m'a permis d'appréhender deux approches assez différentes (modules classiques vs standalone components). Aujourd'hui, je ne me contente plus de construire des composants correspondant aux pages, mais je commence à concevoir des composants comme de vraies fonctionnalités réutilisables, ce qui limite les répétitions et améliore la structure du projet. Ma marge de progression reste importante sur certains points avancés comme la gestion d'état avec RxJS ou NgRx, et les optimisations de performance complexes.",
        "Angular occupe une place centrale dans mon profil : c'est mon framework front principal et celui avec lequel je me sens le plus à l'aise. J'apprécie particulièrement la manière dont il impose une structure claire, avec une séparation nette entre fichiers et dossiers (HTML, CSS, TS, tests). Cette organisation correspond bien à ma façon de travailler et renforce la lisibilité du code.",
        "Ma montée en compétence a été facilitée par mon expérience préalable en TypeScript et React. Après une première impression de complexité, j'ai rapidement compris qu'organiser le code en de nombreux fichiers légers est une force plutôt qu'une contrainte. Cette organisation me convient et facilite la maintenance.",
      ],
      advice: [
        "Bien séparer et nommer les composants dès le départ pour éviter la confusion",
        "Faire de la réutilisation une fois la logique de base acquise, pas avant",
        "Bien s'organiser dès le début : cela simplifie énormément la maintenance",
        "Prendre le temps de comprendre l'architecture avant de coder",
      ],
    },
    evol: {
      text: "Je souhaite continuer à approfondir Angular en travaillant sur des projets front-end complexes. Mon objectif à moyen terme est d'améliorer la performance, la maintenabilité et la qualité des interfaces, tout en consolidant ma compréhension des patterns avancés du framework.",
      roadmap: [
        "Approfondir RxJS et la gestion d'état réactive",
        "Explorer NgRx pour la gestion d'état complexe",
        "Optimiser les performances (lazy loading, OnPush change detection, tree shaking)",
      ],
    },
    project: [
      {
        title: "MPMT",
        url: "/projects/mpmt"
      },
      {
        title: "T-Source",
        url: "/projects/tsource"
      },
    ],
  },
  {
    id: "spring",
    title: "Spring boot",
    type: "tech",
    icon: ASSET_PATHS.skills.spring,
    level: 60,
    color: "#8BC34A",
    def: "Spring Boot est un framework Java back-end permettant de créer rapidement des API REST. Il simplifie considérablement la configuration de Spring tout en offrant une architecture claire séparant les couches métier, contrôleurs et accès aux données. Spring Boot est largement utilisé en entreprise pour sa maturité, sa scalabilité et son écosystème complet.",
    proofs: [
      {
        projectId: 1,
        title: "MPMT - Première API REST en Java",
        description: "Projet de validation du bloc de développement de ma formation, j'y ai passé plusieurs mois, travaillant le week-end dessus. MPMT est une application qui centralise la gestion des utilisateurs, des projets et des tâches, avec un système de rôles et de permissions.",
        achievements: [
          "Conception et développement d'une API REST complète pour la gestion de projets et tâches",
          "Gestion des projets, tâches et rôles via API REST sécurisées",
          "Mise en place de tests unitaires backend avec JUnit et intégration dans un pipeline CI/CD",
          "Industrialisation complète : Dockerisation, automatisation des builds et déploiement",
        ],
        conclusion: "Ma première API REST en Java avec Spring Boot réalisée seule, j'ai pu découvrir le framework sans pression.",
        link: '/projects/mpmt'
      },
      {
        projectId: 2,
        title: "T-Source - Application de traçabilité en production",
        description: "J'ai travaillé six mois sur ce projet, c'était mon premier gros projet Spring et surtout en entreprise avec rendu client. T-Source est une application qui centralise la traçabilité des matières premières via des tableaux interactifs et d’autres fonctionnalités développées sur mesure.",
        achievements: [
          "Modélisation de base de données MariaDB",
          "Historisation complète des modifications",
          "Contrôle d'accès aux données selon les profils utilisateurs",
          "Gestion d'imports massifs depuis Excel avec optimisation des performances (traitement batch)",
        ],
        conclusion: "L'API Spring Boot assure des échanges de données rapides et fiables, et l'application est utilisée par Takasago depuis son déploiement.",
        link: '/projects/tsource'
      },
    ],
    crit: {
      paragraphs: [
        "Je suis à l'aise avec les bases de Spring Boot : utilisation de l'ORM (JPA/Hibernate) pour la gestion des données, séparation claire des couches (logique métier dans les services, contrôleurs, repositories, DTO/mappers), et mise en place de traitements batch pour optimiser des imports volumineux. Les tests unitaires et d'intégration ont été une étape importante, avec une couverture conséquente qui a amélioré la fiabilité du code. Ma marge de progression se situe surtout au niveau de la sécurité : mes pratiques restent limitées à des configurations simples, et je n'ai pas encore approfondi les aspects avancés comme l'authentification complexe (OAuth2) ou la gestion fine des rôles.",
        "Spring Boot est aujourd'hui mon framework backend principal. Sa place est importante dans mon profil, d'autant qu'il m'a permis de passer d'un univers Node.js à un environnement Java. L'adaptation a demandé un effort, notamment face au caractère verbeux du langage, mais l'architecture claire et la maturité de l'écosystème ont facilité la transition.",
        "Mon apprentissage s'est fait progressivement, d'abord sur un projet académique (MPMT) sans pression, puis sur un projet client (T-Source) où j'ai dû monter en compétence rapidement. Cette double expérience m'a permis de consolider les bases puis de les appliquer en contexte réel.",
      ],
      advice: [
        "Possèder déjà une base en Java avant d'aborder Spring Boot",
        "Pour un débutant complet, commencer par un framework plus simple pour une montée en compétence plus progressive",
        "Bien nommer fonctions, variables et fichiers : le langage Java est verbeux et impose une rigueur",
        "Ne sous-estimez pas la documentation et les commentaires : ils sont essentiels face à la complexité de Spring Boot",
      ],
    },
    evol: {
      text: "Je souhaite approfondir Spring Boot, mon framework backend principal, pour gérer des projets plus volumineux et complexes. Mon objectif à moyen terme est de renforcer mes compétences sur la sécurité, la scalabilité et les architectures distribuées. Spring Boot étant très utilisé en entreprise, je consolide mes compétences directement par la pratique.",
      roadmap: [
        "Approfondir Spring Security (authentification complexe, OAuth2, JWT, gestion fine des rôles)",
        "Explorer les architectures microservices avec Spring Cloud",
        "Maîtriser les patterns de scalabilité et de résilience (circuit breaker, retry, timeout)",
        "Optimiser les performances (requêtes SQL, caching, indexation)",
      ],
    },
    project: [
      {
        title: "MPMT",
        url: "/projects/mpmt"
      },
      {
        title: "T-Source",
        url: "/projects/tsource"
      },
    ]
  },
  {
    id: "react",
    title: "React",
    type: "tech",
    icon: ASSET_PATHS.skills.react,
    level: 60,
    color: "#60dbfb",
    def: "React est une bibliothèque JavaScript permettant de créer des interfaces utilisateur dynamiques. Elle repose sur une approche par composants. React est l'un des frameworks front-end les plus adoptés mondialement, apprécié pour sa flexibilité et son écosystème riche.",
    proofs: [
      {
        projectId: 1,
        title: "Nowelia - Développement frontend avec Next.js",
        description: "L'équipe était compétente sur React mais le projet nécessitait du SSG, nous avons choisi de travailler avec Next.js. Nowelia est une plateforme de Web Novels permettant aux utilisateurs de découvrir, lire, commenter et créer des histoires.",
        achievements: [
          "Intégration responsive des pages avec Tailwind CSS",
          "Gestion dynamique du contenu avec SSR et SSG selon les besoins",
          "Gestion des états via hooks React (useState, useEffect, useContext)",
          "Formulaire de création d'histoire avec upload d'image et tags multiples",
          "Tests unitaires avec Jest",
        ],
        conclusion: "L'interface permet d'utiliser une partie des fonctionnalités développées côté back-end. L'association Next.js / TailwindCSS a permis de créer rapidement un MVP.",
        link: '/projects/nowelia'
      },
      {
        projectId: 2,
        title: "Pinterest clone - Projet de découverte",
        description: "J'ai passé quelques jours en pair programming afin de réaliser un clone de Pinterest comme découverte de React.",
        achievements: [
          "Système d'enregistrement et connexion via google",
          "Gestion de profil utilisateur",
          "Ajout d'images avec système de tags",
          "Mur d'images responsive",
        ],
        conclusion: "L'application reprend les principales fonctionnalités de Pinterest et a été déployée avec succès.",
        link: '#'
      },
    ],
    crit: {
      paragraphs: [
        "Je suis à l'aise avec les composants fonctionnels, les hooks (useState, useEffect, useContext), la gestion des formulaires et le routing. J'ai également travaillé sur des projets utilisant Next.js pour le rendu statique (SSG) et réalisé des tests unitaires avec Jest. Ma marge de progression se situe surtout sur Redux et ses usages avancés, que j'ai explorés mais peu exploités, ainsi que sur certaines optimisations de performance ou aspects plus complexes comme le SSR approfondi.",
        "React occupe aujourd'hui une place secondaire dans mon profil front-end. Je l'ai progressivement délaissé au profit d'Angular, qui est devenu mon framework principal, mais je reste capable de reprendre des projets existants et d'y apporter des évolutions efficaces.",
        "Mon apprentissage a été progressif. React a constitué mon premier vrai framework après JavaScript/TypeScript purs. Les débuts ont été complexes, beaucoup à apprendre d'un coup, mais la pratique et l'expérience m'ont permis de comprendre la philosophie des frameworks front-end.",
      ],
      advice: [
        "Avoir une bonne connaissance de JavaScript ou TypeScript avant de se lancer",
        "Comprendre ce qu'est un framework et comment il structure un projet",
        "Se concentrer sur les hooks et le JSX avant d'aborder Redux ou d'autres outils avancés",
        "Progresser par étapes, en consolidant les bases avant de complexifier",
      ],
    },
    evol: {
      text: "Je souhaite reprendre ma montée en compétence avec React et Next.js pour renforcer ma polyvalence front-end. Mon objectif à moyen terme est d'être opérationnelle dans les deux écosystèmes les plus utilisés (Angular et React), ce qui me permettra de m'adapter à différents contextes professionnels. Bien qu'Angular reste mon framework principal en entreprise, je veux développer React en parallèle.",
      roadmap: [
        "Maîtriser le SSR et SSG avec Next.js pour optimiser SEO et performances",
        "Explorer les Server Components et App Router",
        "Renforcer les optimisations de performance",
      ],
    },
    project: [
      {
        title: "Nowelia",
        url: "/projects/nowelia"
      },
    ]
  },
  {
    id: "nest",
    title: "NestJS",
    type: "tech",
    icon: ASSET_PATHS.skills.nest,
    level: 50,
    color: "#df224e",
    def: "NestJS est un framework Node.js fortement inspiré d'Angular. Il facilite la création d'API REST ou GraphQL, grâce à sa structure par couches (controllers, services, modules). Sa popularité en entreprise progresse grâce à sa capacité à structurer des applications backend complexes de manière claire.",
    proofs: [
      {
        projectId: 1,
        title: "Nowelia - Développement d'une API REST complète",
        description: "J'ai travaillé plusieurs mois sur l'API REST du projet Nowelia. Nous devions travailler sur un framework back end NodeJS et notre choix s'est porté sur NestJS. Nowelia est une plateforme de Web Novels permettant aux utilisateurs de découvrir, lire, commenter et créer des histoires.",
        achievements: [
          "Mise en place des modèles de données avec Prisma",
          "Implémentation des CRUD pour Novels, Chapters, Comments et Tags",
          "Recherche avancée avec filtres multiples (tags, auteurs, type…)",
          "Tests unitaires et d'intégration",
          "Documentation Swagger automatique de l'API",
        ],
        conclusion: "Le back-end est fonctionnel, documenté et testé, permettant une utilisation fluide par les trois clients distincts (web, mobile, desktop).",
        link: '/projects/nowelia'
      },
    ],
    crit: {
      paragraphs: [
        "Je suis à l'aise avec les bases de NestJS : mise en place des CRUD, découpage en couches (controllers, services, repositories), utilisation de Prisma comme ORM, rédaction de tests unitaires et d'intégration, intégration de Swagger pour la documentation. Cette pratique me rend autonome sur les cas courants d'API REST. Ma marge de progression reste importante sur les usages avancés comme GraphQL, les WebSockets, la sécurité approfondie ou les architectures microservices.",
        "NestJS occupe une place secondaire dans mon profil. Je l'apprécie pour son architecture claire et j'aime le TypeScript, mais je privilégie Spring Boot comme framework backend principal. J'ai également quelques réserves sur les performances de Node.js en production, ce qui diminue son rôle dans mon parcours.",
        "Ma montée en compétence a été rapide et agréable, facilitée par mon expérience préalable en TypeScript et par un bon accompagnement. L'architecture inspirée d'Angular a aussi favorisé l'adoption, les concepts de modules et d'injection de dépendances m'étant déjà familiers.",
      ],
      advice: [
        "Un minimum d'expérience en TypeScript est nécessaire pour être efficace",
        "L'approche est idéale pour ceux qui apprécient Angular, l'architecture est proche",
        "Peut convenir comme premier framework backend si l'on veut démarrer rapidement",
        "Bien comprendre l'injection de dépendances dès le début",
      ],
    },
    evol: {
      text: "J'ai beaucoup aimé travailler avec NestJS pour son architecture claire et TypeScript peu verbeux, mais les performances de Node.js en production me poussent à privilégier Spring Boot. Mon objectif à moyen terme est d'explorer les aspects avancés de NestJS pour renforcer ma polyvalence backend, sans en faire une priorité absolue dans ma montée en compétence.",
      roadmap: [
        "Approfondir les optimisations de performance Node.js",
        "Explorer les WebSockets pour les applications temps réel",
        "Tester les microservices avec Kafka ou RabbitMQ",
        "Comparer les performances NestJS vs Spring Boot sur des cas réels",
      ],
    },
    project: [
      {
        title: "Nowelia",
        url: "/projects/nowelia"
      },

    ]
  },
  {
    id: "katalon",
    title: "Katalon",
    type: "tech",
    icon: ASSET_PATHS.skills.katalon,
    level: 75,
    color: "#19D89F",
    def: "Katalon est un outil d'automatisation de tests pour applications. Il propose une interface graphique mais permet aussi d'écrire des tests plus complexes. L'automatisation des tests devient de plus en plus courante dans l'industrie pour accélérer les livraisons tout en garantissant la qualité.",
    proofs: [
      {
        projectId: 1,
        title: "Wahis - Développement d'une suite complète de tests automatisés",
        description: "J'ai travaillé pendant neuf mois spécifiquement sur la partie test automatisé. Je débutais avec cet outil, n'ayant auparavant fait que quelques essais simples avec Playwright. Wahis est une application web de suivi en temps réel des foyers de maladies animales.",
        achievements: [
          "Développement de 28 tests end-to-end couvrant les fonctionnalités critiques",
          "Utilisation de l'interface d'enregistrement pour les parties simples des tests",
          "Codage manuel des tests nécessitant davantage de logique",
          "Organisation des fichiers objets, test cases, test suite",
          "Maintenance continue face aux évolutions de l'application (adaptation des XPath, mise à jour des scénarios)",
        ],
        conclusion: "Ces scénarios de test ont permis de détecter plusieurs régressions avant la mise en production. Résultat : des livrables plus stables et une meilleure confiance côté client.",
        link: '/projects/wahis'
      },
    ],
    crit: {
      paragraphs: [
        "Mon expérience sur Katalon se limite à un seul projet, mais il m'a permis d'explorer la majorité des situations de tests end-to-end. J'ai réussi à développer et exécuter des scénarios variés en autonomie, avec une aide ponctuelle. J'ai tout de même une marge de progression : je n'ai pas touché aux tests mobiles, aux tests d'API. Certaines limites de l'outil (lenteur, instabilité) réduisent mon intérêt par rapport à des alternatives plus modernes comme Playwright.",
        "Dans mon profil, cette compétence reste secondaire car je suis plutôt orientée développement web. Elle m'apporte surtout une compréhension du métier de QA, de l'importance des tests, et des bonnes pratiques pour faciliter le testing en tant que développeuse (sélecteurs stables, organisation du DOM).",
        "Ma montée en compétence s'est faite rapidement. Après un démarrage avec des tests simples utilisant l'interface d'enregistrement, j'ai vite progressé vers du code manuel, plus flexible et contrôlable. Cette rapidité d'autonomie montre que l'outil peut être pris en main efficacement avec une bonne organisation.",
      ],
      advice: [
        "Organiser les objets dès le début pour faciliter la maintenance",
        "Construire un plan de tests clair et le suivre rigoureusement",
        "Documenter systématiquement pour faciliter la transmission",
        "Penser la réutilisation des test cases dans plusieurs suites",
        "Prendre le temps de réfléchir avant de coder les scénarios",
      ],
    },
    evol: {
      text: "Je ne cherche pas à progresser spécifiquement avec Katalon, car l'outil présente trop de limitations (lenteur, instabilité) par rapport aux alternatives modernes. En revanche, je souhaite capitaliser sur mon expérience QA en approfondissant l'automatisation de tests avec des frameworks plus récents.",
      roadmap: [
        "Apprendre Playwright et Cypress pour les tests end-to-end modernes",
        "Approfondir l'intégration des tests dans les pipelines CI/CD",
        "Comprendre les stratégies de test pour applications complexes (microservices, SPA)",
        "Appliquer le Test-Driven Development (TDD) sur des projets futurs",
      ],
    },
    project: [
      {
        title: "Wahis",
        url: "/projects/wahis"
      },
    ]
  },
  {
    id: "docker",
    title: "Docker",
    type: "tech",
    icon: ASSET_PATHS.skills.docker,
    level: 40,
    color: "#0091e2",
    def: "Docker est un outil de conteneurisation qui permet de regrouper une application et toutes ses dépendances. Cette approche garantit que l'application fonctionnera de manière identique quel que soit l'environnement. Docker est devenu incontournable dans le développement moderne pour faciliter la collaboration entre développeurs.",
    proofs: [
      {
        projectId: 1,
        title: "MPMT - Industrialisation complète du projet",
        description: "Pour ce projet, j'ai utilisé Docker pour le déploiement du front-end et du back-end. MPMT est une application qui centralise la gestion des utilisateurs, des projets et des tâches, avec un système de rôles et de permissions.",
        achievements: [
          "Dockerisation du frontend et backend",
          "Orchestration avec Docker Compose pour gérer les trois services",
          "Publication des images sur Docker Hub",
          "Pipeline CI/CD (GitHub Actions) automatisant le build, les tests et le déploiement",
        ],
        conclusion: "Les images générées étaient récupérables par d'autres développeurs, le correcteur a validé le déploiement sans difficulté.",
        link: '/projects/mpmt'
      },
      {
        projectId: 2,
        title: "Nowelia - Déploiement automatisé sur VPS",
        description: "Sur ce projet, Docker a été intégré dès le départ pour assurer un déploiement fiable et automatisé. Nowelia est une plateforme de Web Novels permettant aux utilisateurs de découvrir, lire, commenter et créer des histoires.",
        achievements: [
          "Déploiement de la base de données PostgreSQL dans un conteneur Docker",
          "Hébergement sur un VPS OVH avec configuration Docker",
          "Mise en place d'un déploiement continu : push sur la branche principale → build automatique → mise à jour en production",
        ],
        conclusion: "Cela a permis d'avoir une application se déployant automatiquement en ligne juste avec un push dans une branche git.",
        link: '/projects/nowelia'
      },
    ],
    crit: {
      paragraphs: [
        "Je suis à l'aise avec les actions les plus basiques : création d'images, mise en place d'une CI/CD avec mise à jour automatique à chaque push sur la branche principale, utilisation de conteneurs. J'ai également travaillé avec Docker Compose pour orchestrer plusieurs services (frontend, backend, base de données). Ma marge de progression est large : je n'ai pas encore exploré les usages avancés comme l'orchestration avec Kubernetes, la sécurité des conteneurs, l'optimisation des images ou le monitoring.",
        "Docker occupe une place très secondaire dans mon profil. Ce n'est pas une compétence que je développe en priorité, car je ne vise pas une spécialisation DevOps. Cependant, je reconnais son importance et m'y intéresse de près.",
        "Mon apprentissage a été progressif, parfois avec des retours en arrière pour assimiler les bases. La pratique régulière, même sur des cas simples, a été essentielle pour progresser et comprendre les concepts fondamentaux de la conteneurisation.",
      ],
      advice: [
        "Consolider les bases avant de viser des usages complexes",
        "Répéter les manipulations simples pour bien les ancrer",
        "Ne pas hésiter à consulter la documentation officielle, elle est bien faite",
        "Commencer par Docker Compose pour comprendre l'orchestration basique",
      ],
    },
    evol: {
      text: "Je reste débutante dans le domaine du DevOps, mais Docker m'a permis de comprendre les bases essentielles de la conteneurisation et du déploiement continu. Mon objectif à moyen terme est de monter en compétence sur les aspects plus avancés, sans pour autant viser une spécialisation DevOps. Je considère ces connaissances comme indispensables à notre époque.",
      roadmap: [
        "Optimiser les images Docker (multi-stage builds, réduction de la taille)",
        "Approfondir Docker Compose pour orchestrer des stacks complètes",
        "Explorer Kubernetes pour l'orchestration à plus grande échelle",
        "Améliorer les pipelines CI/CD (GitHub Actions, GitLab CI)",
      ],
    },
    project: [
      {
        title: "MPMT",
        url: "/projects/mpmt"
      },
      {
        title: "Nowelia",
        url: "/projects/nowelia"
      },
    ]
  },
  // COMPÉTENCES NON-TECH
  {
    id: "agile",
    title: "Travail en équipe agile",
    type: "non-tech",
    icon: ASSET_PATHS.skills.scrum,
    level: 70,
    color: "#7bc1ec",
    def: "L'agilité regroupe un ensemble de pratiques permettant de gérer les projets collaboratifs. Dans mon cas, j'ai principalement travaillé avec la méthode Scrum et l'outil Jira. Scrum repose sur des rituels (daily, sprint planning, review, rétrospective) et sur une organisation du travail en tickets (user stories, epics, bugs) qui favorisent l'adaptation continue et les itérations. Ces méthodes sont devenues incontournables dans le développement logiciel moderne, car elles permettent de livrer rapidement tout en s'ajustant aux retours utilisateurs et aux imprévus.",
    proofs: [
      {
        projectId: 1,
        title: "Nowelia - Mise en place de l'organisation Scrum",
        description: "En tant que Product Owner, j'ai structuré l'organisation Scrum pour une équipe de 2-3 personnes. Nowelia est une plateforme de Web Novels permettant aux utilisateurs de découvrir, lire, commenter et créer des histoires.",
        achievements: [
          "Définition des epics et user stories",
          "Gestion du product backlog sur Jira et priorisation",
          "Animation des rituels (sprint planning, daily, démos, rétrospectives)",
        ],
        conclusion: "Cette organisation a permis de valider le diplôme CDA et de livrer le projet conforme aux attentes.",
        link: '/projects/nowelia'
      },
      {
        projectId: 2,
        title: "Wahis - Animation des points client hebdomadaires",
        description: "En tant que QA, j'ai animé les réunions hebdomadaires avec l'équipe et le client. Wahis est une application web de suivi en temps réel des foyers de maladies animales.",
        achievements: [
          "Présentation de l'avancement des tests réalisés",
          "Soumission des fonctionnalités à tester la semaine suivante",
          "Recueil des feedbacks et fonctionnalités à risque",
          "Création de tickets de bugs avec captures et étapes de reproduction",
        ],
        conclusion: "La satisfaction client a été très bonne, saluant la qualité des rapports et la communication transparente.",
        link: '/projects/wahis'
      },
      {
        projectId: 3,
        title: "Gecko - Intégration dans un environnement Agile structuré",
        description: "Au sein d'une équipe de quatre personnes, j'ai participé activement aux rituels Agile. Gecko est une application web de gestion regroupant l’ensemble des activités éditoriales : articles, stocks, fabrication, etc.",
        achievements: [
          "Daily stand-ups quotidiens de 15 minutes pour communiquer avancements et blocages",
          "Sprint de deux semaines",
          "Découpage rigoureux en tickets avec estimations et respect du backlog",
          "Démos bi-mensuelles et rétrospectives d'équipe",
        ],
        conclusion: "L'équipe a maintenu un rythme de livraison régulier et le client s'est montré satisfait.",
        link: '/projects/gecko'
      },
    ],
    crit: {
      paragraphs: [
        "Mon intégration dans les équipes agiles s'est toujours faite sans difficulté. Je suis à l'aise avec les rituels Scrum (daily, planning, démos, rétrospectives) et je sais utiliser Jira pour gérer les tickets, même si l'outil m'a paru peu intuitif au début. Ma marge de progression se situe dans l'amélioration de la qualité des tickets (descriptions plus détaillées, critères d'acceptation clairs) et dans l'animation des rituels, afin de mener des réunions courtes mais pertinentes.",
        "L'agilité occupe une place essentielle dans mon métier actuel : tous mes projets professionnels sont organisés avec, et cela influence directement ma productivité et la qualité du travail d'équipe.",
        "Mon apprentissage a été progressif, des kanbans simples sur Trello jusqu'au Scrum complet avec Jira. L'expérience Nowelia où j'ai mis en place l'organisation moi-même a été particulièrement formatrice, me permettant de comprendre le pourquoi de chaque rituel.",
      ],
      advice: [
        "Bien comprendre le rôle de chaque rituel et s'y tenir",
        "Éviter les réunions trop longues ou sans objectif clair",
        "Prendre en main les outils et faire des tests avec",
        "Observer les erreurs de gestion comme opportunités d'amélioration",
      ],
    },
    evol: {
      text: "Mon objectif à moyen terme est de progresser sur l'animation des rituels et la qualité de la gestion des tickets, afin de fluidifier le travail d'équipe et d'être toujours plus efficace dans la collaboration. Je ne vise pas une spécialisation en gestion de projet, mais je considère que l'agilité est une compétence transversale incontournable pour tout développeur.",
      roadmap: [
        "Approfondir Jira et ses fonctionnalités avancées",
        "Lire de bonnes ressources dans la gestion de projet, l'intelligence émotionnelle...etc",
        "Passer une certification Scrum Master",
      ],
    },
    project: [
      {
        title: "Nowelia",
        url: "/projects/nowelia"
      },
      {
        title: "Wahis",
        url: "/projects/wahis"
      },
      {
        title: "Gecko",
        url: "/projects/gecko"
      },
    ]
  },
  {
    id: "client",
    title: "Relation client",
    type: "non-tech",
    icon: ASSET_PATHS.skills.publicRelation,
    level: 50,
    color: "#ffd54f",
    def: "Communiquer avec le client consiste à recueillir et clarifier les besoins, animer des démonstrations, présenter l'avancement et obtenir des validations régulières. L'objectif est de maintenir une compréhension du besoin et de s'assurer que le produit corresponde aux attentes. Dans un monde agile où les applications évoluent vite, cette communication est cruciale pour éviter les malentendus et maintenir la confiance, même face à des difficultés ou des changements.",
    proofs: [
      {
        projectId: 1,
        title: "Wahis - Animation et communication structurée",
        description: "J'ai repris le poste de QA avec passation du travail et des points clients par mon prédécesseur. Wahis est une application web de suivi en temps réel des foyers de maladies animales.",
        achievements: [
          "Présentation régulière et détaillée de l'avancement des tests",
          "Recueil des feedbacks sur fonctionnalités critiques et à risque",
          "Adaptation des priorités selon les retours client",
          "Remontée structurée des bugs avec documentation claire",
        ],
        conclusion: "Les échanges fréquents ont permis de valider que les scénarios couvraient bien les besoins, et le client a salué la qualité des rapports et de la communication.",
        link: '/projects/wahis'
      },
      {
        projectId: 2,
        title: "T-Source - Gestion d'une relation difficile",
        description: "Seule développeuse sur le projet durant les premiers mois, j'ai géré la communication avec un client exigeant du secteur de la parfumerie. T-Source est une application qui centralise la traçabilité des matières premières via des tableaux interactifs et d’autres fonctionnalités développées sur mesure.",
        achievements: [
          "Clarification des besoins fonctionnels métier complexes",
          "Démonstrations régulières de l'application",
          "Temporisation face aux tensions",
        ],
        conclusion: "Malgré trois mois de retard et des tensions, j'ai maintenu une relation professionnelle et livré l'application finie, aboutissant à une relation plus sereine.",
        link: '/projects/tsource'
      },
    ],
    crit: {
      paragraphs: [
        "Je gère correctement l'écoute et la communication et je sollicite un avis extérieur si besoin. Ma marge de progression reste importante : en tant qu'apprentie développeuse, je n'ai pas encore eu à gérer des situations où il fallait dire non à un client ou négocier des délais. Je me limite à informer, transmettre les demandes et temporiser en cas de tension.",
        "Cette compétence est importante dans mon métier : même si la technique est prioritaire, les échanges clients sont fréquents et nécessitent une bonne approche.",
        "Dès mes premières réunions sur Wahis, j'ai été intégrée aux échanges, puis j'ai progressivement pris le lead dans certains points. Sur T-Source, la gestion d'un client difficile m'a appris la résilience.",
      ],
      advice: [
        "Ne pas hésiter à demander validation avant d'envoyer un message important",
        "Clarifier systématiquement les points d'action en fin de réunion",
        "Garder une trace écrite des échanges pour éviter les malentendus",
        "Faire des comptes rendus de réunion",
      ],
    },
    evol: {
      text: "Mon objectif à moyen terme est de gérer des échanges de manière plus fluide et professionnelle, tout en restant concentrée sur mon cœur de métier technique. Je souhaite développer suffisamment d'aisance pour que ces interactions ne soient plus source de stress.",
      roadmap: [
        "Améliorer mes présentations et démos",
        "Apprendre à mieux gérer les situations tendues et mon stress",
        "Développer ma capacité à vulgariser les aspects techniques",
      ],
    },
    project: [
      {
        title: "Wahis",
        url: "/projects/wahis"
      },
      {
        title: "T-Source",
        url: "/projects/tsource"
      },
    ]
  },
  {
    id: "qualite",
    title: "Sens de la qualité",
    type: "non-tech",
    icon: ASSET_PATHS.skills.quality,
    level: 50,
    color: "#fd646f",
    def: "Le sens de la qualité en développement repose sur la rigueur : tests, documentation, lisibilité et maintenabilité du code. Un code de qualité est fiable, compréhensible par l'équipe et évolutif dans le temps. Cette exigence est devenue essentielle dans un contexte où les applications doivent évoluer rapidement sans accumuler de dette technique. Cela passe par des pratiques comme les code reviews, l'automatisation des tests, le respect de conventions de nommage et l'utilisation d'outils d'analyse statique comme SonarQube.",
    proofs: [
      {
        projectId: 1,
        title: "Gecko - Rigueur et qualité dans une architecture complexe",
        description: "Sur ce projet, j'ai travaillé sur une application existante en JavaScript et PHP natif avec une attention particulière à la qualité. Gecko est une application web de gestion regroupant l’ensemble des activités éditoriales : articles, stocks, fabrication, etc.",
        achievements: [
          "Respect de l'architecture existante",
          "Séparation claire des responsabilités malgré de gros fichiers",
          "Commentaires pour faciliter la compréhension du code",
          "Revues de code systématiques par le lead développeur",
        ],
        conclusion: "Toutes mes fonctionnalités ont été intégrées sans régressions dans l'application en production, démontrant la fiabilité du code livré.",
        link: '/projects/gecko'
      },
      {
        projectId: 2,
        title: "Wahis - Documentation et maintenabilité des tests",
        description: "J'ai repris un projet de tests automatisés insuffisamment documentés, ce qui ralentissait les interventions sur les anciens tests. Wahis est une application web de suivi en temps réel des foyers de maladies animales.",
        achievements: [
          "Élaboration d'un plan de test détaillé en français et anglais",
          "Documentation systématique de chaque test",
          "Organisation structurée des fichiers objets, test cases et test suites",
          "Relecture et amélioration continue du code pour le rendre plus robuste",
        ],
        conclusion: "Le QA qui a repris le projet n'a quasiment plus eu à intervenir sur le code des tests qui sont toujours une assurance de non-régression.",
        link: '/projects/wahis'
      },
      {
        projectId: 3,
        title: "Nowelia - Qualité du cycle de développement",
        description: "Sur ce projet académique, nous avons mis en place des pratiques de qualité dès le départ. Nowelia est une plateforme de Web Novels permettant aux utilisateurs de découvrir, lire, commenter et créer des histoires.",
        achievements: [
          "Tests unitaires backend et frontend",
          "Tests d'intégration",
          "Documentation des fonctionnalités et procédures de déploiement",
          "Documentation Swagger",
          "Veille et application des bonnes pratiques pour améliorer les standards",
        ],
        conclusion: "Le projet a été validé avec tous les critères de qualité attendus lors de l'oral.",
        link: '/projects/nowelia'
      },
    ],
    crit: {
      paragraphs: [
        "La qualité est pour moi un aspect central du développement. J'aimerais appliquer des tests systématiquement (unitaires, end-to-end et manuels), la relecture de code, la documentation et le commentaire pertinent. Ma marge de progression se situe dans l'application concrète de certains design patterns que je ne maîtrise encore qu'en théorie.",
        "Cette compétence est indispensable à plusieurs niveaux : maintenir la lisibilité et l'évolutivité du code, faciliter le travail d'équipe et garantir la fiabilité des applications. Elle prend une importance particulière sur des projets comme Gecko, où la qualité du code conditionne la performance.",
        "Mon apprentissage s'est fait progressivement, notamment grâce aux code reviews avec mes leads développeurs. L'expérience Gecko, où nous avons dû travailler sur un code complexe mais non documenté, m'a fait prendre du recul sur la rigueur à mettre sur ces tâches parfois dites secondaires.",
      ],
      advice: [
        "Ne pas négliger la documentation, même minimale",
        "Combiner tests automatiques et tests manuels",
        "Demander des relectures pour progresser",
      ],
    },
    evol: {
      text: "Mes objectifs à moyen terme sont d'approfondir les design patterns et l'architecture logicielle, compétences qui s'acquièrent avec l'expérience et une bonne organisation en amont du développement. Je veux également continuer à documenter systématiquement pour rendre mes projets plus accessibles et faciliter la collaboration. Et savoir faire des tests efficaces. Je m'intéresse même à la spécialité QA.",
      roadmap: [
        "Étudier et appliquer progressivement les design patterns",
        "Apprendre SonarQube et autres outils d'analyse",
        "Renforcer la pratique des tests (pyramide de tests complète)",
        "Développer un projet en TDD",
        "Me perfectionner en UML",
      ],
    },
    project: [
      {
        title: "Gecko",
        url: "/projects/gecko"
      },
      {
        title: "Wahis",
        url: "/projects/wahis"
      },
      {
        title: "Nowelia",
        url: "/projects/nowelia"
      },
    ]
  },
  {
    id: "autonomie",
    title: "Autonomie",
    type: "non-tech",
    icon: ASSET_PATHS.skills.autonomie,
    level: 80,
    color: "#E23200",
    def: "L'autonomie, c'est savoir mener des projets ou des fonctionnalités de bout en bout sans supervision constante : comprendre, faire des choix, apprendre de nouvelles choses par soi-même et résoudre les problèmes. Cette compétence est particulièrement importante en entreprise, où il faut souvent jongler entre plusieurs projets, technologies, équipes. L'autonomie ne signifie pas travailler seul, mais savoir quand chercher de l'aide et quand avancer de manière indépendante.",
    proofs: [
      {
        projectId: 1,
        title: "MPMT - De la conception à l'industrialisation",
        description: "En totale autonomie sur ce projet scolaire, j'ai dû organiser mon travail en plus des cours et de l'alternance. MPMT est une application qui centralise la gestion des utilisateurs, des projets et des tâches, avec un système de rôles et de permissions.",
        achievements: [
          "Établissement d'un rythme régulier : tous les vendredis et week-ends aux mêmes heures",
          "Mise en place d'un Kanban sur Trello avec tickets détaillés pour ne jamais perdre le fil",
          "Priorisation rationnelle des tâches (compte utilisateur → projet → tâches)",
          "Recherches internet ciblées pour débloquer les points techniques simples",
        ],
        conclusion: "L'organisation rigoureuse a permis de livrer le projet validé du premier coup, prouvant qu'une bonne organisation peut compenser l'absence d'encadrement.",
        link: '/projects/mpmt'
      },
      {
        projectId: 2,
        title: "T-Source - Montée en compétences rapide",
        description: "J'ai découvert Angular et Spring Boot, que je n'avais jamais pratiqués en étant seule sur un projet. T-Source est une application qui centralise la traçabilité des matières premières via des tableaux interactifs et d’autres fonctionnalités développées sur mesure.",
        achievements: [
          "Apprentissage autodidacte d'Angular et Spring Boot",
          "Recherche de ressources",
          "Reprise et adaptation de code existant dans d'autres projets",
        ],
        conclusion: "L'application complète a été déployée et utilisée quotidiennement, prouvant ma capacité d'apprentissage rapide malgré la pression.",
        link: '/projects/tsource'
      },
      {
        projectId: 3,
        title: "Wahis - QA et communication",
        description: "Sur ma première mission QA, j'ai développé en autonomie une suite complète de tests automatisés. Wahis est une application web de suivi en temps réel des foyers de maladies animales.",
        achievements: [
          "Élaboration du plan de test (28 tests end-to-end) sans référence préexistante",
          "Développement des scénarios en Katalon",
          "Adaptation face aux évolutions de l'application",
          "Animation des réunions hebdomadaires avec le client",
          "Prise de décisions sur les priorités de testing",
        ],
        conclusion: "La suite de tests a sécurisé les déploiements puis en TMA, et j'ai assuré une passation complète permettant la continuité du projet.",
        link: '/projects/wahis'
      },
    ],
    crit: {
      paragraphs: [
        "Je sais me débrouiller seule sur pas mal de situations : structurer mon travail, prioriser les tâches, apprendre de nouvelles technologies et résoudre les problèmes techniques. Ma principale marge de progression concerne la communication : à force de travailler seule, j'hésite à poser des questions et j'insiste parfois trop longtemps, quitte à perdre du temps.",
        "Sur MPMT, l'autonomie était confortable car le projet était cadré. Sur T-Source, l'apprentissage sous pression a été difficile et stressant. Sur Wahis, j'étais déjà plus à l'aise grâce à la montée en compétences techniques, ce qui rendait l'autonomie plus fluide.",
      ],
      advice: [
        "Structurer son travail dès le départ (Kanban, tickets détaillés) pour ne jamais perdre le fil",
        "Ne pas confondre autonomie et isolement : demander de l'aide n'est pas un échec",
        "Se fixer une limite de temps avant de solliciter de l'aide (exemple : 1h de recherche max)",
      ],
    },
    evol: {
      text: "Mon objectif à moyen terme est de trouver le bon équilibre entre ma capacité à me débrouiller seule et ma communication avec les autres. Le métier de développeur demande à la fois du travail solitaire et de la collaboration : je veux progresser sur les deux aspects en parallèle.",
      roadmap: [
        "Participer davantage aux échanges d'équipe",
        "Rejoindre des équipes de développement plus grandes",
        "Oser poser des questions plus tôt, sans voir cela comme un échec",
      ],
    },
    project: [
      {
        title: "MPMT",
        url: "/projects/mpmt"
      },
      {
        title: "T-Source",
        url: "/projects/tsource"
      },
      {
        title: "Wahis",
        url: "/projects/wahis"
      },
    ]
  },
];