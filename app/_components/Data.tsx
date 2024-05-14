import {ContactCardProps} from "@/app/_components/ContactCard";
import {SideProjectsProps} from "@/app/_components/SideProjects";
import {WorkProps} from "@/app/_components/Work";

export const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        urlLogo: "/maVieEtudianteLogo.png",
        title: "MaVieEtudiante",
        description: "A comprehensive application designed to streamline students' lives, offering innovative tools for managing academic schedules, assignments, social events, and peer communication, all within a user-friendly interface.",
        url: "https://svenpiers05.wixsite.com/mon-bde"
    },
    {
        urlLogo: "/nBladesLogo.jpeg",
        title: "L'atelier NBlades",
        description: "An exclusive e-commerce platform dedicated to the artistry of handcrafted wooden table tennis rackets, where each racket is meticulously crafted by skilled artisans, blending traditional woodworking techniques with contemporary design principles to deliver unparalleled performance and aesthetic appeal.",
        url: "https://www.lateliernblades.com/fr/"
    },
    {
        urlLogo: "/digitalExpressLogo.png",
        title: "DigitalExpress",
        description: "Revolutionizing the restaurant industry, DigitalExpress empowers restaurant owners by providing customizable website templates and seamless integration options for efficient table management, online booking systems..",
        url: "https://dashboard.digital-express.cloud/"
    },
    {
        urlLogo: "/webLuminaLogo.png",
        title: "WebLumina",
        description: "A dynamic web and mobile development studio committed to creating digital solutions for businesses of all scales, WebLumina harnesses cutting-edge technologies and creative expertise to deliver web and mogile applications that prioritize user experience, functionality, and scalability, ensuring clients digital success in today's competitive landscape.",
        url: "/"
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
        mediumImage: "/linkedInLogo.png",
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