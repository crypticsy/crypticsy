import himalayanJavaCaseStudyImage from "../assets/publication/himalayanJavaCaseStudy.png";
import digital_threats from "../assets/publication/digital_threats.jpg";
import digital_second_opinion from "../assets/publication/digital_second_opinion.png";

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
        title:"Digital Second Opinion for Assessment of the Clinical Risks",
        subtitle:"This article presents a software that can be used as a digital second opinion assistant for optimization of the clinical pathways using only data from the patient's medical history and basic statistics.",
        type:"Conference Paper",
        publishedDate:new Date(2025, 10, 1),
        publicationURL:"https://www.researchgate.net/publication/398610142_Digital_Second_Opinion_for_Assessment_of_the_Clinical_Risks",
        publicationImage:digital_second_opinion,
    },
    {
        title: "APT Attribution Using Deep Reinforcement Learning",
        subtitle:
            "This paper investigates the application of DRL for attributing APT groups through detailed behavioural analysis.",
        type: "Research Paper",
        publishedDate: new Date(2025, 8, 29),
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
    }
];
