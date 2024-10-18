"use client"

import React, {useState} from "react";
import Section from "../../components/Section";
import {Card} from "@/components/ui/card";
import {SideProjectCard} from "@/components/SideProjectCard";
import {Work} from "@/app/_components/Work";
import {ContactCard} from "@/components/ContactCard";
import {CONTACTS, SCHOOL_PROJECTS, SIDE_PROJECTS, WORK_PROJECTS, WORKS} from "@/contants";
import {WorkProjectCard} from "@/components/WorkProjectCard";

export const Status = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? SCHOOL_PROJECTS
    : SCHOOL_PROJECTS.filter(project => project.categories.includes(selectedCategory));

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-1 flex flex-col w-full h-full gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expérience professionnelle :</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Projets professionnelles :</p>
          <div className="flex flex-col gap-4">
            {WORK_PROJECTS.map((workProject, index) => (
              <WorkProjectCard
                key={index}
                {...workProject}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-1 flex flex-col w-full h-full gap-4">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets personnels :</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((personlProject, index) => (
              <SideProjectCard
                key={index}
                {...personlProject}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez-moi :</p>
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