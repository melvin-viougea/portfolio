import {WorkProps} from "@/app/_components/Work";
import SymfonyLogo from "@/app/_components/icons/SymfonyLogo";
import NextJsLogo from "@/app/_components/icons/NextJsLogo";
import TailwindLogo from "@/app/_components/icons/TailwindLogo";
import FlutterLogo from "@/app/_components/icons/FlutterLogo";
import SpringBootLogo from "@/app/_components/icons/SpringBootLogo";
import DockerLogo from "@/app/_components/icons/DockerLogo";
import JiraLogo from "@/app/_components/icons/JiraLogo";
import ReactLogo from "@/app/_components/icons/ReactLogo";
import GitLabLogo from "@/app/_components/icons/GitLabLogo";
import AzureLogo from "@/app/_components/icons/AzureLogo";
import AnsibleLogo from "@/app/_components/icons/AnsibleLogo";
import {ContactCardProps, SchoolProjectProps, SideProjectProps, SkillCardProps, WorkProjectProps} from "@/types";
import OfficeLogo from "@/app/_components/icons/OfficeLogo";
import TeamsLogo from "@/app/_components/icons/TeamsLogo";
import SwiftLogo from "@/app/_components/icons/SwiftLogo";
import FirebaseLogo from "@/app/_components/icons/FirebaseLogo";

export const WORK_PROJECTS: WorkProjectProps[] = [
  {
    title: "Super DPOs",
    description: "Une application web pour centraliser les réponses des entreprises aux demandes du RGPD, développée avec React. Elle propose une interface intuitive qui facilite la gestion de la conformité aux régulations, tout en assurant une accessibilité optimale.",
  },
  {
    title: "Admin SDPOs",
    description: "Interface d'administration dédiée à Super DPOs, permettant une gestion efficace des données des entreprises enregistrées sur la plateforme, développée avec React.",
  },
  {
    title: "Admin Machine",
    description: "Outil d'administration complet pour la gestion des opérations de l'entreprise, incluant la gestion des clients et des factures, conçu avec React pour le frontend.",
  },
  {
    title: "API Symfony",
    description: "API backend développée en PHP Symfony, conçue avec une architecture multi-database pour plusieurs clients. Intégrée dans un environnement Docker, elle permet d'isoler et de déployer les différents sites web associés à Super DPOs, Admin SDPOs et Admin Machine, assurant scalabilité et sécurité renforcées.",
  },
];

