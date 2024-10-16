import React, {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("inline-block bg-accent/30 hover:bg-accent/50 transition-colors font-mono text-primary border border-accent px-1 py-0.5 my-1 rounded-md", className)} {...props} />
  );
}