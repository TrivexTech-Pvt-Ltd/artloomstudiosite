import { StaticImageData } from "next/image";
import {
    ProjectImg1,
    ProjectImg2,
    ProjectImg3,
    ProjectImg4,
    ProjectImg5,
    ProjectImg6,
    ProjectImg7,
    ProjectImg8,
    ProjectImg9,
} from "../utils/staticimages";

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: StaticImageData;
    tags?: string[];
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Prototype enclosure for electronics startup",
        description: "Custom-designed prototype enclosures for innovative electronics startups, featuring precise dimensions and professional finish.",
        image: ProjectImg1,
        tags: ["Prototype", "Electronics", "Enclosure"],
    },
    {
        id: 2,
        title: "Project Beta",
        category: "Custom figurines & collectibles",
        description: "Highly detailed custom figurines and collectible models with intricate designs and smooth surface finish.",
        image: ProjectImg2,
        tags: ["Figurines", "Collectibles", "Custom"],
    },
    {
        id: 3,
        title: "Product Gamma",
        category: "3D printed home decor items",
        description: "Modern and elegant home decor pieces that blend functionality with aesthetic appeal.",
        image: ProjectImg3,
        tags: ["Home Decor", "Design", "Interior"],
    },
    {
        id: 4,
        title: "Product Delta",
        category: "Mechanical parts & tools",
        description: "Precision-engineered mechanical parts and tools with high durability and accuracy for industrial applications.",
        image: ProjectImg4,
        tags: ["Mechanical", "Tools", "Industrial"],
    },
    {
        id: 5,
        title: "Architectural Models",
        category: "High-detail scale models",
        description: "Stunning architectural scale models with exceptional detail for presentations and exhibitions.",
        image: ProjectImg5,
        tags: ["Architecture", "Scale Model", "Professional"],
    },
    {
        id: 6,
        title: "Artistic Sculptures",
        category: "Complex geometry art pieces",
        description: "Breathtaking artistic sculptures featuring complex geometries and innovative design concepts.",
        image: ProjectImg6,
        tags: ["Art", "Sculpture", "Creative"],
    },
    {
        id: 7,
        title: "Custom Lithophanes",
        category: "Personalized light boxes",
        description: "Beautiful personalized lithophanes that create stunning light-based imagery for memorable gifts.",
        image: ProjectImg7,
        tags: ["Lithophane", "Gift", "Personalized"],
    },
    {
        id: 8,
        title: "University Prototypes",
        category: "Engineering student projects",
        description: "Supporting academic excellence with precise prototypes for engineering research and student projects.",
        image: ProjectImg8,
        tags: ["Education", "Prototype", "Engineering"],
    },
    {
        id: 9,
        title: "Miniature Figures",
        category: "Detailed tabletop models",
        description: "Intricately detailed miniature figures perfect for tabletop gaming and collecting enthusiasts.",
        image: ProjectImg9,
        tags: ["Miniatures", "Gaming", "Tabletop"],
    },
];

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
    return projectsData.find((project) => project.id === id);
};

// Helper function to get projects by tag
export const getProjectsByTag = (tag: string): Project[] => {
    return projectsData.filter((project) =>
        project.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
    return projectsData.filter((project) =>
        project.category.toLowerCase().includes(category.toLowerCase())
    );
};

// Export total count
export const totalProjects = projectsData.length;
