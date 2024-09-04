import {AppLinks} from "@/type/linkType";
export const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Linkedin",
        name: "Icons.linkedin",
        baseUrl: "https://www.linkedin.com/in/titouan-abbate-13ba10240/",
        type: "external",
        image: {
            url: "assets/svg/linkedin.svg",
            format: "svg"
        }
    },
    {
        label: "GitHub",
        name: "Icons.Github_light",
        baseUrl: "https://github.com/xXTitouanXx",
        type: "external",
        image: {
            url: "assets/svg/Github_light.svg",
            format: "svg"
        }
    },
    {
        label: "Instagram",
        name: "Instagram_light",
        baseUrl: "https://www.instagram.com/titouanabt/",
        type: "external",
        image: {
            url: "assets/svg/Instagram_light.svg",
            format: "svg"
        }
    }, {
        label: "Discord",
        name: "discord",
        baseUrl: "https://www.instagram.com/titouanabt/",
        type: "external",
        image: {
            url: "assets/svg/discord.svg",
            format: "svg"
        }
    }, {
        label: "Mail",
        name: "gmail",
        baseUrl: "17titou@gmail.com",
        type: "external",
        image: {
            url: "assets/svg/gmail.svg",
            format: "svg"
        }
    }
];
export const footerLinks = [
    {
        label: "Mes réseaux ",
        links: footerSocialNetworkLinks,
    },
];
