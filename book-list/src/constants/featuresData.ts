import type { LucideIcon } from "lucide-react";
import { ShoppingCart, BadgeCheck, Tag, ShieldPlus } from 'lucide-react';

export interface FeaturesItem {
    id: string;
    title: string;
    description: string,
    icon: LucideIcon
}

export const featuresData: FeaturesItem[] = [
    {
        id: "1",
        title: "Free delivery",
        description: "Consectetur adipi elit lorem ipsum dolor sit amet",
        icon: ShoppingCart
    },
    {
        id: "2",
        title: "Quality guarantee",
        description: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
        icon: BadgeCheck
    },
    {
        id: "3",
        title: "Daily offers",
        description: "Amet consectetur adipi elit loreme ipsum dolor sit.",
        icon: Tag
    },
    {
        id: "4",
        title: "100% secure payment",
        description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
        icon: ShieldPlus
    },
]