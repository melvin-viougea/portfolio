import React from 'react';
import Section from "./Section";
import Image from "next/image";
import MelvinImage from "@/public/melvinImage.png";
import MavieetudianteLogo from "@/public/maVieEtudianteLogo.png";
import FrenchLogo from "@/public/frenchLogo.png";
import GithubIcon from "@/app/_components/icons/GitHubLogo";
import Link from "next/link";
import {Code} from "@/app/_components/Code";
import {Card} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl font-bold text-primary">Melvin Viougea</h2>
                <h3 className="font-caption text-3xl">Software developper</h3>
                <p className="text-base">
                    My <i className="inline-block my-1">love</i> for technology and innovation drives me to create a variety of modern applications using the <u className="inline-block my-1">latest available technologies</u> and uploading them in {" "}
                    <Link href="https://github.com/melvin-viougea" target="_blank">
                        <Code className="inline-flex items-center gap-2">
                            <GithubIcon size={16} className="inline"/> GitHub
                        </Code>
                    </Link>
                    , currently I&apos;m working on an exciting project called {" "}
                    <Link href="https://svenpiers05.wixsite.com/mon-bde" target="_blank">
                        <Code className="inline-flex items-center gap-2">
                            <Image
                                src={MavieetudianteLogo}
                                width={16}
                                height={16}
                                className="h-auto"
                                alt="MaVieEtudiante Logo"
                            />
                            MaVieEtudiante
                        </Code>
                    </Link>
                    . Living in {" "}
                        <Code className="inline-flex items-center gap-2">
                            <Image
                                src={FrenchLogo}
                                width={16}
                                height={16}
                                className="h-auto"
                                alt="French Flag"
                            />
                            France
                        </Code>
                        {" "}
                        at Marseille.
                </p>
                <div className="flex max-md:flex-col gap-4 w-full">
                    <Link  href="/melvinViougeaEnsglishResume.pdf" target="_blank" className="w-full"  rel="noopener noreferrer" locale={false} download>
                        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                            <div className="mr-auto">
                                <p className="text-lg font-semibold">English Resume</p>
                            </div>
                            <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" />
                        </Card>
                    </Link>
                    <Link  href="/melvinViougeaFrenchResume.pdf" target="_blank" className="w-full"  rel="noopener noreferrer" locale={false} download>
                        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                            <div className="mr-auto">
                                    <p className="text-lg font-semibold">French Resume</p>
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
                    alt="Melvin's picture"
                />
            </div>
        </Section>
    );
};

export default Hero;