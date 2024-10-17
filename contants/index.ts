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
import {ContactCardProps, SideProjectProps, SkillCardProps} from "@/types";
import OfficeLogo from "@/app/_components/icons/OfficeLogo";
import TeamsLogo from "@/app/_components/icons/TeamsLogo";
import SwiftLogo from "@/app/_components/icons/SwiftLogo";
import FirebaseLogo from "@/app/_components/icons/FirebaseLogo";

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        urlLogo: "/maVieEtudianteLogo.png",
        title: "MaVieEtudiante",
        description: "Une application complète conçue pour simplifier la vie des étudiants, offrant des outils innovants pour gérer les emplois du temps, les devoirs, les événements sociaux et la communication entre pairs, le tout dans une interface conviviale.",
        url: "https://svenpiers05.wixsite.com/mon-bde"
    },
    {
        urlLogo: "/nBladesLogo.jpeg",
        title: "L'atelier NBlades",
        description: "Une plateforme e-commerce exclusive dédiée à l'art de la fabrication artisanale de raquettes de tennis de table en bois, où chaque raquette est minutieusement fabriquée par des artisans qualifiés, combinant des techniques traditionnelles de menuiserie avec des principes de design contemporain pour offrir des performances et une esthétique incomparables.",
        url: "https://www.lateliernblades.com/fr/"
    },
    {
        urlLogo: "/digitalExpressLogo.png",
        title: "DigitalExpress",
        description: "Révolutionnant l'industrie de la restauration, DigitalExpress permet aux restaurateurs de bénéficier de modèles de sites web personnalisables et d'options d'intégration fluide pour une gestion efficace des tables, des systèmes de réservation en ligne, etc.",
        url: "https://dashboard.digital-express.cloud/"
    },
    {
        urlLogo: "/webLuminaLogo.png",
        title: "WebLumina",
        description: "Un studio de développement web et mobile dynamique engagé à créer des solutions numériques pour les entreprises de toutes tailles, WebLumina exploite les technologies de pointe et l'expertise créative pour offrir des applications web et mobiles qui priorisent l'expérience utilisateur, la fonctionnalité et l'évolutivité, assurant ainsi le succès numérique des clients dans le paysage concurrentiel actuel.",
        url: "/"
    },
];

export const WORKS: WorkProps[] = [
    {
        image: "/solutions909Logo.jpeg",
        title: "Solutions 909",
        role: "Développement web / DevOps",
        date: "Déc 2022 - Présent · 18 mois",
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
        description: "+400 connexions sur LinkedIn",
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
                description: "J'utilise Next.js pour le développement frontend, offrant des solutions web rapides et efficaces."
            },
            {
                logo: TailwindLogo,
                title: "Tailwind",
                description: "Je peux créer des interfaces utilisateur époustouflantes rapidement en utilisant TailwindCSS."
            },
            {
                logo: ReactLogo,
                title: "React",
                description: "Je développe des interfaces utilisateur dynamiques et réactives avec React."
            },
        ]
    },
    {
        category: "Backend",
        skills: [
            {
                logo: SpringBootLogo,
                title: "Spring Boot",
                description: "Je maîtrise la construction de backends robustes et évolutifs avec Spring Boot."
            },
            {
                logo: SymfonyLogo,
                title: "Symfony",
                description: "J'utilise Symfony pour développer des applications web performantes avec aisance."
            }
        ]
    },
    {
        category: "Mobile",
        skills: [
            {
                logo: FlutterLogo,
                title: "Flutter",
                description: "Je crée de belles applications multiplateformes avec une apparence native en utilisant Flutter."
            },
            {
                logo: SwiftLogo,
                title: "Swift",
                description: "Je développe des applications iOS performantes avec Swift."
            },
            {
                logo: FirebaseLogo,
                title: "Firebase",
                description: "J'utilise Firebase pour le développement d'applications mobiles avec des fonctionnalités cloud."
            }
        ]
    },
    {
        category: "DevOps et Cloud",
        skills: [
            {
                logo: DockerLogo,
                title: "Docker",
                description: "Je déploie et gère des applications efficacement avec Docker."
            },
            {
                logo: AnsibleLogo,
                title: "Ansible",
                description: "Je gère la configuration et l'automatisation des déploiements avec Ansible."
            },
            {
                logo: GitLabLogo,
                title: "GitLab",
                description: "Je mets en place des pipelines d'intégration continue avec GitLab CI pour automatiser le déploiement."
            },
            {
                logo: AzureLogo,
                title: "Azure",
                description: "J'utilise Microsoft Azure pour le déploiement et la gestion de solutions cloud."
            }
        ]
    },
    {
        category: "Gestion de projet",
        skills: [
            {
                logo: JiraLogo,
                title: "Jira",
                description: "J'utilise Jira pour la gestion de projets et la collaboration d'équipe avec la méthode agile."
            },
            {
                logo: OfficeLogo,
                title: "Office 365",
                description: "Je maîtrise l'utilisation de la suite Office 365 pour la gestion de documents et la collaboration."
            },
            {
                logo: TeamsLogo,
                title: "Microsoft Teams",
                description: "J'utilise Microsoft Teams pour la communication et la collaboration d'équipe en temps réel."
            }
        ]
    }
];
