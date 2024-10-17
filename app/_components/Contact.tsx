import Section from "../../components/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/components/ContactCard";
import React from "react";
import {CONTACTS} from "../../contants";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contactez-moi</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serai heureux de travailler avec vous.
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