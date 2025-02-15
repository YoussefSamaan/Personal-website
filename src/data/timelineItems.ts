import {GraduationCap, Building2, Code, Microscope, Trophy, Plane} from 'lucide-react';
import {TimelineItem} from '../types';

export const timelineItems: TimelineItem[] = [
// {
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
        image: "",
        technologies: ["Stable Baselines3", "TensorBoard", "Gymnasium", "Python"],
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
            "Tested model generalization across a diverse dataset by systematically testing multiple architectures using nltk, scikit‑learn, PyTorch, TensorFlow, and Transformers, resulting in the finding that LLM-based classifiers with CoT (ChatGPT‑o1) significantly outperformed alternatives while classical models (Naive Bayes and Logistic Regression) offered similar accuracy (17% accuracy difference) with reduced training time.",
            "Optimized preprocessing efficiency by experimenting with minimal text normalization (lowercasing and punctuation removal) versus no preprocessing, demonstrating that minimal preprocessing not only maintained competitive performance but also shortened training times by 30-99%, implying that the sequence of words is a lot more important.",
        ],
        resumeItem: [
            "Tested model generalization across a diverse sarcastic datasets and found LLM-based classifiers with CoT (ChatGPT‑o1) outperformed alternatives, while classical models maintained similar accuracy (17% difference) with faster training.",
            "Evaluated various preprocessing techniques, demonstrating that minimal preprocessing maintained competitive performance while reducing training times by 30-99%."
        ],
        image: "",
        technologies: ["nltk", "scikit-learn", "PyTorch", "TensorFlow", "Transformers"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Generalization-and-Preprocessing-for-Sarcasm-Detection"}
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
        image: "",
        date: "",
        icon: Plane,
    },

    {
        type: "project",
        title: "Effect of Noisy Rewards on RL-Agent Performance",
        date: "",
        description: [
            "Tested the effect of noise on the reward on the agent's performance",
            "Evaluated Q-learning, Expected SARSA, Deep Q-learning, and Double Deep Q-learning on 2 Gym library environments (Cart Pole and Acrobot) using both normal distribution and uniform distribution of reward noise with various levels of variance.",
            "Concluded that adding noise to the reward function will help the agent find better and faster optimal solutions."
        ],
        resumeItem: [
            "Evaluated four RL strategies (Q-learning, Expected SARSA, DQN, DDQN) on Cart Pole and Acrobot environtments with normal/uniform reward noise, showing controlled noise accelerates convergence.",
            "Concluded that adding noise to the reward function helps RL agents discover optimal policies faster, improving overall performance across various noise levels."
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
            "Architected and implemented a scalable end-to-end data pipeline that extracts data for different customers from a datalake, parses, transforms, compresses, and stores them on Amazon OpenSearch and S3 buckets.",
            "Designed data pipelines to handle 100+GB of data per day for one customer for 10+ customers using PySpark.",
            "Streamlined data delivery to 100+ radio experts, radio engineers, and ML engineers, reducing the time and resources needed to access critical data by over 99%.",
            "Utilized Agile scrum methodologies through daily stand-ups and iterative development, leveraging regular customer feedback to drive continuous improvement."
        ],
        resumeItem: [
            "Architected and implemented a scalable end-to-end data pipeline that extracts data for different customers from a datalake, parses, transforms, compresses, and stores them on Amazon OpenSearch and S3 buckets.",
            "Designed data pipelines to handle 100+GB of data per day for one customer for 10+ customers using PySpark.",
            "Optimized data access for 100+ radio experts, radio engineers, and ML specialists, reducing retrieval time by over 99%.",
            "Utilized Agile scrum methodologies through daily stand-ups and iterative development, leveraging regular customer feedback to drive continuous improvement."
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
        // description: [""],
        image: "",
        technologies: ['', ''],
        links: [
            // { label: 'GitHub', url: '' },
        ],
        icon: Plane,
    },

    {
        type: "project",
        title: "News Coverage of Taylor Swift",
        organization: "",
        location: "",
        date: "",
        description: [
            "Extracted actionable media insights by integrating multiple APIs and applying open coding techniques in Python to analyze sentiment and topic trends in Taylor Swift news coverage, resulting in a clear understanding of prevailing media bias and trending narratives.",
        ],
        resumeItem: [
            "Leveraged multiple APIs and open coding to analyze media coverage trends of Taylor Swift, focusing on sentiment and topics.",
        ],
        image: "",
        technologies: ["Python"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Data-Science"}
        ],
        icon: Code,
    },

    {
        type: "project",
        title: "Splendor",
        organization: "",
        location: "",
        date: "",
        description: [
            "Led and managed a 5-member team to design, document, implement, and test a board game called Splendor.",
            "Designed and implemented REST API for communication between the frontend and the backend.",
            "Implemented the game using Python for the GUI and Java, Maven, and Spring Boot for the backend.",
            "Integrated LobbyService for player registration and login, utilizing SQL for storage and Docker for for startup."
        ],
        image: "",
        technologies: ["Python", "Java", "SQL", "Docker", "Maven", "Spring Boot"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Splendor-Game"}
        ],
        icon: Code,
    },

    {
        type: "project",
        title: "Machine Learning Projects",
        organization: "",
        location: "",
        date: "",
        description: [
            "Project 1: Developed 3 classes, Linear regression, logistic regression, and KNN, from scratch to analyze the Energy Efficiency and Qualitative Bankruptcy data sets from UCI.",
            "Project 2: Designed and implemented a Multi-Layer Perceptron class with regularization and different activation functions from scratch, and used it along with CNN class from TensorFlow to classify image data from the CIFAR-10.",
            "Project 3: Created Naive Bayes Class from scratch and helped with fine-tuning the BERT model from Huggingface for sentiment analysis on the IMDB Movie Review Dataset, along with a detailed analysis of the model and its attention matrix."
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
            "Engineered a program that processes corrupt input files with multiple dictionary files, parses data, and produces a comprehensive report while efficiently classifying information into corresponding sheets.",
            "Automated file and folder renaming in 500+ HTML files, improving hyperlink functionality by 35%.",
            "Developed scripts to identify and rectify over 25% discrepancies between Excel files data and database values, ensuring the integrity and accuracy of the data.",
            "Migrated 1TB of data from Dropbox to SharePoint and eLab to Benchling via APIs, ensuring 100% data integrity.",
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
        type: "project",
        title: "Event Management System",
        organization: "",
        location: "",
        date: "",
        description: [
            "Designed a Festival Management System that enabling seamless creation  of Festivals, Concerts, Workshops, Galas, Screenings, and Coming Soon Events. Added extra functionality such as calculating profit and filtering.",
            "Implemented multiple software design patterns and principles, including encapsulation, flyweight, visitor, and polymorphism, while rigorously testing the code with 100% coverage"
        ],
        image: "",
        technologies: ["Java", "Junit", "Design Patterns"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Event-Management-System"}
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
        image: "https://www.accueilplus.ca/wp-content/uploads/2020/08/mcgill-university-logo-png-transparent-cropped.png",
        technologies: [],
        links: [
            {label: "Website", url: "https://www.mcgill.ca/"}
        ],
        icon: GraduationCap,
    },

    {
        type: "project",
        title: "Solar System Simulation",
        organization: "",
        location: "",
        date: "",
        description: [
            "Developed a realistic solar system model in MATLAB, simulating 8 planets and the sun with high accuracy.",
            "Simulated this system by calculating the gravitational forces all entities have on each other and then updating their positions, velocities, and accelerations.",
            "Used a non-elastic simulation for when two entities collide with each other."
        ],
        image: "",
        technologies: ["MATLAB"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Solar-System"}
        ],
        icon: Code,
    },

    {
        type: "project",
        title: "Knight Movement",
        organization: "",
        location: "",
        date: "",
        description: [
            "Wrote a program to tell the user how many steps are needed for a knight (a chess piece) to move from one square to another.",
            "I have multiple solutions for this problem. One of them is in O(1) time."
        ],
        image: "",
        technologies: ["Python"],
        links: [
            {label: "GitHub", url: "https://github.com/YoussefSamaan/Knight-Movement"}
        ],
        icon: Code,
    },

    {
        type: "education",
        title: "DEC in Pure and Applied Science",
        organization: "TAV College",
        location: "Montreal, CA",
        date: "",
        image: "https://scontent.fyhu1-1.fna.fbcdn.net/v/t39.30808-1/280660618_5436449763078059_1571769543154174045_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=zY76PteALSEQ7kNvgEz2VW8&_nc_oc=AdhDad0bAG27pocRJJrzeofHT4K5MaVyT2Pl3pd67GJViHaowa_j5HQFp9kOx0qL0hk&_nc_zt=24&_nc_ht=scontent.fyhu1-1.fna&_nc_gid=AlgbtTtZJLIh_T2CJoAQEIy&oh=00_AYA7jcEokxpvgtE1UlNDNACtJiNCBKj1leJSZ4c3uEVpKQ&oe=67B56E57",
        links: [
            {label: 'Website', url: 'https://www.tav.ca/'},
        ],
        icon: GraduationCap,
    },

]
