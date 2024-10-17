import Section from "../../components/Section";
import { Badge } from "@/components/ui/badge";
import SkillCard from "@/components/SkillCard";
import { SKILLS } from "@/contants";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Mes technologies préférées...
      </h2>
      {SKILLS.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-4">
          <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            {category.category}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Skills;