export const SCHOOL_PROJECTS: SchoolProjectProps[] = [
  {
    title: "T-WEB-501",
    categories: ["Web"],
    description: "Le projet \"Job Board\" utilise React pour gérer des annonces d'emploi, avec un backend en Express. Il inclut un système d'authentification et une interface d'administration.",
  },
  {
    title: "T-CEN-500",
    categories: ["Management"],
    description: "Le projet \"Iron Man\" gère la construction d'une armure imprimée en 3D, intégrant des éléments robotisés. Il couvre la gestion des ressources, des risques et du budget, avec des livrables en Gantt et en communication.",
  },
  {
    title: "T-JAV-501",
    categories: ["Web"],
    description: "Le projet \"Dashboard\" utilise React pour le frontend et Java Spring Boot pour le backend, intégrant OAuth2. Il permet aux utilisateurs de créer des tableaux de bord dynamiques avec des widgets basés sur des données d'API externes.",
  },
  {
    title: "T-NSA-501",
    categories: ["Réseau"],
    description: "Le projet \"You shall not pass\" configure une infrastructure réseau avec OpenBSD comme passerelle et FreeBSD comme serveur web, incluant un DHCP pour trois sous-réseaux et sécurisation des communications.",
  },
  {
    title: "T-JSF-600",
    categories: ["Web"],
    description: "Le projet développe un client et un serveur IRC avec la stack MERN, utilisant des sockets. Le serveur gère plusieurs connexions, permettant la gestion de canaux et l'envoi de messages avec notifications.",
  },
  {
    title: "T-SEC-600",
    categories: ["Cybersécu"],
    description: "Le projet \"Socat\" comprend 12 défis Boot2Root axés sur l'exploitation de failles réseau. Les participants lancent des VMs TryHackMe pour découvrir des vulnérabilités et obtenir des droits root en collectant des drapeaux.",
  },
  {
    title: "T-DEV-600",
    categories: ["Mobile", "Management"],
    description: "Le projet \"Redditech\" développe une application de navigation pour Reddit, intégrant OAuth2, affichage du profil utilisateur et gestion des abonnements, avec une documentation technique complète exigée.",
  },
  {
    title: "T-DOP-600 1",
    categories: ["DevOps"],
    description: "Le projet \"Popeye\" containerise une application de sondage avec Docker, intégrant Flask, Java, PostgreSQL, Redis, et une interface Node.js, gérée via un fichier docker-compose.yml et accessible localement.",
  },
  {
    title: "T-ORG-600",
    categories: ["Management"],
    description: "Le projet modélise des flux de communication au sein d'une entreprise via un graphe représentant les échanges entre employés, analysant centralisation, processus décisionnels et division du travail, suivi d'une présentation comparative.",
  },
  {
    title: "T-YEP-600",
    categories: ["Mobile", "Management"],
    description: "Le projet de fin d'année \"PixelVault\" est un RPG mobile au tour par tour, développé en C# avec Unity, .NET pour l'API REST et SQL Server. L'équipe a conçu gameplay, interface utilisateur et un système de progression évolutif. Un cahier des charges complet est exigé.",
  },
  {
    title: "T-DOP-600 2",
    categories: ["DevOps"],
    description: "Le projet \"My_Marvin\" automatise la configuration de Jenkins avec \"Configuration as Code\" et Job DSL, créant des utilisateurs avec rôles spécifiques et automatisant des tâches comme le clonage de dépôts et la configuration de pipelines CI/CD.",
  },
  {
    title: "T-WEB-600",
    categories: ["Web"],
    description: "Le projet développe une API générique pour sites e-commerce avec Symfony, permettant la gestion de produits, utilisateurs et commandes, déployée automatiquement via Ansible sur un serveur Debian. L'API respecte les standards REST et gère les données en JSON.",
  },
  {
    title: "T-DOP-600 3",
    categories: ["DevOps"],
    description: "Le projet \"Bernstein\" déploie une application de sondage sur Kubernetes sur Azure, orchestrée avec Traefik pour le proxy inverse et le load balancing. Comprend des services Flask, Redis, Java et Node.js pour gérer et afficher les résultats des votes, avec PostgreSQL pour le stockage et cAdvisor pour la surveillance des conteneurs.",
  },
  {
    title: "T-POO-700",
    categories: ["Web", "Mobile", "DevOps"],
    description: "Le projet \"Time Manager\" est une application de suivi du temps de travail, développée en React et Elixir, permettant de gérer les horaires, afficher des tableaux de bord et suivre les temps de travail quotidiens et hebdomadaires. L'application est dockerisée et inclut une version mobile.",
  },
  {
    title: "T-NSA-700",
    categories: ["DevOps"],
    description: "Le projet \"SLA\" met en place une plateforme d'hébergement partagée sans Docker, utilisant Ansible et GitLab CI/CD pour automatiser le build, test, et déploiement d'applications Laravel et Angular, garantissant un rollback rapide et un minimum de downtime.",
  },
  {
    title: "T-DEV-700",
    categories: ["Mobile"],
    description: "Le projet \"Cash Manager\" est un système de paiement distant pour détaillants, avec une app mobile en Swift et Java Spring Boot. Il gère paniers et paiements via NFC/QR, avec un serveur validant les transactions, dockerisé avec tests unitaires et Design Patterns pour assurer qualité et maintenabilité.",
  },
  {
    title: "T-DIT-700",
    categories: ["Management"],
    description: "Le projet \"Gotham\" réorganise la collecte des déchets en intégrant des technologies comme GPS et poubelles intelligentes. L'équipe de gestion du changement prépare les parties prenantes et gère la mise en œuvre des nouvelles solutions, avec des livrables prévus à chaque phase de transformation.",
  },
  {
    title: "T-ESP-800",
    categories: ["VR", "Management"],
    description: "Le projet \"Minigames VR\" propose une expérience de réalité virtuelle développée avec Unity en C#, offrant des jeux populaires dans un environnement multijoueur. Les joueurs sont connectés à une blockchain Polkadot pour le stockage et la gestion des données, avec livraison de documents techniques.",
  },
  {
    title: "T-NSA-800",
    categories: ["DevOps", "Management"],
    description: "Le projet \"LostOps\" optimise une infrastructure cloud en établissant un monitoring multi-niveaux et en améliorant les pipelines CI/CD sur GitHub Actions, intégrant des métriques, des scans de sécurité et une documentation des outils.",
  },
  {
    title: "T-DEV-810",
    categories: ["IA", "Management"],
    description: "Le projet \"Zoidberg\" utilise l'apprentissage automatique pour détecter la pneumonie à partir d'images radiographiques. Il inclut l'intégration de réseaux neuronaux, validations croisées, comparaisons de méthodes, et la livraison de documents techniques et d'une synthèse des résultats.",
  },
];


