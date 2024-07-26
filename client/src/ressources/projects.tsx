import {ProjectType} from "@/type/projectType";

export const projects: ProjectType[] = [
    {
        date: 2024,
        type: "Personal Project",
        title: "Language model",
        description:
            "This project is an autoregressive language model like ChatGPT, after training on 200GB of french text during 570 hours, it is able to answer questions, follow instructions, generate stories, and more...",
        tags: [
            {name: "Python", url: "https://www.python.org/"},
            {name: "PyTorch", url: "https://pytorch.org/"},
        ],
        links: [
            "https://github.com/angeluriot/Language_model",
            "https://github.com/angeluriot/Language_model",
            "none",
        ],
        video: "/assets/svg/discord.svg",
        image: "/assets/svg/discord.svg",
        logo: "/assets/svg/discord.svg",
        categories: ["Personal", "AI"],
        run:true,
    },
    {
        date: 2023,
        type: "Personal Project",
        title: "Generative Adversarial Network",
        description:
            "This project is a deep convolutional generative adversarial network that can create high quality images from a random seed like portraits, animals, drawings and more...",
        tags: [
            {name: "Python", url: "https://www.python.org/"},
            {name: "PyTorch", url: "https://pytorch.org/"},
        ],
        links: [
            "https://github.com/angeluriot/Generative_adversarial_network",
            "https://github.com/angeluriot/Generative_adversarial_network",
            "none",
        ],
        video: "/assets/svg/discord.svg",
        image: "/assets/svg/discord.svg",
        logo: "/assets/svg/discord.svg",
        categories: ["Personal", "AI"],
        run:false,
    },

]