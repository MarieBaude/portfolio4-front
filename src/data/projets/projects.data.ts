import { Project } from "./projects.types";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Wahis",
    mainImage: "http://localhost:3000/public/images/Rectangle17.png",
    summary: "Plateforme de surveillance des maladies animales pour l'OMSA",
    tags: ["Katalon", "Q.A", "Test automatisé", "End-to-end"],
    def: "L'Organisation Mondiale de la Santé Animale (OMSA), fondée en 1924, est l'autorité internationale de référence pour la surveillance des maladies animales. Son application Wahis est une plateforme critique qui permet aux pays membres de déclarer, suivre et visualiser en temps réel les foyers de maladies à impact sanitaire et économique. Ma mission au sein de ce projet a consisté à développer et maintenir une suite de tests end-to-end automatisés visant à garantir la fiabilité et la stabilité de cette application essentielle. La stack technique pour cette automatisation reposait sur le framework Katalon.",
    obj: "La complexité fonctionnelle de Wahis entraînait un risque élevé de régressions à chaque déploiement, nécessitant auparavant des tests manuels longs et coûteux. L'objectif était de palier ce problème en automatisant les vérifications des processus clés, pour sécuriser les livraisons sans ralentir le cycle de développement. Le défi technique reposait sur la création de tests à la fois exhaustifs pour la nouvelle section SMR (Semester Maintenance Report) et suffisamment robustes pour s'intégrer à une pipeline CI/CD, limitant ainsi les interventions manuelles et les risques d'erreur.",
    step: [
      "Plan de test : J'ai débuté par l'élaboration d'un plan de test, basé sur l'analyse des EPIC et User Stories. L'objectif était d'optimiser la couverture fonctionnelle en regroupant plusieurs scénarios métier dans des tests end-to-end robustes, plutôt que de suivre une approche atomique par user story. Ce plan a été présenté et validé en réunion avec l'équipe cliente, garantissant son alignement avec leurs attentes et les fonctionnalités les plus sensibles.",
      "Développement des tests automatisés : J'ai intégralement codé une suite de 28 tests end-to-end, cette méthode, bien que plus exigeante que le record & playback a permis de créer des tests plus robustes et adaptés. Actions réalisées : validation de traduction multilingue, vérification d'ordre alphabétique, contrôle des sections obligatoires, tests d'interface, modales, droits utilisateurs, changements d'état, éditions, formats de données et exports PDF.",
      "Réunion client : Des réunions hebdomadaires étaient organisées avec l'équipe cliente en charge des tests manuels. Je présentais l'avancement des tests automatisés et soumettais le planning des fonctionnalités à tester la semaine suivante, permettant d'ajuster la feuille de route en fonction des retours d'expérience terrain.",
      "Gestion projet : Chaque test était documenté dans un ticket Jira dédié, lié aux user stories. J'assurais également la rédaction de rapports détaillés pour le client, mettant en lumière les échecs de tests et leur origine, avec création des tickets associés pour les développeurs.",
      "Maintenance et évolution (TMA) : En phase de recette puis de maintenance, j'ai veillé à la stabilité de la suite de tests : exécution pré-déploiement, adaptation des scénarios face aux évolutions de l'application et investigation des anomalies."
    ],
    actor: [
      "Client (OMSA) : Collaboration étroite avec les équipes de testeurs manuels, participants actifs aux réunions hebdomadaires, fournissant des retours précieux sur les fonctionnalités testées et orientant les priorités.",
      "Cheffe de projet : Gestion opérationnelle du projet : suivi rigoureux des tickets Jira, contrôle du temps alloué, et coordination des livrables.",
      "Développeurs : Interaction via la remontée structurée des bugs identifiés lors des campagnes de test.",
      "Directeur Adjoint : Assurait un suivi des travaux et intervenait comme référent sur Katalon en cas de blocages."
    ],
    me: "Ce projet a été une opportunité de montée en compétence sur les tests end-to-end et la qualité logicielle. Bien que débutant totalement sur Katalon, j'ai su rapidement utilisé l'outil pour concevoir et exécuter une batterie de tests complexes. Cette expérience m'a permis de découvrir le métier d'ingénieur QA, la gestion de projet avec Jira en conditions réelles, ainsi que la relation client sur un projet d'envergure internationale. J'ai consolidé mes compétences techniques tout en développant mon autonomie et mon sens des responsabilités.",
    company: "Pour l'entreprise : Sécurisation des mises en production grâce à une suite de tests automatisés fiables et complets. Satisfaction client : l'OMSA a salué la qualité des rapports détaillés et la fiabilité des validations pré-déploiement. Pérennisation du contrat : la réussite de cette mission s'est concrétisée par une reconduction pour la phase de TMA, incluant la maintenance et l'évolution des tests automatisés.",
    next: "Une passation complète du projet a été effectuée vers un collègue spécialisé en QA, qui a repris la charge de la TMA et de l'exécution des tests. Les suites de test automatisées devront évoluer pour s'adapter à une importante refonte technique ('clean code'), nécessitant la mise à jour des scripts existants. De nouveaux tests sont également prévus.",
    crit: "Cette expérience a été une réelle découverte positive du métier d'ingénieur QA et de l'importance stratégique des tests automatisés dans un projet d'envergure. Commencer par cette activité, avec des scénarios initialement simples, m'a offert une entrée progressive dans le monde professionnel, limitant le stress tout en consolidant mes bases en programmation. Cependant, le choix de l'outil Katalon a représenté un frein certain. Son instabilité fréquente (plantages récurrents) ont parfois entravé ma productivité. Ayant expérimenté Playwright, je trouve ce dernier plus moderne, plus fiable et mieux adapté. Concevoir des scénarios complets, anticiper les cas d'erreur et garantir la stabilité des tests demande une rigueur et une logique qui n'a rien à envier au développement pur.",
    skillIds: [1, 2],
  },
  {
    id: 2,
    title: "T-Source",
    mainImage: "http://localhost:3000/public/images/Rectangle17.png",
    summary: "Application de traçabilité des matières premières pour Takasago",
    tags: ["Angular", "Spring Boot", "MariaDB", "Full-stack"],
    def: "T-Source est une application web développée from scratch pour Takasago, entreprise en parfumerie. Elle centralise et modernise la traçabilité des matières premières, remplaçant un système Excel obsolète par une solution digitale sécurisée et ergonomique. L'application, conçue en anglais pour un déploiement international, se compose de six interfaces distinctes. Une page de connexion sécurisée donne accès à un dashboard personnalisable, incluant un message éditable. Quatre autres pages dédiées affichent des tableaux interactifs, permettant la création, modification, import et export de données, ainsi qu'une historisation complète des actions.",
    obj: "Face aux limites d'un fichier Excel (risques d'erreurs, manque de traçabilité, accessibilité réduite), Takasago a sollicité une solution sur mesure pour standardiser et sécuriser la gestion des matières premières. L'objectif principal était de remplacer cet outil obsolète par une application web intuitive, offrant une vision centralisée et fiable des données. Plus qu'une simple migration, il s'agissait de repenser l'expérience utilisateur : recherche optimisée, gestion des rôles, historisation des modifications et exports dynamiques. Un défi technique majeur résidait dans la transition sécurisée des données existantes, sans interruption opérationnelle. L'enjeu dépassait le cadre technique : l'application devait s'imposer comme un standard auprès des équipes dispersées dans le monde, conciliant uniformité fonctionnelle et flexibilité pour s'adapter aux spécificités locales.",
    step: [
      "Cadrage et conception : Atelier kick-off avec la cliente pour définir les besoins fonctionnels et techniques. Points d'avancement réguliers pour valider les orientations et prioriser les fonctionnalités. Modélisation de la base de données et gestion des données via DBeaver.",
      "Développement des fonctionnalités principales : Système d'authenthentication repris d'un autre projet avec gestion des rôles. Création de tableaux interactifs avec double en-tête fixe, colonnes fixes, tri sur chaque colonne et lignes cliquables pour accéder aux détails. Implémentation d'un système de filtrage avancé avec combinaison de jusqu'à 3 critères dynamiques et filtres contextuels.",
      "Expérience utilisateur et gestion des données : Dashboard personnalisable avec message éditable en temps réel. Développement de modales de création avec validation front/back, d'édition pré-remplie avec duplication et masquage des lignes, et système de verrouillage pour éviter les conflits d'édition. Historisation des créations et modifications. Amélioration des fonctionnalités d'import pour plus de rapidité.",
      "Livraison et déploiement : Mise en production de l'application et documentation complète pour les utilisateurs finaux."
    ],
    actor: [
      "Client (Takasago) : Collaboration directe avec la cliente tout au long du projet. Participation active au kick-off pour cadrer les besoins et points d'avancement réguliers pour présenter les fonctionnalités et collecter les feedbacks.",
      "Cheffe de projet : Supervision légère en raison de la taille réduite du projet. Gestion via système de tickets pour les tâches principales, sans suivi ou replanification intensive.",
      "Lead développeur : Intervention ciblée sur les fonctionnalités complexes comme l'import de données, l'implémentation de la gestion des pièces jointes (4ᵉ tableau), et support ponctuel pour résoudre des blocages techniques."
    ],
    me: "Ce projet m'a permis d'acquérir des compétences techniques avec un projet full-stack complet développé from scratch. J'ai pu voir les enjeux de performance (optimisation des imports, gestion de vraies données) et gagner une expérience significative en gestion client, résolution de conflits et recueil de besoins. La communication avec une équipe interne a également été un aspect important de cette mission.",
    company: "Pour l'entreprise : Code réutilisable produit pour de futurs projets. Fidélisation d'un client satisfait qui a formulé de nouvelles demandes de propositions commerciales suite à la réussite de ce projet.",
    next: "Aujourd'hui l'application T-Source est opérationnelle et utilisée par les équipes de Takasago. Elle remplace définitivement l'ancien système Excel. Plusieurs améliorations sont déjà planifiées : refonte du système d'authentification pour harmoniser la connexion et améliorer la sécurité, sécurisation renforcée des rôles côté back-end, amélioration du verrouillage des modales afin d'afficher l'utilisateur, et création d'une interface visuelle dédiée à l'historique des modifications.",
    crit: "J'ai su m'adapter à un projet complexe en autonomie, en développant rapidement les compétences nécessaires. Malgré les tensions, j'ai également appris à prioriser les demandes client tout en maintenant un dialogue professionnel. La gestion du temps et de la communication reste mon principal point d'amélioration. Une meilleure anticipation des difficultés techniques aurait permis d'impliquer le lead dev plus tôt sur les fonctionnalités critiques comme l'import de données. Si c'était à refaire, j'instaurerais des mails de synthèse réguliers avec résumé des fonctionnalités développées, liste des prochaines étapes et points de vigilance. Cette expérience m'a montré qu'un projet réussi se joue autant sur la technique que sur une bonne communication.",
    skillIds: [3, 5, 7],
  },
  {
    id: 3,
    title: "MPMT",
    mainImage: "http://localhost:3000/public/images/Rectangle17.png",
    summary: "Outil interne de gestion de projets",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "CI/CD", "Gestion de projets"],
    def: "Project Management Tool (PMT) est une application web collaborative développée au sein de Code Solutions. Elle permet aux équipes de développement logiciel de planifier, suivre et collaborer efficacement sur leurs projets. Conçue en Angular (frontend) et Spring Boot (backend), l'application s'appuie sur une base de données relationnelle et un déploiement industrialisé via Docker et CI/CD. Elle répond à la nécessité d'un outil centralisé, intuitif et évolutif pour remplacer les suivis manuels dispersés.",
    obj: "Les limites des suivis traditionnels (emails, fichiers partagés, absence de traçabilité) rendaient difficile la coordination entre équipes. L'objectif était de fournir une plateforme unique, combinant gestion des utilisateurs, projets et tâches, avec des rôles et permissions clairs. L'enjeu : garantir la fiabilité et la simplicité d'usage pour des profils variés (administrateurs, membres, observateurs). Les principaux risques concernaient la complexité technique (synchronisation front/back, cohérence des données, couverture de tests) et la montée en charge (nombre croissant de projets et de tâches).",
    step: [
      "Cadrage et conception : Conception du schéma relationnel et script SQL avec données de test. Mise en place d'un kanban sur Trello pour le suivi des tâches de développement.",
      "Développement des fonctionnalités principales : Création et gestion de projets (nom, description, dates, rôles attribués). Gestion des rôles et permissions (administrateur, membre, observateur). Tableau de bord affichant les tâches par statut. Système complet de gestion des tâches avec création, mise à jour, assignation, priorités, échéances et visualisation unitaire.",
      "Fonctionnalités avancées : Implémentation de notifications par email lors de l'assignation des tâches. Système d'historisation des modifications sur les tâches pour assurer la traçabilité complète des actions.",
      "Tests et qualité : Réalisation de tests unitaires backend avec JUnit et frontend avec Jest. Atteinte de l'objectif de 60% de couverture de code pour garantir la fiabilité de l'application.",
      "Industrialisation et déploiement : Dockerisation complète du frontend et backend. Publication des images sur Docker Hub. Mise en place d'une pipeline CI/CD avec GitHub Actions automatisant le build, les tests et le déploiement. Documentation complète de déploiement dans un readme.md."
    ],
    actor: [
      "École/Formation : Fourniture de l'énoncé du projet et correction du travail dans le cadre d'une validation de compétence scolaire.",
      "Développeuse (moi-même) : Réalisation en autonomie complète de toutes les étapes du projet : conception, développement, tests, déploiement et documentation."
    ],
    me: "Cette expérience m'a permis de mener un projet full-stack complet, combinant Angular, Spring Boot et Docker. J'ai consolidé mes compétences pour la documentation et le suivi des livrables. Travailler seule sur toutes les parties m'a donné une expérience complète et une vision globale des contraintes techniques et organisationnelles. J'ai appris à organiser mon temps, anticiper les problèmes et respecter des consignes rigoureusement.",
    company: "Projet académique : Ce projet a été réalisé dans le cadre d'une formation, principalement à but pédagogique. Il démontre la capacité à mener un projet complexe de A à Z et sert de référence technique pour les compétences full-stack acquises.",
    next: "Le projet pourra être amélioré en ajoutant la sécurisation de l'inscription et de la connexion, en augmentant la couverture des tests et en enrichissant les fonctionnalités (notifications avancées). La structure mise en place permet de continuer l'évolution de l'application efficacement. Le code produit pourra être réutilisé comme base pour de futurs projets de gestion interne.",
    crit: "Le projet a permis de valider la chaîne complète conception → développement → tests → déploiement. L'approche full-stack m'a offert une vision holistique du développement d'application. Les principaux apprentissages concernent l'organisation du temps, l'anticipation des problèmes techniques et le respect rigoureux des spécifications. La gestion autonome du projet a renforcé ma capacité à prendre des décisions techniques appropriées à chaque étape du développement.",
    skillIds: [3, 5, 6, 8], // À adapter : Angular, Spring Boot, Docker, Qualité du code
  },
  {
    id: 4,
    title: "Nowelia",
    mainImage: "http://localhost:3000/public/images/Rectangle17.png",
    summary: "Plateforme communautaire de Web Novels",
    tags: ["NestJS", "Next.js", "React Native", "Electron", "PostgreSQL", "Docker"],
    def: "Nowelia est une application complète de lecture et d'écriture de _Web Novels_, développée pour offrir une expérience communautaire autour des œuvres littéraires numériques. La plateforme web permet aux utilisateurs de découvrir, lire, commenter et créer des histoires textuelles, tandis que des applications mobile (React Native) et desktop (Electron) adressent des besoins spécifiques de consommation audio et de modération.",
    obj: "L'objectif du projet était de créer une application capable de supporter simultanément pas mal de clients tout en garantissant la sécurité et la fiabilité des données. Il fallait offrir une expérience utilisateur optimisée, avec un frontend web agréable, performant et responsive, et en fournissant une API robuste et documentée. Les enjeux incluaient la gestion des droits utilisateurs, la sécurisation des données via authentification JWT et validation stricte, et la préparation du système à une montée en charge potentielle. Les risques concernaient la multiplication d'interfaces entre le client web, mobile et desktop, ainsi que la livraison dans les délais malgré la diversité des plateformes et des technologies utilisées.",
    step: [
      "Conception et architecture : Modélisation des données (UML de séquence + Merise). Choix d'une stack cohérente : Nest.js + Prisma + Next.js + TailwindCSS + Electron + React Native + PostgreSQL.",
      "DevOps et déploiement : Mise en place d'un déploiement continu avec GitHub Actions pour l'API et la base de données. Déploiement de PostgreSQL dans un conteneur Docker avec docker-compose. Hébergement sur VPS OVH avec configuration Docker pour faciliter la maintenance.",
      "Développement backend : Implémentation des CRUD (users, novels, chapters, comments, tags) avec NestJS. API search avancée avec filtres multiples (tags, auteurs, type). Tests unitaires et d'intégration avec Jest. Documentation complète avec Swagger.",
      "Développement frontend web : Intégration responsive des pages avec Next.js. Gestion du SSG (Static Site Generation) et des hooks React. Formulaire de création d'histoire avec upload d'image et système de tags multiples.",
      "Applications multi-plateformes : Développement de l'application Electron avec authentification par rôles. Mise en place de l'application React Native avec authentification et intégration de la page d'accueil.",
      "Gestion de projet agile : Organisation des daily meetings. Mise en place des rituels Scrum toutes les deux semaines (sprint planning, review, retrospective). Utilisation de Jira pour le suivi des tickets et GitHub pour la collaboration."
    ],
    actor: [
      "Lead Developer : Responsable de la conception, architecture, développement backend, frontend et déploiement.",
      "Développeur : En charge de la méthodologie agile et du développement frontend.",
      "Développeuse / PO / Scrum Master (Moi) : Conception, développement backend, frontend, déploiement, et coordination de l'équipe complète."
    ],
    me: "Ce projet m'a permis de mener la conception from scratch d'une application complexe et d'acquérir la maîtrise d'une stack fullstack moderne (NestJS, Next.js, Docker). J'ai également développé mes compétences en gestion de projet agile au sein d'une équipe. Cette expérience a renforcé ma rigueur technique et ma vision globale d'un projet fullstack, tout en développant mon autonomie et ma capacité à coordonner les travaux d'une équipe.",
    company: "Projet entrepreneurial : Nowelia représente une preuve de concept complète pour une plateforme de contenu littéraire numérique. Le code produit démontre la capacité à architecturer et développer une application multi-plateforme scalable, servant de base solide pour de futurs projets similaires ou une éventuelle commercialisation.",
    next: "Je pense recommencer ce projet de zéro avec de nouvelles technologies et mes compétences actuelles. Le code est versionné et documenté, permettant une reprise facilitée du projet. Certains composants et documentations restent exploitables pour de futures itérations. L'architecture mise en place permet d'envisager facilement l'ajout de nouvelles fonctionnalités comme les systèmes de recommandation, les abonnements premium, ou l'intégration de contenus audio.",
    crit: "Cette expérience m'a permis de comprendre l'importance d'une architecture solide et d'une documentation complète pour garantir la maintenabilité et l'évolutivité d'une application. J'ai appris à estimer les délais de manière réaliste, à structurer mes tâches et à anticiper les complexités. Les principaux points d'amélioration concernent l'UX de l'application et l'UI qui nécessite un design plus impactant. Le choix des technologies pourrait être optimisé pour de meilleures performances. Ce projet a validé ma capacité à manager un projet technique complexe de A à Z.",
    skillIds: [4, 6, 7, 8, 9], // À adapter : NestJS, Docker, React, Agilité, Qualité du code
  },
  {
    id: 5,
    title: "Soon",
    mainImage: "http://localhost:3000/public/images/Rectangle17.png",
    summary: "--",
    tags: [" ", " ", " "],
    def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    obj: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    step: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet dolor libero, sed egestas enim egestas in. Mauris ac massa at felis pharetra sodales fringilla vitae risus. Nullam bibendum commodo nisl, non suscipit arcu vehicula quis. ",
      "Curabitur ac mi et neque efficitur molestie. Vestibulum aliquet dolor libero, sed egestas enim egestas in. Mauris ac massa at felis pharetra sodales fringilla vitae risus. Nullam bibendum commodo nisl, non suscipit arcu vehicula quis. ",
      "Praesent eget erat id elit lobortis aliquet. Vestibulum aliquet dolor libero, sed egestas enim egestas in. Mauris ac massa at felis pharetra sodales fringilla vitae risus.",
    ],
    actor: [
      "Machin (Directeur) : A fait x et y sur le projet.",
      "Donec efficitur arcu in tortor finibus sollicitudin.",
    ],
    me: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    company:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    next: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    crit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor laoreet metus, id volutpat tellus hendrerit vel. Maecenas lectus lectus, viverra eget pharetra in, porttitor nec orci. Maecenas blandit luctus odio id vehicula. Nam in mi vel est elementum egestas. Etiam a metus sed magna commodo venenatis sit amet gravida arcu. Pellentesque vel fermentum nisi. Proin non neque vitae nisi vestibulum consequat nec ac lectus. Duis at ultrices nulla.",
    skillIds: [1],
  },
];
