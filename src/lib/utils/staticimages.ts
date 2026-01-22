// Main Images
import MainImg1 from "../../../public/img-1.jpg";
import MainImg2 from "../../../public/img-2.jpg";
import MainImg3 from "../../../public/img-3.jpg";
import Logo from "../../../public/logo.jpg";

// Project Images
import ProjectImg1 from "../../../public/project/img-1.jpg";
import ProjectImg2 from "../../../public/project/img-2.jpg";
import ProjectImg3 from "../../../public/project/img-3.jpg";
import ProjectImg4 from "../../../public/project/img-4.jpg";
import ProjectImg5 from "../../../public/project/img-5.jpg";
import ProjectImg6 from "../../../public/project/img-6.jpg";
import ProjectImg7 from "../../../public/project/img-7.jpg";
import ProjectImg8 from "../../../public/project/img-8.jpg";
import ProjectImg9 from "../../../public/project/img-9.jpg";

// SVG Icons
import FileSvg from "../../../public/file.svg";
import GlobeSvg from "../../../public/globe.svg";
import NextSvg from "../../../public/next.svg";
import VercelSvg from "../../../public/vercel.svg";
import WindowSvg from "../../../public/window.svg";

// Export all main images
export const MainImages = {
    img1: MainImg1,
    img2: MainImg2,
    img3: MainImg3,
    logo: Logo,
};

// Export all project images as an array for easy mapping
export const ProjectImages = [
    ProjectImg1,
    ProjectImg2,
    ProjectImg3,
    ProjectImg4,
    ProjectImg5,
    ProjectImg6,
    ProjectImg7,
    ProjectImg8,
    ProjectImg9,
];

// Export project images as an object for direct access
export const ProjectImagesObj = {
    img1: ProjectImg1,
    img2: ProjectImg2,
    img3: ProjectImg3,
    img4: ProjectImg4,
    img5: ProjectImg5,
    img6: ProjectImg6,
    img7: ProjectImg7,
    img8: ProjectImg8,
    img9: ProjectImg9,
};

// Export SVG icons
export const SvgIcons = {
    file: FileSvg,
    globe: GlobeSvg,
    next: NextSvg,
    vercel: VercelSvg,
    window: WindowSvg,
};

// Individual exports for direct imports
export { MainImg1, MainImg2, MainImg3, Logo };
export { ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5, ProjectImg6, ProjectImg7, ProjectImg8, ProjectImg9 };
export { FileSvg, GlobeSvg, NextSvg, VercelSvg, WindowSvg };
