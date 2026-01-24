import { Project } from "./projects.types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "wahis",
    title: "Wahis",
    mainImage: "/images/projects/wahis.jpg",
    summary: "Plateforme de surveillance des maladies animales pour l'OMSA",
    tags: ["Katalon", "Q.A", "Test automatisé", "End-to-end"],

    presentation: "J'ai travaillé pour l'Organisation Mondiale de la Santé Animale (OMSA), une autorité internationale. Leur application Wahis est une plateforme permettant aux pays membres de **déclarer, suivre et visualiser en temps réel** les foyers de maladies à impact sanitaire et économique. Ma mission au sein de ce projet a consisté à développer et maintenir une suite de tests end-to-end automatisés visant à garantir la fiabilité et la stabilité de cette application. J'ai créé 28 tests couvrant les processus clés sur la nouvelle section SMR (Semester Maintenance Report). Réalisé de janvier à octobre 2024 dans le cadre de mon alternance Master Expert en Ingénierie du Logiciel au sein de l'ESN Kapela. J'ai travaillé sur une période de 10 mois suivie de 2 mois de TMA. En parallèle, je développais de petits projets de développement.",

    objectives: [
      {
        title: "Développer une suite de tests end-to-end automatisés pour sécuriser les livraisons de Wahis.",
        items: [
          "28 tests couvrant les processus clés",
          "Focus principal : section SMR (Semester Maintenance Report)",
          "Contrainte : version gratuite de Katalon (nombre de tests limité)",
          "Regrouper plusieurs scénarios métier dans des tests end-to-end",
          "Optimiser pour respecter la limitation de Katalon",
          "Développer et maintenir les tests automatisés",
          "Exécuter régulièrement selon le calendrier de déploiement",
          "Remonter les bugs de manière structurée",
          "Présenter l'avancement hebdomadaire au client",
          "Adapter les scénarios face aux évolutions de l'application"
        ]
      },
    ],

    context: {
      period: "Janvier - Octobre 2024 + 2 mois TMA",
      framework: "Alternance Mastère Expert en Ingénierie Logiciel chez Kapela",
      mode: "Hybride (présentiel/remote)",
      team: [
        "Moi : développement et maintenance des tests",
        "Cheffe de projet : gestion et suivi Jira",
        "Directeur Adjoint : référent technique Katalon",
        "Ingénieur QA : accompagnement ponctuel (référent Playwright)"
      ],
      organization: [
        "Réunions hebdomadaires avec équipe OMSA (3 testeurs manuels)",
        "Suivi du temps par cheffe de projet",
        "Jira pour gestion des tickets",
        "Exécution des tests selon calendrier de déploiement",
        "Remontée structurée des bugs aux développeurs"
      ],
      stack: [
        "Tests : Katalon (version gratuite)",
        "Gestion projet : Jira"
      ]
    },

    stakes: [
      "La plateforme servant d'outil de surveillance mondiale, chaque régression ou bug non détecté pouvait affecter le travail de l'OMSA",
      "Pour Kapela, l'enjeu était de démontrer son expertise en qualité logicielle auprès d'un important client et assurer la pérennisation d'un contrat à long terme",
      "Sur le plan personnel, c'était une opportunité majeure de découverte du métier d'ingénieur QA et de montée en compétence sur les tests automatisés end-to-end"
    ],

    risks: [
      "Instabilité de Katalon : plantages récurrents, lenteur d'exécution, problèmes de performance généraux",
      "Fragilité des tests : dépendance forte aux XPath rendant les tests fragiles face aux évolutions frontend",
      "Pression hebdomadaire : réunions client chaque semaine nécessitant de présenter des avancements",
      "Première expérience QA : découverte du métier avec courbe d'apprentissage",
      "Premier contact client direct : communication hebdomadaire avec pression de performance"
    ],

    phases: [
      {
        title: "Phase de cadrage et plan de test",
        description: "Élaboration et validation du plan de test avec le client",
        achievements: [
          "Analyse des EPICs et User Stories fournis par le directeur adjoint",
          "Élaboration d'un plan de test détaillé en français et anglais",
          "Prévision d'une fourchette de 20 à 30 tests couvrant les fonctionnalités critiques",
          "Optimisation : regroupement de plusieurs scénarios métier dans des tests end-to-end",
          "Présentation et validation du plan en réunion avec l'équipe cliente"
        ]
      },
      {
        title: "Phase de développement des tests automatisés",
        description: "Création complète de la suite de tests avec Katalon",
        achievements: [
          "Développement complet d'une suite de 28 tests end-to-end",
          "Écriture de script manuel avec un minimum de record & playback pour des tests plus précis",
          "Validation de la traduction multilingue sur certaines pages",
          "Vérification de l'ordre alphabétique des listes déroulantes et tableaux",
          "Tests d'ouverture/fermeture des modales et comportements par défaut",
          "Tests avec comptes aux droits restreints",
          "Validation des changements d'état des rapports",
          "Tests d'export PDF et validation du nom des fichiers générés"
        ]
      },
      {
        title: "Rituels client",
        description: "Animation des points hebdomadaires avec l'équipe OMSA",
        achievements: [
          "Présentation de l'avancement détaillé des tests réalisés toutes les semaines",
          "Soumission du planning des fonctionnalités à tester la semaine suivante",
          "Recueil des feedbacks sur scénarios critiques et fonctionnalités sujettes aux régressions",
          "Ajustement des priorités de testing et d'éventuel nouveau besoin"
        ]
      },
      {
        title: "Gestion de projet et remontée de bugs",
        description: "Suivi rigoureux et documentation des anomalies",
        achievements: [
          "Suivi du temps par la Cheffe de projet",
          "Analyse des échecs de tests : origine (régression, bug existant, nouveau bug)",
          "Création de tickets bugs documentés pour les développeurs",
          "Vérification des corrections apportées aux problèmes"
        ]
      },
      {
        title: "TMA et passation",
        description: "Maintenance et transmission du projet",
        achievements: [
          "Exécution régulière selon calendrier de déploiement",
          "Adaptation des scénarios face aux évolutions de l'application",
          "Organisation d'une réunion de passation de 3-4 heures avec collègue QA",
          "Explication de l'organisation et présentation des spécificités de Wahis"
        ]
      }
    ],

    actors: [
      {
        role: "Client (OMSA)",
        description: "Les trois testeurs manuels de l'application ont participé activement aux réunions hebdomadaires, je leur présentais les tests faits en détails et sur lesquels j'allais travailler par la suite. Ils me remontaient les fonctionnalités qui avaient déjà subi des régressions ou encore celles complexes qui pouvaient en subir aussi."
      },
      {
        role: "Cheffe de projet",
        description: "Elle assurait la gestion avec un suivi des tickets Jira et des points hebdomadaires."
      },
      {
        role: "Directeur Adjoint",
        description: "Il effectuait un suivi global des travaux et intervenait comme référent technique Katalon en cas de blocages."
      },
      {
        role: "Ingénieur Q.A",
        description: "Il était disponible pour un accompagnement ponctuel, permettant de débloquer des situations techniques complexes et de partager des bonnes pratiques."
      },
      {
        role: "Développeurs",
        description: "Lors du passage de la pipeline certains tests remontaient des bugs, j'en notifiais les développeurs via des tickets Jira avec captures d'écran et étapes de reproduction."
      }
    ],

    results: {
      personal: {
        technical: [
          "Tests end-to-end automatisés avec Katalon (28 tests développés)",
          "Découverte concrète du métier d'ingénieur QA",
          "Apprendre à travailler avec un outil que je n'appréciais pas (Katalon instable) mais nécessaire au projet"
        ],
        organizational: [
          "Consolidation de la gestion de projet avec Jira",
          "Communication régulière avec le client (réunions hebdomadaires)",
          "Présentation d'avancements et de plannings",
          "Autonomie significative et sens des responsabilités"
        ],
        pride: "Cette expérience a confirmé mon intérêt pour la qualité logicielle et m'a ouvert une perspective professionnelle supplémentaire. Bien que je me sois orientée vers le développement par la suite, cette compréhension du testing reste un atout précieux."
      },
      company: {
        achievements: [
          "Suite de 28 tests automatisés couvrant les processus critiques",
          "Exécution pré-déploiement systématique réduisant drastiquement les régressions",
          "Remontée structurée des bugs permettant corrections avant production",
          "Stabilité garantie d'une application critique de surveillance mondiale"
        ],
        satisfaction: [
          "Qualité des rapports détaillés saluée",
          "Fiabilité des validations pré-déploiement appréciée",
          "Réactivité face aux anomalies reconnue",
          "Communication régulière et transparente valorisée"
        ],
        impact: "Reconduction pour phase de TMA, contrat toujours en cours aujourd'hui (janvier 2026), relation commerciale consolidée avec client international, expertise en qualité logicielle démontrée."
      }
    },

    future: {
      immediate: [
        "Passation complète effectuée vers collègue QA spécialisé (3-4 heures)",
        "Transmission du plan de test détaillé (français et anglais)",
        "Explication de l'organisation interne et de l'application",
        "Identification des zones sensibles aux régressions",
        "Brief sur relation client et animation des points hebdomadaires"
      ],
      midTerm: [
        "Clean code pour optimiser le code de développement effectué",
        "Grosse maintenance des tests suite au clean code",
        "Étude d'un changement de technologie finalement abandonné",
        "Mise en place de nouveaux tests pour évolutions de fin de projet",
        "Clean code poursuivi avec premiers batchs réussis",
        "Cinq jours de maintenance prévus tous les mois"
      ],
      current: [
        "TMA toujours en cours (janvier 2026)",
        "Plus de nouvelles fonctionnalités",
        "Maintenance des tests chiffrée à deux jours par mois",
        "Jours supplémentaires dédiés aux mises à jour du clean code"
      ]
    },

    critique: [
      "Je suis contente d'avoir travaillé sur un tel projet. C'était mon premier projet en entreprise et projet de QA, mon premier contact direct avec une clientèle. C'était aussi découvrir un nouvel outil, ne pas l'apprécier mais tout de même devoir travailler avec tout au long du projet.",
      "La technologie, même si elle était pleine de défauts, n'était pas dure à prendre en main. J'avais déjà une idée du métier de QA et des différences avec le développement. Le code est moins complexe mais cette spécialité demande plus de compétences transverses : une attention aux détails, chercher l'expérience utilisateur, savoir anticiper les usages, la patience de faire un travail répétitif.",
      "La relation client, même si stressante au début, s'est bien passée. Le client était content du travail de Kapela, ce qui donnait une ambiance détendue aux réunions hebdomadaires. Présenter l'avancement chaque semaine m'a appris à structurer ma communication et à valoriser mon travail.",
      "L'outil Katalon n'était pas un bon choix d'outil mais c'était formateur de l'utiliser. Dans le monde du travail, on ne peut pas toujours choisir sur quoi l'on travaille, quelle technologie utiliser.",
      "Au vu de tous les problèmes rencontrés, j'étais d'avis de passer la partie SMR des tests sur Playwright. Certes, cela scindait les tests dans deux technologies, mais : le QA était opérationnel sur les deux, Playwright est entièrement gratuit sans limite et plus stable, nos DevOps faisaient déjà tourner des pipelines avec, le portage aurait été rapide avec seulement cinq tests existants, le temps de développement et de maintenance aurait été réduit.",
      "Au final, les responsables ont décidé de garder Katalon mais de ne plus l'utiliser à l'avenir. Cette décision m'a appris que même avec de bons arguments techniques, les contraintes de projet (temps, budget) peuvent prévaloir."
    ],

    skillIds: ["katalon", "agile"]
  },
  {
    id: "tsource",
    title: "T-Source",
    mainImage: "/images/projects/tsource.png",
    summary: "Application de traçabilité des matières premières pour Takasago",
    tags: ["Angular", "Spring Boot", "MariaDB", "Full-stack"],

    presentation: "T-Source est une application web de **traçabilité** des matières premières développée from scratch pour Takasago, entreprise internationale spécialisée dans la parfumerie. Elle remplace un système Excel obsolète et peu ergonomique en centralisant la gestion des articles, fournisseurs et commandes. L'application, conçue en anglais pour un déploiement international, comprend six interfaces principales, tournant majoritairement autour de tableaux et formulaires. Réalisé chez Kapela entre janvier et juin 2025 en alternance, ce projet constitue ma première expérience de développement en entreprise après avoir travaillé en QA. Prévu initialement pour trois mois, le projet s'est étendu à six mois en raison d'un chiffrage sous-estimé et de changements de périmètre. J'ai mené le développement seule durant plusieurs mois avant l'arrivée d'un développeur senior pour support technique.",

    objectives: [
      {
        title: "Objectifs",
        items: [
          "Créer une plateforme centralisée de traçabilité remplaçant un système Excel obsolète"
        ]
      },
      {
        title: "Périmètre fonctionnel",
        items: [
          "Gestion de quatre tableaux : Articles, Fournisseurs, Article-Fournisseur, Sources",
          "Chaque tableau avec : création, modification, recherche, import/export, historisation"
        ]
      },
      {
        title: "Fonctionnalités clés",
        items: [
          "Recherche avancée : jusqu'à 3 filtres combinables avec valeurs contextuelles",
          "Import massif : migration des données Excel et ajout rapide",
          "Historisation : traçabilité complète (auteur, date, anciennes valeurs)",
          "Verrouillage : empêcher les modifications simultanées d'une même ligne",
          "Permissions : gestion granulaire champ par champ"
        ]
      },
      {
        title: "Contraintes",
        items: [
          "Application en anglais (déploiement international)",
          "Sécurité renforcée",
          "Performance sur tableaux de milliers de lignes"
        ]
      }
    ],

    context: {
      period: "Janvier - Juin 2025 (prévu 3 mois, étendu à 6)",
      framework: "Alternance chez Kapela (ESN prestataire de Takasago)",
      mode: "Premier projet de développement en entreprise après QA",
      team: [
        "Développeuse principale (moi) : seule au début, développement frontend Angular + backend Spring Boot, conception BDD, communication client",
        "Développeur senior : arrivé en cours de projet, fonctionnalités complexes (pièces jointes), conseils bonnes pratiques"
      ],
      organization: [
        "Système de tickets pour tâches principales",
        "Points d'avancement réguliers avec le client Takasago",
        "Tickets parfois peu détaillés nécessitant clarifications fréquentes",
        "Développeur senior intervenu en cours de projet pour support technique"
      ],
      stack: [
        "Frontend : Angular 15",
        "Backend : Spring Boot",
        "Base de données : MariaDB (gestion via DBeaver)",
        "Versioning : Git"
      ]
    },

    stakes: [
      "Pour Kapela, le projet représentait une opportunité de fidéliser un client majeur et de démontrer ses capacités techniques",
      "La qualité de livraison pouvait générer de nouvelles opportunités commerciales",
      "Le code développé constituait une base réutilisable pour de futurs projets",
      "Premier projet de développement en entreprise déterminant : monter rapidement en compétences sur Angular et Spring Boot",
      "Gérer la pression d'un client exigeant, les délais serrés, et développer mon autonomie face à des problèmes techniques complexes"
    ],

    risks: [
      "Migration Excel : risques d'incohérence des données lors de la migration ou perte de données",
      "Performances : tableaux de centaines/milliers de lignes sans pagination nécessitant optimisations",
      "Tickets peu détaillés : incompréhensions fonctionnelles et clarifications fréquentes nécessaires",
      "Changements de périmètre : impacts directs sur le planning",
      "Courbe d'apprentissage : découverte d'Angular et Spring Boot en janvier 2025",
      "Isolement technique : développement sans mentor direct durant les premiers mois",
      "Charge de travail : projet en parallèle des cours, pression temporelle, risque d'épuisement"
    ],

    phases: [
      {
        title: "Phase de cadrage et conception",
        description: "Mise en place initiale du projet",
        achievements: [
          "Modélisation de la base de données",
          "Mise en place de l'environnement de développement"
        ]
      },
      {
        title: "Phase de développement",
        description: "Développement complet de l'application avec toutes ses fonctionnalités",
        achievements: [
          "Reprise du système d'authentification d'un projet existant Takasago",
          "Message unique éditable sur la page dashboard",
          "Implémentation de la gestion des rôles utilisateurs",
          "Mise en place des permissions par champ pour l'édition",
          "Double en-tête fixe et colonnes fixes pour navigation fluide",
          "Système de recherche avancée : 3 filtres combinables avec valeurs contextuelles",
          "Création : formulaire avec indicateurs visuels des champs obligatoires",
          "Édition : pré-remplissage des données, options de duplication",
          "Verrouillage : empêchant l'ouverture simultanée par un autre utilisateur",
          "Optimisation critique de l'import : création de fonctions spécifiques avec traitement batch",
          "Historisation : capture automatique des anciennes valeurs à chaque modification"
        ]
      },
      {
        title: "Phase de tests et corrections",
        description: "Validation de l'application",
        achievements: [
          "Tests manuels fonctionnels (pas de tests automatisés par manque de temps)",
          "Corrections des régressions au fil du développement",
          "Ajustements suite aux feedbacks client"
        ]
      },
      {
        title: "Livrables finaux",
        description: "Mise en production de l'application",
        achievements: [
          "Application web complète déployée",
          "Code source Angular 15 + Spring Boot versionné sur Git",
          "Base de données MariaDB structurée et remplie",
          "Documentation technique fonctionnalités et schéma de base de données"
        ]
      }
    ],

    actors: [
      {
        role: "Client (Takasago)",
        description: "Le client participait activement au projet : présence au kick-off, réunions d'avancement régulières avec feedbacks sur les fonctionnalités développées, et formulation de demandes d'ajustements en cours de route. Le contexte était exigeant avec des attentes élevées et une vision métier spécifique au domaine de la parfumerie nécessitant des clarifications fréquentes."
      },
      {
        role: "Développeur senior",
        description: "Intervenu en cours de projet face aux difficultés rencontrées. Il a développé la fonctionnalité de gestion des pièces jointes, m'a apporté des conseils précieux sur les bonnes pratiques."
      },
      {
        role: "Cheffe de projet",
        description: "La cheffe de projet Kapela assurait une supervision via le système de tickets et participait aux points d'avancement. Malheureusement dû au faible budget, elle avait peu de temps de présence, d'où des tickets peu détaillés voire absents, une présence variable aux points d'avancement et pas de rituels agiles."
      },
      {
        role: "Moi",
        description: "J'ai assumé le rôle de développeuse principale, seule sur le projet au début. Je gérais l'intégralité du développement frontend Angular et backend Spring Boot, la conception de la base de données, ainsi que la communication avec le client."
      }
    ],

    results: {
      personal: {
        technical: [
          "Montée en compétences rapide sur Angular 15 et Spring Boot",
          "Optimisation des performances (traitement batch, requêtes SQL efficaces)",
          "Gestion de base de données MariaDB avec DBeaver",
          "Développement fullstack complet (frontend, backend, BDD)"
        ],
        organizational: [
          "Résilience professionnelle face à un client exigeant et des délais serrés",
          "Documentation complète malgré les contraintes de temps"
        ],
        pride: "L'expérience la plus marquante reste la confrontation aux conséquences de l'absence de tests : régressions fréquentes, stress lors des modifications, temps perdu en corrections. Cette leçon douloureuse mais efficace m'a convaincue que les tests ne sont pas négociables dans tout projet professionnel. Je suis fière de ne pas avoir abandonné et d'avoir persévéré."
      },
      company: {
        achievements: [
          "Application déployée et utilisée quotidiennement",
          "Remplacement définitif du système Excel",
          "Code source constituant une base technique pour futurs projets similaires de traçabilité"
        ],
        satisfaction: [
          "Takasago satisfait malgré les trois mois de retard initial",
          "Relation apaisée en fin de projet"
        ],
        impact: "Nouvelles opportunités commerciales : refonte du système d'authentification, optimisation des temps de chargement, gestion plus poussée des profils et permissions, interface dédiée à l'historique."
      }
    },

    future: {
      immediate: [
        "Application livrée avec toutes les fonctionnalités demandées",
        "Trois mois de retard mais client satisfait du résultat global",
        "Relation apaisée en fin de projet après tensions liées aux délais",
        "Documentation technique complète produite",
        "Équipe de maintenance prenant le relais pour évolutions futures"
      ],
      midTerm: [
        "Application utilisée quotidiennement par équipes Takasago",
        "Remplacement définitif du système Excel",
        "Nouvelles demandes d'évolution formulées",
        "Évolutions développées ou en cours par équipe de maintenance"
      ],
      current: [
        "T-Source reste en production et utilisé",
        "Application stable",
        "Évolutions demandées réalisées ou en cours de développement"
      ]
    },

    critique: [
      "T-Source m'a appris la réalité du développement en entreprise : tous les projets ne se déroulent pas dans des conditions idéales. Les contraintes sont réelles, la pression forte, et il faut naviguer dans l'incertitude tout en livrant. Cette expérience m'a forgé une résilience professionnelle que je n'aurais jamais développée dans un environnement parfait.",
      "Sur le plan technique, j'ai vécu une montée en compétences accélérée. L'absence de tests m'a fait comprendre leur valeur par leur manque : chaque régression coûtait du temps, chaque modification générait du stress.",
      "Sur le plan humain, j'ai appris que la communication est déterminante. Si je devais refaire ce projet, j'instaurerais dès le début des mails de synthèse réguliers au client, une demande de support technique immédiate plutôt qu'après plusieurs semaines de difficultés, et une insistance ferme sur les tests et les tickets détaillés.",
      "La leçon principale est qu'un projet réussi repose autant sur la technique que sur l'organisation et la communication.",
      "Cette expérience difficile reste une fierté, elle m'a préparée à affronter des situations professionnelles complexes avec plus de maturité et de stratégie."
    ],

    skillIds: ["angular", "spring", "docker", "agile"]
  },
  {
    id: "mpmt",
    title: "MPMT",
    mainImage: "/images/projects/mpmt.png",
    summary: "Outil interne de gestion de projets",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "CI/CD"],

    presentation: "MPMT est une application web collaborative de gestion de projet développée dans le cadre de mon titre d'Expert en Ingénierie du Logiciel à l'ISCOD. L'application centralise la gestion des utilisateurs, des projets et des tâches** avec un système de rôles et permissions. Les fonctionnalités incluent des tableaux Kanban, l'assignation de tâches, les notifications email, l'historisation des modifications et la génération de données de test. Réalisé entre janvier et mars 2025 en totale autonomie, ce projet académique relativement simple mais complet couvre toutes les étapes du cycle de développement moderne : de la conception à l'industrialisation. Le développement s'est effectué en parallèle des cours et de mon alternance, principalement sur mes soirées et week-ends.",

    objectives: [
      {
        title: "Applicatif",
        items: [
          "Plateforme de gestion de projet pour équipes de développement"
        ]
      },
      {
        title: "Fonctionnalités principales",
        items: [
          "Gestion centralisée : utilisateurs, projets, tâches",
          "Système de rôles : Administrateur, Membre, Observateur",
          "Tableaux Kanban pour suivi visuel",
          "Assignation et notifications email",
          "Historisation des modifications",
          "Génération de données de test"
        ]
      },
      {
        title: "Académique",
        items: [
          "Valider 3 compétences du référentiel Expert en Ingénierie du Logiciel",
          "C.10 : Développer les fonctionnalités en modélisant le domaine métier",
          "C.12 : Automatiser la construction (build, tests automatisés)",
          "C.13 : Industrialiser le développement (Docker, CI/CD)"
        ]
      },
      {
        title: "Livrables attendus",
        items: [
          "Schéma de base de données + scripts SQL",
          "Repository Git avec code complet",
          "Rapports de couverture de tests (minimum 60%)",
          "Dockerfiles + Docker Compose",
          "Pipeline CI/CD (GitHub Actions)",
          "README avec procédure de déploiement"
        ]
      }
    ],

    context: {
      period: "Janvier - Mars 2025",
      framework: "Étude de cas n°3 obligatoire du mastère Expert en Ingénierie du Logiciel (ISCOD)",
      mode: "Soirées et week-ends en parallèle des cours et alternance",
      team: [
        "Travail en totale autonomie (pas d'équipe, pas de formateur)"
      ],
      organization: [
        "Trello en mode Kanban : tickets avec catégories (frontend, backend, DevOps, tests, documentation)",
        "Développement par fonctionnalité",
        "Alternance front/back, tests après chaque étape"
      ],
      stack: [
        "Frontend : Angular",
        "Backend : Spring Boot",
        "Base de données : PostgreSQL",
        "Versioning : Git",
        "Industrialisation : Docker, GitHub Actions",
        "Tests : JUnit 5, Mockito, JaCoCo (backend), Jest (frontend)"
      ]
    },

    stakes: [
      "Livrer une application fonctionnelle et conforme aux consignes",
      "Application simple à utiliser avec design minimaliste",
      "Code facile à récupérer et corriger pour le formateur",
      "Documentation claire et procédure de déploiement bien expliquée",
      "Validation indispensable pour accéder à l'examen final",
      "Montrer le niveau de compétence atteint suite aux cours et expérience en entreprise",
      "Démontrer la maîtrise d'un cycle complet de développement moderne"
    ],

    risks: [
      "Couverture de tests minimum 60% : exigence stricte nécessitant tests unitaires et d'intégration complets",
      "Première industrialisation complète : Docker et CI/CD jamais pratiqués à ce niveau",
      "Sous-estimation du temps : risque de privilégier le développement au détriment de l'industrialisation",
      "Gestion du temps délicate : projet en plus des cours et alternance",
      "Absence de deadline stricte : risque de procrastination et mauvaise priorisation"
    ],

    phases: [
      {
        title: "Phase de cadrage",
        description: "Analyse et organisation du projet",
        achievements: [
          "Analyse de l'énoncé fourni : user stories et guidelines techniques",
          "Identification des livrables attendus",
          "Mise en place d'un Trello Kanban avec tickets détaillés"
        ]
      },
      {
        title: "Phase de conception",
        description: "Modélisation de la base de données et architecture",
        achievements: [
          "Identification des entités clés : User, Project, ProjectRole, Task, History",
          "Conception du schéma relationnel PostgreSQL",
          "Choix techniques : ENUM pour rôles, priorités, statuts",
          "Rédaction du script SQL de génération de structure"
        ]
      },
      {
        title: "Phase de développement",
        description: "Développement complet de l'application",
        achievements: [
          "Inscription et connexion avec authentification basique",
          "Gestion des projets : création, dashboard, détail projet",
          "Gestion des tâches : CRUD, assignation, tableau Kanban",
          "Notifications par email lors assignation tâche",
          "Historisation des modifications avec capture anciennes valeurs",
          "Génération données test avec Faker",
          "Configuration CORS pour communication Angular ↔ Spring Boot",
          "Design minimaliste avec Tailwind CSS et composants Flowbite"
        ]
      },
      {
        title: "Phase de tests",
        description: "Tests automatisés backend et frontend",
        achievements: [
          "Tests unitaires Services (JUnit 5, Mockito, JaCoCo)",
          "Tests intégration Controllers (Spring Boot Test, MockMvc)",
          "Couverture globale 75% backend",
          "Tests unitaires composants et services frontend (Jest)",
          "Couverture globale 97% frontend"
        ]
      },
      {
        title: "Phase d'industrialisation",
        description: "Dockerisation et CI/CD",
        achievements: [
          "Docker Compose : 3 services (PostgreSQL, backend, frontend)",
          "Dockerfile backend avec openjdk:17-jdk-slim",
          "Dockerfile frontend : Multi-stage build (Node 18 + Nginx Alpine)",
          "Publication images Docker Hub",
          "2 workflows GitHub Actions séparés (frontend et backend)",
          "Automatisation complète build/tests/déploiement"
        ]
      },
      {
        title: "Documentation",
        description: "Documentation complète du projet",
        achievements: [
          "Description projet, technologies, prérequis",
          "Procédure déploiement avec docker-compose",
          "Documentation API : Swagger UI",
          "Instructions claires pour le correcteur"
        ]
      }
    ],

    actors: [
      {
        role: "Évaluateur ISCOD",
        description: "L'évaluation s'est déroulée par remise d'un fichier ZIP contenant tous les livrables sur la plateforme ISCOD, sans présentation orale. Le projet a été validé avec le retour suivant du correcteur : 'Le projet est validé. Tous les livrables sont fournis et aucun problème disqualifiant n'est présent. Le projet a pu être déployé en local sans difficulté.'"
      },
      {
        role: "Moi",
        description: "Ce projet a été réalisé seule, sans équipe ni accompagnement de formateur. L'énoncé fourni par l'ISCOD présentait un scénario professionnel fictif au sein de l'entreprise 'Code Solutions'. J'ai travaillé en autonomie en m'appuyant sur mes connaissances acquises en alternance, notamment sur Angular et Spring Boot."
      }
    ],

    results: {
      personal: {
        technical: [
          "Projet full-stack complet de A à Z : conception BDD, développement frontend/backend, tests automatisés",
          "Industrialisation logicielle (Docker, GitHub Actions)",
          "Dockerfiles avec multi-stage build, orchestration Docker Compose",
          "Pipelines CI/CD automatisant build, tests et déploiement",
          "Couverture de tests : 75% backend, 97% frontend"
        ],
        organizational: [
          "Organiser son temps efficacement en parallèle des cours et de l'alternance",
          "Trello Kanban pour découper le travail en tâches gérables",
          "Anticiper les problèmes et prévoir du temps pour les parties complexes",
          "Respecter des consignes rigoureusement (livrables précis, couverture de tests, technologies imposées)"
        ],
        pride: "Même si ce projet était une obligation académique, le mener à terme avec succès en gérant toutes les étapes reste une expérience formatrice et gratifiante. J'ai validé les 3 compétences attendues (C.10, C.12, C.13), contribuant à l'obtention de mon titre d'Expert en Ingénierie du Logiciel."
      },
      company: {
        achievements: [],
        satisfaction: [],
        impact: "Projet académique"
      }
    },

    future: {
      immediate: [
        "Projet validé par correcteur ISCOD",
        "Tous les livrables fournis et déploiement sans difficulté",
        "Architecture complète et fonctionnelle",
        "Couverture de tests respectée (75% backend, 97% frontend)",
        "Industrialisation réussie (Docker, CI/CD)"
      ],
      midTerm: [
        "Projet non destiné à évoluer après évaluation",
        "Expérience formatrice réutilisée dans projets suivants et en entreprise",
        "Axes d'amélioration relevés intégrés dans pratique professionnelle",
        "Compétences acquises directement applicables professionnellement"
      ],
      current: [
        "Projet archivé mais accessible sur GitHub",
        "Démonstration de compétences : Docker, CI/CD, tests automatisés, développement full-stack",
        "Mentionné en entretiens pour illustrer capacité à gérer projet complet en autonomie",
        "Référence technique pour futurs projets"
      ]
    },

    critique: [
      "Je suis contente d'avoir travaillé sur un tel projet. En entreprise, je travaille généralement sur des parties spécifiques d'un projet existant. Ici, partir d'une page blanche et aller jusqu'à l'industrialisation avec Docker m'a donné une vision d'ensemble du cycle de développement.",
      "Même si l'on apprend théoriquement que toutes les étapes sont importantes et se valent, je l'ai réellement mis en pratique : un schéma de base de données mal conçu complique le développement, des tests insuffisants rendent l'industrialisation risquée, une documentation floue empêche le déploiement, un mauvais déploiement retarde la suite du développement. Chaque étape conditionne la suivante.",
      "Le projet m'a également appris à organiser mon temps efficacement. Travailler en parallèle des cours et de l'alternance nécessitait une planification précise. Le Trello Kanban m'a aidée à découper le travail en tâches gérables et à prioriser les fonctionnalités critiques. J'ai appris à anticiper les problèmes : prévoir du temps pour la configuration Docker que je savais complexe m'a évité de me retrouver bloquée en fin de projet.",
      "Respecter des consignes (livrables précis, couverture de tests minimum, technologies imposées) m'a développé une rigueur professionnelle utile en entreprise. L'erreur sur la couverture des branches (51% au lieu de 60%) m'a appris à vérifier tous les critères, pas seulement les plus évidents. Les retours du correcteur sur l'architecture confirment que la rigueur technique ne se limite pas à 'faire fonctionner le code', mais englobe aussi la qualité architecturale et la maintenabilité."
    ],

    skillIds: ["angular", "spring", "docker", "agile", "qualite"]
  },
  {
    id: "nowelia",
    title: "Nowelia",
    mainImage: "/images/projects/nowelia.png",
    summary: "Plateforme communautaire de Web Novels",
    tags: ["NestJS", "Next.js", "React Native", "Electron", "PostgreSQL"],

    presentation: "Nowelia est une plateforme complète de Web Novels (romans publiés en ligne avec illustrations) permettant aux utilisateurs de **découvrir, lire, commenter et créer des histoires**. L'application se décline en trois supports : web pour la lecture et l'écriture, mobile pour la consommation audio, et desktop pour la modération. Réalisé dans le cadre de mon Bachelor Concepteur Développeur d'Application à Simplon Valenciennes, ce projet fil rouge s'est étalé sur plusieurs mois en parallèle de la formation. Il s'agit d'un projet académique ambitieux avec une architecture multi-clients, couvrant l'intégralité des 15 compétences du référentiel CDA. J'ai travaillé en équipe de deux à trois personnes avec un accompagnement pédagogique léger. L'objectif final était de présenter un oral de 1h45 avec slides et démonstration live d'une application déployée et fonctionnelle.",

    objectives: [
      {
        title: "Applicatif",
        items: [
          "Créer une plateforme multi-support dédiée aux Web Novels",
          "Support web : lecture, écriture, commentaires",
          "Support mobile : consommation optimisée",
          "Support desktop : modération"
        ]
      },
      {
        title: "Fonctionnalités principales",
        items: [
          "Création, publication, lecture de stories chapitrisées",
          "Système de notation et tags littéraires",
          "Commentaires et suivi personnalisé",
          "Rôles et permissions (Visiteur, User, Moderator, Admin)",
          "Aperçu gratuit pour visiteurs, accès complet pour authentifiés"
        ]
      },
      {
        title: "Académique",
        items: [
          "Valider les 15 compétences du référentiel CDA réparties en 3 blocs",
          "Bloc 1 : Développement d'interfaces utilisateur",
          "Bloc 2 : Persistance des données",
          "Bloc 3 : Application multicouche répartie"
        ]
      },
      {
        title: "Livraison finale",
        items: [
          "Oral de 1h45 avec slides et démonstration live en production"
        ]
      }
    ],

    context: {
      period: "Projet fil rouge sur plusieurs mois en 2024",
      framework: "Bachelor CDA à Simplon Valenciennes",
      mode: "Créneaux dédiés + autonomie en parallèle de la formation",
      team: [
        "Tous : rôle de développeur front et back",
        "Lead Developer : membre le plus expérimenté",
        "PO (moi) : porteuse de l'idée du projet",
        "Scrum Master : troisième membre (présence variable)"
      ],
      organization: [
        "Jira pour gestion des tâches (backlog, épics, tickets)",
        "Pas de respect strict Scrum (pas de sprints formels ni daily rigoureux)",
        "Accompagnement pédagogique léger et ponctuel",
        "Erreur identifiée : approche séquentielle (backend complet puis frontend)"
      ],
      stack: [
        "Backend : NestJS, Prisma, PostgreSQL",
        "Frontend web : Next.js, TailwindCSS",
        "Mobile : React Native",
        "Desktop : Electron",
        "DevOps : Docker, GitHub Actions, VPS OVH (backend/BDD), Vercel (frontend)"
      ]
    },

    stakes: [
      "Validation du diplôme Concepteur Développeur d'Application",
      "Démontrer la maîtrise des 15 compétences du référentiel lors d'un oral de 1h45",
      "Créer une architecture capable d'offrir une expérience utilisateur optimale sur trois plateformes",
      "Performances maîtrisées grâce à la pagination, l'optimisation SSG/SSR et la gestion efficace des images",
      "Opportunité d'apprentissage technique majeure : découvrir NestJS, comprendre le SSR/SSG avec Next.js",
      "Déployer en conditions réelles avec CI/CD et gérer une architecture multi-clients"
    ],

    risks: [
      "Complexité technique : architecture 3-tiers, gestion des images, sécurisation multi-niveaux",
      "Obligation académique : couvrir 15 compétences imposant 3 applications distinctes",
      "Équilibre délicat : trouver le juste milieu entre fonctionnalités démontrées et finition globale",
      "Pression de l'oral : démonstration live avec risque qu'un bug critique compromette la présentation",
      "Gestion du temps : développement en parallèle de la formation",
      "Ambition disproportionnée : technologies nouvelles avec courbe d'apprentissage importante",
      "Risque concrétisé : surinvestissement sur l'API au détriment du frontend"
    ],

    phases: [
      {
        title: "Phase de conception et architecture",
        description: "Analyse des besoins et modélisation complète",
        achievements: [
          "Analyse des besoins et rédaction des user stories",
          "Définition du product backlog et priorisation des fonctionnalités",
          "Modélisation UML : diagrammes Use Case, diagrammes de Séquence",
          "Création de wireframes multi-supports avec Figma",
          "Modélisation base de données (Merise, schéma relationnel) : 10+ tables",
          "Choix de la stack technique avec comparatifs détaillés",
          "Définition de la stratégie de sécurité (RGPD, OWASP)"
        ]
      },
      {
        title: "Phase DevOps et infrastructure",
        description: "Mise en place de l'infrastructure de déploiement",
        achievements: [
          "Achat et configuration VPS OVH (Debian 10 avec Docker)",
          "Installation de Royal TSX pour connexions SSH sécurisées",
          "Configuration GitHub Actions : workflow automatisé",
          "Déploiement PostgreSQL en conteneur Docker via docker-compose",
          "Configuration DBeaver pour administration BDD",
          "Mise en place certificat SSL (HTTPS) pour sécuriser l'API",
          "Installation PM2 pour gestion du processus Node.js"
        ]
      },
      {
        title: "Phase développement Backend (focus principal)",
        description: "Développement complet de l'API",
        achievements: [
          "Installation NestJS + Prisma + PostgreSQL",
          "Définition du schéma Prisma : 10+ modèles avec relations",
          "Génération et exécution des migrations Prisma",
          "Création des ressources NestJS : Users, Auth, Novels, Chapters, Comments, Tags",
          "Implémentation CRUD complets pour chaque ressource",
          "Upload d'images : interceptor Multer, stockage Buffer, conversion Base64",
          "Endpoints de recherche avancée avec filtres et pagination",
          "Validation stricte : class-validator sur tous les DTOs",
          "Documentation Swagger automatique",
          "Configuration CORS",
          "Tests unitaires Jest et tests d'intégration"
        ]
      },
      {
        title: "Phase développement Frontend Web",
        description: "Développement de l'application web Next.js",
        achievements: [
          "Installation Next.js avec TypeScript et TailwindCSS",
          "Configuration tailwind.config.js : couleurs personnalisées, plugins",
          "Intégration de composants Tailwind UI adaptés aux wireframes",
          "Découpage en composants réutilisables",
          "Pages avec SSG (getStaticProps) : page d'accueil",
          "Pages avec SSR (getServerSideProps) : bibliothèque, profil, détail",
          "Routage dynamique Next.js",
          "Formulaires de création avec upload image et validation",
          "Gestion d'état : useState/useEffect",
          "Conversion images Base64 pour affichage depuis API",
          "Tests E2E avec Playwright"
        ]
      },
      {
        title: "Phase développement Mobile",
        description: "Application React Native",
        achievements: [
          "Installation avec CLI Expo, configuration Xcode",
          "4 pages principales : Home, Bibliothèque, Lectures, Communauté",
          "Barre de navigation bottom avec React Navigation",
          "Fetch API pour affichage données"
        ]
      },
      {
        title: "Phase développement Desktop",
        description: "Application Electron pour modération",
        achievements: [
          "Installation Electron avec boilerplate",
          "Page de connexion avec vérification rôle (extraction payload JWT)",
          "Page dashboard : liste des contenus signalés (en développement)"
        ]
      }
    ],

    actors: [
      {
        role: "Accompagnement pédagogique",
        description: "Les formateurs assuraient un accompagnement léger et ponctuel. Ils étaient disponibles sur demande mais sans suivi hebdomadaire structuré ni revues de code formelles. L'équipe bénéficiait d'une autonomie importante sur les choix techniques et l'organisation."
      },
      {
        role: "Lead Developer",
        description: "Le membre avec le plus d'expérience a naturellement pris le rôle de Lead Developer, apportant son expertise technique."
      },
      {
        role: "Scrum Master",
        description: "Le membre de l'équipe le moins présent tenait le rôle de Scrum Master, organisant les points d'équipe et le suivi sur Jira."
      },
      {
        role: "Moi (PO)",
        description: "J'ai pris le rôle de Product Owner étant celle qui a proposé l'idée du projet. Je définissais les priorités, rédigeais les user stories et coordonnais le backlog."
      }
    ],

    results: {
      personal: {
        technical: [
          "Stack moderne : NestJS, Prisma, Next.js, PostgreSQL",
          "Architecture 3-tiers avec une API REST consommée par trois clients distincts",
          "Déploiement CI/CD sur VPS avec Docker et GitHub Actions",
          "Référencement web avec SSR/SSG Next.js",
          "Tests automatisés (unitaires, intégration, E2E)"
        ],
        organizational: [
          "Communication en équipe efficace malgré mes multiples rôles (PO, développeuse)",
          "Coordination de projet en tant que Product Owner",
          "Prise de décisions techniques argumentées et collégiales",
          "Autonomie sur un projet d'envergure sans encadrement strict"
        ],
        pride: "Je suis fière d'avoir concrétisé une idée personnelle — passionnée de Web Novels, créer cette plateforme avait du sens pour moi. L'API complète et bien architecturée (sécurisée, documentée, testée) représente la réussite majeure. Les apprentissages portent sur l'importance de la conception en amont et sur l'équilibre nécessaire entre backend et frontend. J'ai validé mon diplôme CDA avec ce projet comme aboutissement."
      },
      company: {
        achievements: [],
        satisfaction: [],
        impact: "Projet académique"
      }
    },

    future: {
      immediate: [
        "Code déployé et opérationnel sur VPS OVH avec accès HTTPS sécurisé",
        "Documentation technique complète (README, Swagger, diagrammes UML)",
        "Création de chapitres côté frontend non finalisée",
        "Application mobile limitée à quatre pages prototypes",
        "Application desktop proposant uniquement connexion avec vérification de rôle",
        "Feedback limité à la validation du diplôme CDA"
      ],
      midTerm: [
        "Projet archivé sur GitHub en repository privé quelques mois après validation",
        "VPS OVH arrêté pour éviter coûts d'hébergement mensuels",
        "Aucun développement actif poursuivi",
        "Code conservé comme référence technique"
      ],
      current: [
        "Expérience capitalisée pour mon Master Expert en Ingénierie du Logiciel",
        "Erreurs identifiées et comprises (approche séquentielle, temps frontend sous-estimé)",
        "Vision de l'architecture et gestion de projet désormais plus mature",
        "Projet de refaire Nowelia après obtention du Master (2026)"
      ]
    },

    critique: [
      "Être à la fois porteuse de l'idée, Product Owner et développeuse m'a offert une perspective unique mais aussi une charge importante.",
      "L'ambition du projet était proportionnelle aux exigences académiques : couvrir 15 compétences dans un seul projet imposait une largeur au détriment parfois de la profondeur.",
      "La principale erreur fut notre approche séquentielle : développer le backend complet puis le frontend, alors que le développement par fonctionnalité aurait été plus efficace. L'API, bien que solide, a monopolisé trop de temps au détriment du frontend qui est pourtant l'interface que peut utiliser l'utilisateur du projet. Un frontend Next.js plus abouti avec une UI moderne aurait été plus valorisant.",
      "Au-delà de la technique, ce projet m'a enseigné la communication en équipe et la prise de décisions. Défendre des choix techniques, accepter les compromis et coordonner le travail sans hiérarchie formelle ont été des apprentissages précieux.",
      "Malgré les imperfections, je suis fière de l'API développée : architecture solide, sécurisée, documentée et déployée. Avoir concrétisé une idée personnelle et validé mon diplôme avec ce projet reste une grande satisfaction."
    ],

    skillIds: ["nest", "react", "docker", "agile", "qualite"]
  },
  {
    id: "gecko",
    title: "Gecko",
    mainImage: "/images/projects/gecko.png",
    summary: "Module Fabrication pour l'application de gestion éditoriale",
    tags: ["jQuery", "PHP", "PostgreSQL", "Bootstrap"],

    presentation: "Gecko est une application web de gestion centralisée développée par Litesoft pour l'école des loisirs, maison d'édition jeunesse. Elle regroupe l'ensemble des **activités éditoriales** : articles, stocks, fabrication et bien d'autres. EDL a commandé un nouveau module Fabrication que Litesoft a délégué à Kapela, mon entreprise d'alternance. Le projet comprenait huit sous-menus. Je me suis concentrée sur trois d'entre eux : la page Travailleur À Domicile (TAD) que j'ai développée de bout en bout, ainsi que des interventions sur les pages Fiche technique et Contact. Réalisé entre octobre 2025 et janvier 2026, ce projet constitue ma deuxième expérience de développement en entreprise. J'ai travaillé au sein d'une équipe de quatre personnes : un chef de projet, un lead développeur (mon tuteur), un développeur senior arrivé à mi-parcours en décembre, et moi. Le développement se poursuit jusqu'en avril 2026 avec un nouveau développeur.",

    objectives: [
      {
        title: "Objectifs",
        items: [
          "Développer huit nouvelles pages pour le module Fabrication de Gecko",
          "Focus principal sur trois pages : TAD, Fiche technique, Contact"
        ]
      },
      {
        title: "Page Travailleur À Domicile (TAD)",
        items: [
          "Gestion complète des travailleurs externes (illustrateurs, correcteurs freelance)",
          "Gestion des fiches de travail associées à des articles"
        ]
      },
      {
        title: "Exigences techniques",
        items: [
          "Livrer un code qualitatif respectant les standards existants",
          "S'intégrer dans la codebase legacy sans régressions",
          "Approche : se calquer sur l'existant en apportant des améliorations",
          "Livraison progressive en pré-production pour validation client"
        ]
      },
      {
        title: "Fonctionnalités clés page TAD",
        items: [
          "Affichage des travailleurs avec filtres multi-critères et tri",
          "Recherche dynamique dans les listes déroulantes",
          "Validation frontend et backend",
          "Gestion des droits utilisateurs (lecture seule vs modification)",
          "Génération PDF (bons de commande, attestations)"
        ]
      }
    ],

    context: {
      period: "Octobre 2025 - Janvier 2026",
      framework: "Alternance chez Kapela (ESN), continuité après T-Source",
      mode: "Deuxième expérience de développement en entreprise",
      team: [
        "Chef de projet : rituels Agile, Jira impeccable",
        "Lead développeur (tuteur) : tour du projet, chiffrage, page de référence",
        "Développeur senior : arrivé mi-décembre, optimisations, développement de pages",
        "Moi : développeuse full-stack"
      ],
      organization: [
        "Approche Agile rigoureuse : daily stand-ups (15 min), sprints de 2 semaines",
        "Démos bi-mensuelles le vendredi",
        "Rétrospectives de fin de sprint",
        "Jira avec user stories claires et estimations précises"
      ],
      stack: [
        "Frontend : jQuery, Bootstrap 4.6",
        "Backend : PHP natif",
        "Base de données : PostgreSQL",
        "Export : TCPDF",
        "Versioning : Git"
      ]
    },

    stakes: [
      "L'application étant en production depuis plusieurs années, la fiabilité était primordiale",
      "Les performances constituaient un enjeu sur des tableaux contenant potentiellement des milliers de lignes",
      "Pour Kapela, le projet représentait une opportunité de fidéliser un nouveau client important",
      "Opportunité d'ouvrir des opportunités commerciales sur les optimisations",
      "Deuxième projet de développement en entreprise après l'expérience difficile de T-Source",
      "Occasion de monter en compétences sur des technologies 'à l'ancienne'"
    ],

    risks: [
      "Bootstrap 4.6 désuet : support terminé en janvier 2023, migration vers Bootstrap 5 inévitable",
      "Documentation inexistante : noms de colonnes obscurs en base de données",
      "Problèmes de performances : certaines fonctionnalités prenaient 30 secondes à charger",
      "Absence de tests automatisés : risque majeur de régressions sans filet de sécurité",
      "Courbe d'apprentissage importante : comprendre l'architecture, PHP natif et jQuery jamais pratiqués"
    ],

    phases: [
      {
        title: "Phase de développement - Travailleur À Domicile (TAD)",
        description: "Développement complet de la page TAD de bout en bout",
        achievements: [
          "Affichage des travailleurs avec leurs informations clés",
          "Système de filtres multi-critères pour recherche avancée",
          "Tri sur toutes les colonnes",
          "Comptage dynamique de lignes se mettant à jour selon les filtres",
          "Recherche dynamique dans les listes déroulantes (autocomplete)",
          "Validation frontend et backend des données saisies",
          "Page dédiée pour chaque fiche de travail avec KPI",
          "Gestion des droits : profils en lecture seule avec boutons désactivés",
          "Génération de bons de commande et attestations avec TCPDF"
        ]
      },
      {
        title: "Phase de développement - Fiche technique",
        description: "Interventions sur la page Fiche technique",
        achievements: [
          "Mise en place des filtres sur le tableau principal",
          "Implémentation du tri sur les colonnes",
          "Ajout du comptage de lignes"
        ]
      },
      {
        title: "Phase de développement - Contact",
        description: "Interventions sur la page Contact",
        achievements: [
          "Mise en place des filtres sur le tableau des contacts",
          "Ajout du compteur de nombre de lignes dynamique",
          "Onglet Gestion des adresses dans la page de détail",
          "Création d'une nouvelle adresse avec validation des types uniques",
          "Modification des adresses existantes"
        ]
      },
      {
        title: "Phase de tests et validation",
        description: "Tests et livraison progressive",
        achievements: [
          "Tests manuels internes au sein de l'équipe",
          "Livraison progressive des pages en environnement de pré-production",
          "Tests manuels effectués par le client EDL",
          "Corrections et ajustements suite aux feedbacks reçus"
        ]
      }
    ],

    actors: [
      {
        role: "Client (EDL)",
        description: "Il participait aux démos bi-mensuelles où nous présentions l'avancement des fonctionnalités. Il effectuait les tests manuels en pré-production selon sa disponibilité et fournissait des retours et validations progressives. Le client s'est montré conciliant face au léger retard initial."
      },
      {
        role: "Développeur de Gecko (Litesoft)",
        description: "Litesoft, développeur initial de Gecko, était contactable via Discord pour des questions techniques sur l'architecture existante et les choix de conception."
      },
      {
        role: "Lead Developer",
        description: "Il a effectué l'analyse initiale du projet, il a développé la page de référence (Fiche technique) et créé les composants jQuery génériques réutilisables (modales, alerts, gestion des tableaux)."
      },
      {
        role: "Développeur senior",
        description: "Référent PHP dans l'équipe, il a proposé et implémenté des optimisations de performances et pris en charge le développement de certaines pages."
      },
      {
        role: "Chef de projet",
        description: "Il organisait et animait l'ensemble des rituels Agile. Il gérait un Jira impeccable et assurait la communication avec le client EDL."
      },
      {
        role: "Moi",
        description: "Je travaillais aussi bien sur le frontend (jQuery, Bootstrap) que sur le backend (PHP natif, PostgreSQL). Je me basais sur le code de référence développé par le lead dev pour assurer la cohérence. Je participais activement aux daily stand-ups quotidiens et aux rétrospectives de sprint."
      }
    ],

    results: {
      personal: {
        technical: [
          "Technologies 'à l'ancienne' : jQuery et PHP natif",
          "Travail sur une base de code complexe sans documentation",
          "Gestion des performances sur de gros volumes de données"
        ],
        organizational: [
          "Collaboration fluide avec le lead dev et le dev senior",
          "Utilisation efficace du code de référence pour maintenir la cohérence",
          "Participation aux revues de code et intégration des feedbacks",
          "Communication claire lors des daily stand-ups, expression des blocages",
          "Respect rigoureux des rituels Agile"
        ],
        pride: "Je suis fière d'avoir développé une page complète (TAD) de bout en bout dans un environnement professionnel structuré, contrastant fortement avec l'expérience chaotique de T-Source."
      },
      company: {
        achievements: [
          "Pages TAD, Fiche technique, Contact et Papier finalisées",
          "Code qualitatif respectant les standards existants",
          "Intégration sans régressions dans la codebase legacy"
        ],
        satisfaction: [
          "EDL satisfait du travail de Kapela",
          "Confiance renforcée grâce à la qualité des livrables",
          "Respect des processus Agile apprécié"
        ],
        impact: "Prolongation du contrat envisagée au-delà d'avril 2026. Opportunités commerciales futures : propositions d'optimisations du temps de chargement, migration vers Bootstrap 5 identifiée comme levier commercial."
      }
    },

    future: {
      immediate: [
        "Pages TAD, Fiche technique, Contact et Papier finalisées en janvier 2026",
        "Page TAD entre en phase de tests en pré-production par EDL courant février",
        "Déploiement en production prévu pour mars",
        "Autres pages sortiront progressivement selon tests clients"
      ],
      midTerm: [
        "Module Fabrication terminé prévu en avril 2026",
        "Bonnes chances de continuité de la relation Kapela-EDL",
        "Opportunités d'évolutions supplémentaires envisagées"
      ],
      current: [
        "Fin de mon contrat avec Kapela en janvier après quatre mois sur Gecko",
        "Transmission de mes développements au nouveau développeur",
        "Mes pages livrées et en attente de validation client",
        "Collègues poursuivant le développement des pages restantes"
      ]
    },

    critique: [
      "Gecko m'a prouvé qu'un bon cadrage de projet change tout, découvrir un environnement Agile bien mené a été une révélation. Les rituels ne sont pas une perte de temps : ils créent un cadre rassurant, une communication fluide, et permettent de résoudre les problèmes rapidement.",
      "Je déplore cependant que les tests soient à nouveau mis de côté. Chaque modification apportée comportait un risque de régression que seuls les tests manuels développeur ou clients pouvaient détecter, c'est une tâche longue et rébarbative.",
      "L'apprentissage humain le plus important reste de ne jamais hésiter à poser des questions. Le lead dev et le dev senior étaient disponibles, et chaque question posée m'a fait gagner du temps et éviter des erreurs.",
      "Ce projet démontre qu'il faut bien s'organiser dès le début : documenter, schématiser, tester. Je suis fière d'avoir développé une page complète dans ce contexte et d'avoir vécu concrètement la différence entre un projet chaotique et un projet structuré."
    ],

    skillIds: ["agile", "qualite"]
  }

];