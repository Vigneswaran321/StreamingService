import { Clock, Edit, ArrowUpNarrowWide } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IInfoCard {
    title: string;
    icon: LucideIcon;
    bodyText: string;
    id: number;
}

const infoCards: IInfoCard[] = [
    {
        title: "24/7 Content Generation",
        bodyText: "NewGenius keeps the content flowing round the clock with AI-powered algorithms, ensuring you're always ahead of the curve.",
        icon: Clock,
        id: 1
    },
    {
        title: "Maximize Productivity",
        bodyText: "With NewGenius, spend less time curating content and more time driving revenue. Let AI handle the heavy lifting while you focus on growth.",
        icon: Edit,
        id: 2
    },
    {
        title: "Stay Ahead Always",
        bodyText: "Never miss a beat with NewGenius. Our AI tools analyze trends and deliver insights 24/7, empowering you to make informed decisions.",
        icon: ArrowUpNarrowWide,
        id: 3
    },
];

export default infoCards;
