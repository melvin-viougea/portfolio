import React from 'react';
import {SkillCardProps} from "@/types";

export const SkillCard = ({ logo: Logo, title, description }: SkillCardProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
      <Logo size={42} />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default SkillCard;