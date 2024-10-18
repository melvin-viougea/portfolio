import Link from "next/link";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import React from "react";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  internship?: boolean;
  apprenticeship?: boolean;
  freelance?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} target="_blank" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors py-1 px-2 rounded-md group">
      <Image
        src={props.image}
        alt={props.title}
        width={500}
        height={500}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        {props.internship && <Badge variant={"outline"} className="group-hover:border-foreground">Internship</Badge>}
        {props.apprenticeship && <Badge variant={"outline"} className="group-hover:border-foreground">Apprenticeship</Badge>}
        {props.freelance && <Badge variant={"outline"} className="group-hover:border-foreground">Freelance</Badge>}
        <p className="text-xs text-muted-foreground mt-1">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};