export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    urlLogo: "/maVieEtudianteLogo.png",
    title: "MaVieEtudiante",
    description: "Une application tout-en-un conçue pour faciliter la vie des étudiants, proposant des outils innovants pour gérer les emplois du temps, les devoirs, les événements sociaux et favoriser la communication entre pairs, le tout dans une interface intuitive.",
    url: "https://svenpiers05.wixsite.com/mon-bde"
  },
  {
    urlLogo: "/nBladesLogo.jpeg",
    title: "L'atelier NBlades",
    description: "Une plateforme e-commerce dédiée à la fabrication artisanale de raquettes de tennis de table en bois, chaque pièce étant soigneusement élaborée par des artisans qualifiés, alliant savoir-faire traditionnel et design contemporain pour une performance et une esthétique exceptionnelles.",
    url: "https://www.lateliernblades.com/fr/"
  },
  {
    urlLogo: "/digitalExpressLogo.png",
    title: "DigitalExpress",
    description: "Transformant le secteur de la restauration, DigitalExpress offre aux restaurateurs des modèles de sites web personnalisables et des options d'intégration fluides pour gérer efficacement les tables et les réservations en ligne.",
    url: "https://dashboard.digital-express.cloud/"
  },
  {
    urlLogo: "/webLuminaLogo.png",
    title: "WebLumina",
    description: "Un studio de développement web et mobile dynamique, WebLumina s'engage à créer des solutions numériques pour les entreprises de toutes tailles, en tirant parti des technologies avancées et d'une expertise créative pour offrir des applications qui mettent l'accent sur l'expérience utilisateur, la fonctionnalité et l'évolutivité.",
    url: "/"
  },
];

export const WORKS: WorkProps[] = [
  {
    image: "/solutions909Logo.jpeg",
    title: "Solutions 909",
    role: "Développement web / DevOps",
    date: "Déc 2022 - Nov 2024 · 24 mois",
    url: "https://solutions909.fr",
    apprenticeship: true,
  },
  {
    image: "/solutions909Logo.jpeg",
    title: "Solutions 909",
    role: "Développement web",
    date: "Juil 2022 - Août 2022 · 2 mois",
    url: "https://solutions909.fr",
    freelance: true,
  },
  {
    image: "/solutions909Logo.jpeg",
    title: "Solutions 909",
    role: "Développement web",
    date: "Jan 2022 - Fév 2022 · 2 mois",
    url: "https://solutions909.fr",
    internship: true,
  },
  {
    image: "/computerisLogo.jpeg",
    title: "COMPUTERIS",
    role: "Développement web",
    date: "Juin 2021 · 1 mois",
    url: "https://computeris.fr",
    internship: true,
  },
];

