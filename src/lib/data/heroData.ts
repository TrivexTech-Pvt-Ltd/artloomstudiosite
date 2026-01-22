import { StaticImageData } from "next/image";
import { MainImg1, MainImg2, MainImg3 } from "../utils/staticimages";

export interface HeroSlide {
    id: number;
    image: StaticImageData;
    alt: string;
    title?: string;
    description?: string;
}

export const heroSlidesData: HeroSlide[] = [
    {
        id: 1,
        image: MainImg1,
        alt: "3D Printing Nozzle",
        title: "Precision Engineering",
        description: "High-quality 3D printing with exceptional detail and accuracy",
    },
    {
        id: 2,
        image: MainImg2,
        alt: "Industrial Fabrication",
        title: "Industrial Solutions",
        description: "Professional-grade fabrication for your business needs",
    },
    {
        id: 3,
        image: MainImg3,
        alt: "Abstract 3D Forms",
        title: "Creative Innovation",
        description: "Transform your ideas into stunning 3D reality",
    },
];

// Export total count
export const totalSlides = heroSlidesData.length;
