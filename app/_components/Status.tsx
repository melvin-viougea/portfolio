import Section from "./Section";
import {Card} from "@/components/ui/card";
import React from "react";
import {SideProjects} from "@/app/_components/SideProjects";
import {Work} from "@/app/_components/Work";
import {ContactCard} from "@/app/_components/ContactCard";
import {CONTACTS, SIDE_PROJECTS, WORKS} from "@/app/_components/Data";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-1 w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side and fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProjects
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-1 flex flex-col w-full h-full gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work experience</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    {CONTACTS.map((contact, index) => (
                        <ContactCard
                            key={index}
                            {...contact}
                        />
                    ))}
                </Card>
            </div>
        </Section>
    );
};


export default Status;