export const CONTACTS: ContactCardProps[] = [
  {
    name: "in/melvin-viougea",
    image: "/melvinImage.png",
    mediumImage: "/linkedInLogo.png",
    description: "+500 connexions sur LinkedIn",
    url: "https://www.linkedin.com/in/melvin-viougea/"
  },
  {
    name: "mviougea@icloud.com",
    image: "/melvinDraw.png",
    mediumImage: "/mailAppleLogo.png",
    description: "Envoyez-moi un email pour toute demande",
    url: "mailto:mviougea@icloud.com"
  },
];

export const SKILLS: { category: string, skills: SkillCardProps[] }[] = [
  {
    category: "Frontend",
    skills: [
      {
        logo: NextJsLogo,
        title: "Next.js",
        description: "J'utilise Next.js pour développer des applications web rapides, optimisées pour la performance."
      },
      {
        logo: TailwindLogo,
        title: "Tailwind",
        description: "Avec TailwindCSS, je conçois des interfaces modernes et réactives de manière efficace."
      },
      {
        logo: ReactLogo,
        title: "React",
        description: "Je crée des interfaces utilisateur interactives et réactives avec React, adaptées aux besoins du projet."
      },
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        logo: SpringBootLogo,
        title: "Spring Boot",
        description: "J'utilise Spring Boot pour la construction de backend fiables et évolutifs, adaptés à tout type de projet."
      },
      {
        logo: SymfonyLogo,
        title: "Symfony",
        description: "Symfony me permet de développer des applications backend robustes, prêtes à évoluer avec les besoins."
      }
    ]
  },
  {
    category: "Mobile",
    skills: [
      {
        logo: FlutterLogo,
        title: "Flutter",
        description: "Je conçois des applications multiplateformes avec Flutter, offrant une expérience utilisateur fluide, native-like."
      },
      {
        logo: SwiftLogo,
        title: "Swift",
        description: "Je développe des applications iOS rapides et performantes avec Swift, en optimisant l'interface et les fonctionnalités."
      },
      {
        logo: FirebaseLogo,
        title: "Firebase",
        description: "Avec Firebase, j'intègre des fonctionnalités cloud pour enrichir les applications mobiles."
      }
    ]
  },
  {
    category: "DevOps et Cloud",
    skills: [
      {
        logo: DockerLogo,
        title: "Docker",
        description: "Je déploie des applications en conteneur avec Docker, garantissant portabilité et flexibilité."
      },
      {
        logo: AnsibleLogo,
        title: "Ansible",
        description: "J'automatise la gestion des infrastructures et les déploiements avec Ansible pour des configurations uniformes."
      },
      {
        logo: GitLabLogo,
        title: "GitLab",
        description: "Je configure des pipelines CI/CD avec GitLab CI pour automatiser et fiabiliser les déploiements."
      },
      {
        logo: AzureLogo,
        title: "Azure",
        description: "Avec Azure, je gère le déploiement et la scalabilité des applications dans un environnement cloud sécurisé."
      }
    ]
  },
  {
    category: "Gestion de projet",
    skills: [
      {
        logo: JiraLogo,
        title: "Jira",
        description: "Jira est mon outil de choix pour gérer les projets en méthode agile et assurer une collaboration efficace."
      },
      {
        logo: OfficeLogo,
        title: "Office 365",
        description: "Je maîtrise Office 365 pour la gestion de documents et la collaboration efficace en entreprise."
      },
      {
        logo: TeamsLogo,
        title: "Microsoft Teams",
        description: "J'utilise Microsoft Teams pour faciliter la communication et le travail d'équipe en temps réel."
      }
    ]
  }
];


export const categories = [
  "Tous",
  "Web",
  "Management",
  "Réseau",
  "Cybersécu",
  "Mobile",
  "DevOps",
  "VR",
  "IA",
];
