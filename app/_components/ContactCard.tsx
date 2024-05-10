import {Card} from "@/components/ui/card";
import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";

export type ContactCardProps = {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url: string;
};

export const ContactCard = (props: ContactCardProps) => {
    return (
        <Link href={props.url} target="_blank" className="w-full">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative">
                    <Image
                        src={props.image}
                        alt={props.name}
                        width={500}
                        height={500}
                        className="w-10 h-10 rounded-full object-contain"
                    />
                    <Image
                        src={props.mediumImage}
                        alt={props.name}
                        width={500}
                        height={500}
                        className="w-4 h-4 absolute -bottom-1 -right-1 rounded object-contain"
                    />
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">{props.name}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{props.description}</p>
                </div>
                <ArrowUpRight size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4" />
            </Card>
        </Link>
    );
}