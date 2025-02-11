import {GraduationCap, Building2, Code, Microscope, Trophy, Plane} from 'lucide-react';
import {TimelineItem} from '../types';

export const timelineItems: TimelineItem[] = [
// {
//     id: x,
//     type: "",
//     title: "",
//     organization: "",
//     location: "",
//     date: "",
//     description: [""],
//     image: "",
//     technologies: ['', ''],
//     links: [
//     { label: 'GitHub', url: '' },
//     ],
//     icon: ,
//   },

    {
        type: "award",
        title: "Poker bot Competition",
        organization: "",
        location: "McGill University",
        date: "Feb 9-10, 2025",
        description: ["Created multiple bots to win compete against other teams.", "First place 2x and Third place 2x.", "Won $46 😆."],
        image: "",
        technologies: ['', ''],
        links: [
            {label: '', url: ''},
        ],
        icon: Trophy,
    },

    {
        type: "research",
        title: "Research Assistant in Reinforcement Learning & NeuroAI",
        organization: "McGill University",
        location: "Montreal, CA",
        date: "Sep. 2024 – Present",
        description: [
            "Investigating sparse reward RL algorithms (PPO, SAC) in AnimalAI environments to mimic biological learning."
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/McGill_University_Coat_of_Arms.svg/192px-McGill_University_Coat_of_Arms.svg.png",
        technologies: ["PPO", "SAC", "Reinforcement Learning", "Python"],
        links: [],
        icon: Microscope,
    },

    {
        type: "project",
        title: "Generalization and Preprocessing for Sarcasm Detection",
        organization: "",
        location: "",
        date: "",
        description: [
            "Tested multiple models on a diverse dataset, evaluating generalization and preprocessing for sarcasm detection.",
            "Found RL-based LLMs outperformed other models."
        ],
        image: "",
        technologies: ["nltk", "scikit-learn", "PyTorch", "TensorFlow", "Transformers"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Data-Science"}
        ],
        icon: Code,
    },

    {
        type: "award",
        title: "30th place ICPC NENA",
        organization: "",
        location: "",
        date: "2024",
        description: ["Placed 30th in ICPC NENA 2024 with one month of preparation."],
        image: "",
        technologies: ['', ''],
        links: [
            // { label: '', url: '' },
        ],
        icon: Trophy,
    },

    {
        type: "travel",
        title: "Visited China",
        organization: "",
        location: "",
        date: "",
        description: [""],
        image: "",
        technologies: ['', ''],
        links: [
            // { label: 'GitHub', url: '' },
        ],
        icon: Plane,
    },

    {
        type: "project",
        title: "Noisy Rewards on RL-Agent Performance",
        organization: "",
        location: "",
        date: "",
        description: [
            "Evaluated Q-learning, SARSA, DQN, and DDQN on Cart Pole and Acrobot Env with varying reward noise.",
            "Concluded that reward noise enhances agent performance by facilitating faster convergence."
        ],
        image: "",
        technologies: ["Python", "NumPy", "Matplotlib", "PyTorch", "Gymnasium"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/RL-projects"}
        ],
        icon: Code,
    },


    {
        type: "work",
        title: "Data Engineering Intern",
        organization: "Ericsson",
        location: "Montreal, CA",
        date: "January - August 2024",
        description: [
            "Implemented ETL pipelines and storage solutions on Amazon OpenSearch and S3, ensuring data reliability.",
            "Architected scalable data pipelines with PySpark, processing 100+ GB/day per customer for 10+ customers.",
            "Streamlined data delivery to 100+ engineers, reducing access time by 99% and boosting ML model efficiency."
        ],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQGm9tH6lKJ-Gg/company-logo_200_200/company-logo_200_200/0/1632729373904/ericsson_logo?e=2147483647&v=beta&t=6d0mFX1zorP630tMA6rBw_5wrO-zagglpmUP7hQd6F8",
        technologies: ["Python", "PySpark", "NumPy", "AWS", "Argo Workflow"],
        links: [],
        icon: Building2,
    },

    // {
    //     type: "work",
    //     title: "Summer Camp instructor",
    //     organization: "",
    //     location: "Longueuil, CA",
    //     date: "",
    //     description: [
    //         "Thought kids ages from 5-12 how to play chess, and other strategy games.",
    //     ],
    //     image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/McGill_University_Coat_of_Arms.svg/192px-McGill_University_Coat_of_Arms.svg.png",
    //     technologies: [],
    //     links: [],
    //     icon: Building2,
    // },

    {
        type: "travel",
        title: "Visited Japan",
        organization: "",
        location: "",
        date: "",
        description: [""],
        image: "",
        technologies: ['', ''],
        links: [
            // { label: 'GitHub', url: '' },
        ],
        icon: Plane,
    },

    {
        type: "project",
        title: "Machine Learning Projects",
        organization: "",
        location: "",
        date: "",
        description: [
            "Developed Linear Regression, Logistic Regression, and KNN from scratch.",
            "Implemented a Multi-Layer Perceptron with regularization.",
            "Fine-tuned BERT for IMDB sentiment analysis."
        ],
        image: "",
        technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "HuggingFace", "SimpleTransformers"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/ML-projects"}
        ],
        icon: Code,
    },

    {
        type: "work",
        title: "Software Developer and Data Scientist",
        organization: "DermBiont",
        location: "Boston, US",
        date: "May - August 2022",
        description: [
            "Migrated 1TB of data from Dropbox to SharePoint and eLab to Benchling via APIs, ensuring 100% data integrity.",
            "Developed scripts to resolve 25% data discrepancies between Excel and databases, enhancing data accuracy.",
            "Created a program to process corrupt files, parse data, and generate reports, saving 20+ hours/week."
        ],
        image: "https://media.licdn.com/dms/image/v2/C560BAQEeQhQal_lmhQ/company-logo_200_200/company-logo_200_200/0/1655078101537/dermbiont_logo?e=2147483647&v=beta&t=oR-1GLJPOnVpdCCTuseuJXnZkOeOfdLId98eWsDi6w4",
        technologies: ["Python", "SQL", "API Development", "Data Processing", "Automation"],
        links: [],
        icon: Building2,
    },


    {
        type: "project",
        title: "Risk-Free Trading Website",
        organization: "",
        location: "",
        date: "",
        description: [
            "Developed a Django-based stock trading simulator web application for risk-free practice.",
            "Integrated Finnhub’s real-time stock price API to provide up-to-date market data."
        ],
        image: "",
        technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/trading_website"}
        ],
        icon: Code,
    },
    {
        type: "education",
        title: "B.Sc. in Computer Science, Minor in Statistics",
        organization: "McGill University",
        location: "Montreal, CA",
        date: "Sep. 2021 – Apr. 2025",
        description: [
            "Courses: Software Design, Algorithm Design, Databases, OS, DS, Applied ML, RL, NLP, Distributed Systems, DSA, OOP, Probability, Statistics, Linear Algebra, Stochastic Processes, Discrete Mathematics."
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/McGill_University_Coat_of_Arms.svg/192px-McGill_University_Coat_of_Arms.svg.png",
        technologies: [],
        links: [],
        icon: GraduationCap,
    },
    {
        type: "project",
        title: "Solar System Simulation",
        organization: "",
        location: "",
        date: "",
        description: [
            "Developed a realistic solar system model in MATLAB, simulating 8 planets and the sun with high accuracy."
        ],
        image: "",
        technologies: ["MATLAB"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Solar-System"}
        ],
        icon: Code,
    },

    {
        type: "education",
        title: "DEC in Pure and Applied Science",
        organization: "TAV College",
        location: "",
        date: "",
        description: [""],
        image: "",
        technologies: ['', ''],
        links: [
            {label: 'GitHub', url: ''},
        ],
        icon: GraduationCap,
    },

]
