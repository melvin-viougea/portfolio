import React from "react";
import {SchoolProjectProps} from "@/types";

export const SchoolProjectCard = (props: SchoolProjectProps) => {
  return (
    <div className="items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-2 rounded-md">
      <p className="text-lg font-semibold">{props.title} - {props.categories.join(", ")}</p>
      <p className="text-sm text-muted-foreground">{props.description}</p>
    </div>
  );
};