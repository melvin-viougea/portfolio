import Section from "./Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_components/ContactCard";
import React from "react";
import {CONTACTS} from "@/app/_components/Data";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Contact me</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                {CONTACTS.map((contact, index) => (
                    <ContactCard
                        key={index}
                        {...contact}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Contact;