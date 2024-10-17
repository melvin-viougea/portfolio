import Section from "../../components/Section";
import { Card } from "@/components/ui/card";
import React from "react";
import { SideProjectCard } from "@/components/SideProjectCard";
import { Work } from "@/app/_components/Work";
import { ContactCard } from "@/components/ContactCard";
import { CONTACTS, SIDE_PROJECTS, WORKS } from "../../contants";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-1 w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets personnels</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-1 flex flex-col w-full h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expérience professionnelle</p>
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
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
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