import gragoPreview from "../assets/projects/grago.jpeg";
import snadderPreview from "../assets/projects/snadder.webp";

export type ImagePosition = "top" | "right" | "bottom" | "left";

export type Project = {
    title: string;
    description: string;
    tags: string[];
    githubURL?: string;
    hostedURL?: string;
    imageURL?: string;
    imagePosition?: ImagePosition;
};

export const projects: Project[] = [
    {
        title: "Snadder",
        description:
            "Snadder is a spin on the popular Snakes 'n Ladders game, combining the problem-solving ability of Sudoku and the user experience of Wordle, developed during my tenure at Bhoos.",
        tags: ["Python", "React", "Tailwind"],
        imageURL: snadderPreview,
        hostedURL: "https://snadder.io/",
        imagePosition: "top",
    },
    {
        title: "Global AI Adoption Dashboard",
        description:
            "An interactive 3D globe dashboard showing AI tool adoption trends across countries and industries, inspired by Pudding.cool's storytelling approach.",
        tags: ["React", "GlobeGl", "Data Visualization"],
        githubURL: "https://github.com/crypticsy/ai-adoption-dashboard/",
        hostedURL: "https://crypticsy.github.io/ai-adoption-dashboard/",
        imageURL: "https://github.com/crypticsy/ai-adoption-dashboard/blob/master/public/demo.gif?raw=true",
        imagePosition: "left",
    },
    {
        title: "Sanctuary.io",
        description:
            "A compilation of modest p5.js projects conceived during moments of leisure, ignited by a sense of curiosity.",
        tags: ["P5JS", "Javascript"],
        githubURL: "https://github.com/crypticsy/sanctuary",
        hostedURL: "https://crypticsy.github.io/sanctuary/",
    },
    {
        title: "Vision Caster",
        description:
            "An interactive image analysis system for the visually impaired. It uses the BLIP model on a Raspberry Pi to process images and give real-time descriptive captions and auditory feedback.",
        tags: ["RasberryPi", "Transformers", "Azure"],
        githubURL: "https://github.com/crypticsy/VisionCaster",
    },
    {
        title: "Path Visualizer",
        description:
            "A python project to visualize search algorithms on a grid,  built using the flask framework and the front-end is built using HTML, CSS and JavaScript, as well as uses tailwindcss for styling.",
        tags: ["Flask", "Algorithms", "Javascript"],
        githubURL: "https://github.com/crypticsy/PathVisualizer",
        hostedURL: "https://path-visualizer-crypticsy.vercel.app/",
        imageURL: "https://github.com/crypticsy/PathVisualizer/blob/master/demo.gif?raw=true",
        imagePosition: "left",
    },
    {
        title: "Ropey DVD Management System",
        description:
            "An inventory and rental management system developed in ASP.NET MVC Framework that has multiple level of access based on user level, as well as an interactive user interface to help with the leasing process of DVD within the store.",
        tags: ["ASP.NET", "MVC", "Bootstrap"],
        githubURL: "https://github.com/crypticsy/RopeyDVDManagementSystem",
    },
    {
        title: "The Marauder's Map",
        description:
            "A web application inspired by the Marauder's Map from the Harry Potter universe, enabling users to explore a digital map of Hogwarts with moving footprints and hidden rooms.",
        tags: ["React-Three-Fiber", "Typescript"],
        imageURL: "https://github.com/crypticsy/the-marauders-map/blob/master/public/demo.gif?raw=true",
        githubURL: "https://github.com/crypticsy/the-marauders-map",
        hostedURL: "https://crypticsy.github.io/the-marauders-map/",
        imagePosition: "top",
    },
    {
        title: "HAR System",
        description:
            "Human Activity Recognition (HAR) system designed to process and analyze sensor data to recognize human activities using XGBoost for the CASAS Smart Home Data Set - Dataset 17.",
        tags: ["Streamlit", "XGBoost"],
        imageURL:
            "https://github.com/crypticsy/human-activity-recognition/blob/master/Images/demo.gif?raw=true",
        githubURL: "https://github.com/crypticsy/human-activity-recognition",
        imagePosition: "right",
    },
    {
        title: "Chess Engine",
        description:
            "A full fledge chess game developed using pygame, and contains an ai engine that utilizes the minimax and alpha beta pruning algorithms to offer an immersive player-versus-bot experience.",
        tags: ["Python", "PyGame", "Minimax Algorithm"],
        githubURL:
            "https://github.com/crypticsy/Playground/tree/master/Game_Engine/Chess/",
    },
    {
        title: "Animated Movie Ontology",
        description:
            "A semantic programming application tailored for the animated film industry that organizes and analyzes complex data sets from animated films, leveraging ontologies and RDF files to facilitate this process.",
        tags: ["Semantics", "Protege", "Streamlit"],
        githubURL:
            "https://github.com/crypticsy/Academia/tree/master/Animated_Movie_Ontology",
    },
    {
        title: "Pocket Booth",
        description:
            "A pocket-sized digital photo booth application that allows users to capture instant photo strips and store them locally.",
        tags: ["Camera", "Google-oauth", "Typescript"],
        imageURL: "https://crypticsy.github.io/pocket-booth/home_screen.png",
        githubURL: "https://github.com/crypticsy/pocket-booth",
        hostedURL: "https://crypticsy.github.io/pocket-booth/",
        imagePosition: "top",
    },
    {
        title: "From Me to You",
        description:
            "A web application for sending heartfelt digital letters to friends and loved ones.",
        tags: ["Typescript", "TailwindCSS"],
        githubURL: "https://github.com/crypticsy/from-me-to-you",
        hostedURL: "https://crypticsy.github.io/from-me-to-you/",
        imageURL:
            "https://github.com/crypticsy/from-me-to-you/blob/master/public/demo.gif?raw=true",
        imagePosition: "right",
    },
    {
        title: "Grago",
        description:
            "Grago, 'Graph on the go', is a graphical visualization tool designed for enthusiasts aiming to bolster the utilization of data analysis within the endeavors of local businesses and startups, developed as a final year project during my undergraduate study.",
        tags: ["Django", "Postgresql", "Data Science"],
        imageURL: gragoPreview,
        imagePosition: "top",
    }
];
