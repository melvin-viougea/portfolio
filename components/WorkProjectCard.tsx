import React from "react";
import {WorkProjectProps} from "@/types";

export const WorkProjectCard = (props: WorkProjectProps) => {
  return (
    <div className="items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-2 rounded-md">
      <p className="text-lg font-semibold">{props.title}</p>
      <p className="text-sm text-muted-foreground">{props.description}</p>
    </div>
  );
};