import React from "react";

declare type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
};

declare type SideProjectProps = {
  urlLogo: string;
  title: string;
  description: string;
  url: string;
};

declare type WorkProjectProps = {
  title: string;
  description: string;
};

declare type SchoolProjectProps = {
  title: string;
  categories: string[];
  description: string;
};

declare type SkillCardProps = {
  logo: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
};

declare type SpacingProps = {
  size: "xs" | "sm" | "md" | "lg";
};