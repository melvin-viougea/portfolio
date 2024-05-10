import {ContactCardProps} from "@/app/_components/ContactCard";
import {SideProjectsProps} from "@/app/_components/SideProjects";
import {WorkProps} from "@/app/_components/Work";

export const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        urlLogo: "/mve.png",
        title: "MaVieEtudiante",
        description: "An application which aims to simplify the lives of students by providing innovative features for managing their academic and social life.",
        url: "/"
    },
    {
        urlLogo: "/nBladesLogo.jpeg",
        title: "L'atelier NBlades",
        description: "E-commerce application for selling handmade wooden table tennis rackets.",
        url: "https://www.lateliernblades.com/fr/"
    },
];

export const WORKS: WorkProps[] = [
    {
        image: "/solutions909Logo.jpeg",
        title: "Solutions 909",
        role: "Web development / DevOps",
        date: "Dec 2022 - Present · 18 months",
        url: "https://solutions909.fr",
        apprenticeship: true,
    },
    {
        image: "/solutions909Logo.jpeg",
        title: "Solutions 909",
        role: "Web development",
        date: "Jul 2022 - Aug 2022 · 2 months",
        url: "https://solutions909.fr",
        freelance: true,
    },
    {
        image: "/solutions909Logo.jpeg",
        title: "Solutions 909",
        role: "Web development",
        date: "Jan 2022 - Feb 2022 · 2 months",
        url: "https://solutions909.fr",
        internship: true,
    },
    {
        image: "/computerisLogo.jpeg",
        title: "COMPUTERIS",
        role: "Web development",
        date: "June 2021 · 1 month",
        url: "https://computeris.fr",
        internship: true,
    },
];

export const CONTACTS: ContactCardProps[] = [
    {
        name: "in/melvin-viougea",
        image: "/melvinImage.png",
        mediumImage: "/linkedInIcon.png",
        description: "+400 connections on LinkedIn",
        url: "https://www.linkedin.com/in/melvin-viougea/"
    },
    {
        name: "mviougea@icloud.com",
        image: "/melvinDraw.png",
        mediumImage: "/mailAppleLogo.png",
        description: "Email me for any inquiries",
        url: "mailto:mviougea@icloud.com"
    },
];