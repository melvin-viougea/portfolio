import Link from "next/link";
import React from "react";
import Image from "next/image";
import {SideProjectProps} from "@/types";

export const SideProjectCard = (props: SideProjectProps) => {
  return (
    <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-2 rounded-md">
      <Image
        src={props.urlLogo}
        alt={props.title}
        width={500}
        height={500}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};