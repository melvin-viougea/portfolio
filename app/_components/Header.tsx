import Section from "../../components/Section";
import GithubIcon from "@/app/_components/icons/GitHubLogo";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import LinkedinIcon from "@/app/_components/icons/LinkedInLogo";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4 z-10 backdrop-blur-lg bg-background/90 border-b border-accent/50">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-foreground">melvin-viougea.com</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/melvin-viougea" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="https://linkedin.com/in/melvin-viougea" target="_blank" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    );
};

export default Header;