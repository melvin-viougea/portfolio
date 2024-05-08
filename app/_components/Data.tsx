import {ContactCardProps} from "@/app/_components/ContactCard";
import {SideProjectsProps} from "@/app/_components/SideProjects";
import {Code, MessageCircle, Rss, StickyNote, Weight} from "lucide-react";
import {WorkProps} from "@/app/_components/Work";

export const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        Logo: Code,
        title: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org"
    },
    {
        Logo: StickyNote,
        title: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org"
    },
    {
        Logo: Rss,
        title: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org"
    },
    {
        Logo: MessageCircle,
        title: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org"
    },
    {
        Logo: Weight,
        title: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org"
    },
];

export const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/D4D0BAQHHOQcZ7NMgag/company-logo_100_100/0/1665497303071/solutions_909_logo?e=1723075200&v=beta&t=deog7-bsI48zDkGFMYFuc574f2QNQVbo8585sFOE96M",
        title: "Solutions 909",
        role: "Développeur",
        date: "2022 - Present",
        url: "https://solutions909.fr",
        alternance: true,
    },
    {
        image: "https://media.licdn.com/dms/image/D4D0BAQHHOQcZ7NMgag/company-logo_100_100/0/1665497303071/solutions_909_logo?e=1723075200&v=beta&t=deog7-bsI48zDkGFMYFuc574f2QNQVbo8585sFOE96M",
        title: "Solutions 909",
        role: "Développeur site web",
        date: "Summer 2022",
        url: "https://solutions909.fr",
        freelance: true,
    },
    {
        image: "https://media.licdn.com/dms/image/D4D0BAQHHOQcZ7NMgag/company-logo_100_100/0/1665497303071/solutions_909_logo?e=1723075200&v=beta&t=deog7-bsI48zDkGFMYFuc574f2QNQVbo8585sFOE96M",
        title: "Solutions 909",
        role: "Développeur site web",
        date: "Winter - 2021",
        url: "https://solutions909.fr",
        stage: true,
    },
    {
        image: "https://media.licdn.com/dms/image/C4E0BAQEX8mRWUSThuQ/company-logo_100_100/0/1630568703276/ccy_group_sas_logo?e=1723075200&v=beta&t=atOmiopWg3-2bstms2dndLMKrfKnji2kmJQuPSV5aBY",
        title: "COMPUTERIS",
        role: "Développeur site web",
        date: "June 2021",
        url: "https://computeris.fr",
        stage: true,
    },
];

export const STATUSCONTACTS: ContactCardProps[] = [
    {
        name: "@melvin",
        image: "/contact.png",
        mediumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
        description: "+400",
        url: "https://www.linkedin.com/in/melvin-viougea/"
    },
    {
        name: "Melvin Viougea",
        image: "/contact.png",
        mediumImage: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        description: "+8 projects",
        url: "https://github.com/melvin-viougea"
    },
];

export const CONTACTS: ContactCardProps[] = [
    {
        name: "@melvin",
        image: "/contact.png",
        mediumImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
        description: "+400",
        url: "https://www.linkedin.com/in/melvin-viougea/"
    },
    {
        name: "Melvin Viougea",
        image: "/contact.png",
        mediumImage: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        description: "+8 projects",
        url: "https://github.com/melvin-viougea"
    },
    {
        name: "mviougea@icloud.com",
        image: "/contact.png",
        mediumImage: "https://upload.wikimedia.org/wikipedia/fr/a/a7/Mail_%28Apple%29_logo.png",
        description: "Email me for any inquiries",
        url: "mailto:mviougea@icloud.com"
    },
];