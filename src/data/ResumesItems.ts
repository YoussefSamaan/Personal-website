import {ResumeItem} from "../types.ts";

export const resumes: ResumeItem[] = [
    {
        name: "Software Engineering Resume",
        description: "This resume does not have a research section. It applies to also Data engineering and data science",
        lastModified: "2025-02-19",
        link: `${import.meta.env.BASE_URL}Resumes/Youssef_Samaan_Resume.pdf`,
    },
    {
        name: "Machine Learning and Research Resume",
        description: "This resume includes a research section, more information.",
        lastModified: "2025-02-19",
        link: `${import.meta.env.BASE_URL}Resumes/Youssef_Samaan_Resume_ML_Research.pdf`,
    },
    {
        name: "Software Engineering Resume with more projects",
        description: "This resume does not have a research section, and more projects. It applies to also Data engineering and data science",
        lastModified: "2025-02-12",
        link: `${import.meta.env.BASE_URL}Resumes/Youssef_Samaan_Resume_projects.pdf`,
    },
    {
        name: "Machine Learning and Research Resume with more projects",
        description: "This resume includes a research section, and more projects.",
        lastModified: "2025-02-12",
        link: `${import.meta.env.BASE_URL}Resumes/Youssef_Samaan_Resume_ML_projects.pdf`,
    },
];
