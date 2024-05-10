import Section from "./Section";
import {Badge} from "@/components/ui/badge";
import {Code} from "@/app/_components/Code";
import TailwindLogo from "@/app/_components/icons/TailwindLogo";
import NextJsLogo from "@/app/_components/icons/NextJsLogo";
import SpringBootLogo from "@/app/_components/icons/SpringBootLogo";
import SymfonyLogo from "@/app/_components/icons/SymfonyLogo";
import FlutterLogo from "@/app/_components/icons/FlutterLogo";
import DockerLogo from "@/app/_components/icons/DockerLogo";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex flex-col gap-4">
                <div className="flex max-md:flex-col gap-4">
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <NextJsLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next.js</h3>
                        <p className="text-sm text-muted-foreground">I use Next.js for frontend development, providing <Code>fast</Code> and <Code>efficient</Code> web solutions.</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <TailwindLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Tailwind</h3>
                        <p className="text-sm text-muted-foreground">I can create <Code>stunning</Code> user interfaces quickly using TailwindCSS.</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <FlutterLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Flutter</h3>
                        <p className="text-sm text-muted-foreground">I create beautiful <Code>native-like</Code> cross-platform applications using Flutter.</p>
                    </div>
                </div>
                <div className="flex max-md:flex-col gap-4">
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <SpringBootLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Spring Boot</h3>
                        <p className="text-sm text-muted-foreground">I&apos;m proficient in building <Code>robust</Code> and <Code>scalable</Code> backend with Spring Boot.</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <SymfonyLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Symfony</h3>
                        <p className="text-sm text-muted-foreground">I utilize Symfony to develop high <Code>performance</Code> web applications with ease.</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 rounded-xl border bg-card shadow p-4">
                        <DockerLogo size={42}/>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Docker</h3>
                        <p className="text-sm text-muted-foreground">I <Code>deploy</Code> and <Code>manage</Code> applications efficiently with Docker.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Skills;