"use client"

import React, {useState} from "react";
import Section from "../../components/Section";
import {Card} from "@/components/ui/card";
import {SchoolProjectCard} from "@/components/SchoolProjectCard";
import {categories, SCHOOL_PROJECTS} from "@/contants";

export const School = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous"
    ? SCHOOL_PROJECTS
    : SCHOOL_PROJECTS.filter(project => project.categories.includes(selectedCategory));

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-1 flex flex-col w-full h-full gap-4">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets scolaires :</p>
          <div className="mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category, index) => (
                <option key={index} value={category} className="bg-gray-800 text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProjects.map((scolarProject, index) => (
              <SchoolProjectCard
                key={index}
                {...scolarProject}
              />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default School;
