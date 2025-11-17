import himalayanJavaCaseStudyImage from "../assets/publication/himalayanJavaCaseStudy.png";
import digital_threats from "../assets/publication/digital_threats.jpg";

export type Publication = {
    title: string;
    subtitle?: string;
    type: string;
    publishedDate: Date;
    publicationURL: string;
    publicationImage: string;
};

export const publications: Publication[] = [
    {
        title: "APT Attribution Using Deep Reinforcement Learning",
        subtitle:
            "This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.",
        type: "Research Paper",
        publishedDate: new Date(2025, 9, 29),
        publicationURL: "https://dl.acm.org/doi/10.1145/3736654",
        publicationImage: digital_threats,
    },
    {
        title: "Himalayan Java",
        subtitle:
            "Navigating Challenges and Pioneering Sustainability in Nepali Coffee Industry",
        type: "A Case Study",
        publishedDate: new Date(2023, 7, 1),
        publicationURL: "https://parthstudent.vc/case-study/",
        publicationImage: himalayanJavaCaseStudyImage,
    },
];
