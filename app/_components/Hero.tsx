import React from 'react';
import Section from "../../components/Section";
import Image from "next/image";
import MelvinImage from "@/public/melvinImage.png";
import MavieetudianteLogo from "@/public/maVieEtudianteLogo.png";
import FrenchLogo from "@/public/frenchLogo.png";
import GithubIcon from "@/app/_components/icons/GitHubLogo";
import Link from "next/link";
import {Code} from "@/components/Code";
import {Card} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";

export const Hero = () => {
    return (
      <Section className="flex max-md:flex-col items-start gap-4">
          <div className="flex-[3] w-full flex flex-col gap-2">
              <h2 className="font-caption text-5xl font-bold text-primary">Melvin Viougea</h2>
              <h3 className="font-caption text-3xl">Développeur</h3>
              <p className="text-base">
                  Ma <i className="inline-block my-1">passion</i> pour la technologie et l&apos;innovation me pousse à créer différentes applications modernes en utilisant les <u className="inline-block my-1">technologies les plus récentes</u>, et à les publier sur {" "}
                  <Link href="https://github.com/melvin-viougea" target="_blank">
                      <Code className="inline-flex items-center gap-2">
                          <GithubIcon size={16} className="inline"/> GitHub
                      </Code>
                  </Link>
                  . Actuellement, je travaille sur un projet appelé {" "}
                  <Link href="https://svenpiers05.wixsite.com/mon-bde" target="_blank">
                      <Code className="inline-flex items-center gap-2">
                          <Image
                            src={MavieetudianteLogo}
                            width={16}
                            height={16}
                            className="h-auto"
                            alt="Logo MaVieEtudiante"
                          />
                          MaVieEtudiante
                      </Code>
                  </Link>
                  . Je vis en {" "}
                  <Code className="inline-flex items-center gap-2">
                      <Image
                        src={FrenchLogo}
                        width={16}
                        height={16}
                        className="h-auto"
                        alt="Drapeau français"
                      />
                      France
                  </Code>
                  {" "}
                  à Marseille.
              </p>
              <div className="flex max-md:flex-col gap-4 w-full">
                  <Link  href="/melvinViougeaFrenchResume.pdf" target="_blank" className="w-full"  rel="noopener noreferrer" locale={false} download>
                      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                          <div className="mr-auto">
                              <p className="text-lg font-semibold">CV en français</p>
                          </div>
                          <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" />
                      </Card>
                  </Link>
                  <Link  href="/melvinViougeaEnglishResume.pdf" target="_blank" className="w-full"  rel="noopener noreferrer" locale={false} download>
                      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                          <div className="mr-auto">
                              <p className="text-lg font-semibold">CV en anglais</p>
                          </div>
                          <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" />
                      </Card>
                  </Link>
              </div>
          </div>
          <div className="flex-[2] max-md:m-auto ml-auto">
              <Image
                src={MelvinImage}
                width={500}
                height={500}
                className="rounded-full w-full h-auto max-w-xs max-md:w-56"
                alt="Photo de Melvin Viougea"
              />
          </div>
      </Section>
    );
};

export default Hero;
