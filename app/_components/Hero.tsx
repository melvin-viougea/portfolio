import React from 'react';
import Section from "./Section";
import Image from "next/image";
import MelvinImage from "@/public/melvin.png";
import MavieetudianteLogo from "@/public/mve.png";
import FrenchImage from "@/public/french.png";
import GithubIcon from "@/app/_components/icons/GitHubLogo";
import Link from "next/link";
import {Code} from "@/app/_components/Code";

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption text-5xl font-bold text-primary">Melvin Viougea</h2>
                <h3 className="font-caption text-3xl">Software developper</h3>
                <p className="text-base">
                    I love building a tons of new modern applications with new technologies and uploading them in {" "}
                    <Link href="https://github.com/melvin-viougea">
                        <Code className="inline-flex items-center gap-2">
                            <GithubIcon size={16} className="inline" /> GitHub
                        </Code>
                    </Link>
                    , currently I&apos;m working on a new project called {" "}
                    <Link href="/">
                        <Code className="inline-flex items-center gap-2">
                            <Image
                                src={MavieetudianteLogo}
                                width={16}
                                height={16}
                                className="h-auto"
                                alt="MaVieEtudiante logo"
                            />
                            MaVieEtudiante
                        </Code>
                    </Link>
                    , Living in {" "}
                    <Link href="/">
                        <Code className="inline-flex items-center gap-2">
                            <Image
                                src={FrenchImage}
                                width={16}
                                height={16}
                                className="h-auto"
                                alt="french flag"
                            />
                            France
                        </Code>
                        {" "}
                        at Marseille.
                    </Link>
                </p>
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