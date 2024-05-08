import Link from "next/link";
import React from "react";
import {LucideIcon} from "lucide-react";

export type SideProjectsProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

export const SideProjects = (props: SideProjectsProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-md">
                <props.Logo size={16} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};