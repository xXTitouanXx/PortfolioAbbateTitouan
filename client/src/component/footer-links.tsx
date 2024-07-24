import {AppLinks} from "@/type/linkType";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Projects",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Website",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Formations",
        baseUrl: "/#",
        type: "external",
    },
];
const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
];
const footerInformationsLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    },
];
export const footerSocialNetworkLinks: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/titouan-abbate-13ba10240/",
        type: "external",
        image: {
            url: "assets/svg/linkedin.svg",
            format: "svg"
        }
    },
    {
        label: "GitHub",
        baseUrl: "https://github.com/xXTitouanXx",
        type: "external",
        image: {
            url: "assets/svg/Github_light.svg",
            format: "svg"
        }
    },
    {
        label: "Instagram",
        baseUrl: "https://www.instagram.com/titouanabt/",
        type: "external",
        image: {
            url: "assets/svg/Instagram_light.svg",
            format: "svg"
        }
    }, {
        label: "Discord",
        baseUrl: "https://www.instagram.com/titouanabt/",
        type: "external",
        image: {
            url: "assets/svg/discord.svg",
            format: "svg"
        }
    }, {
        label: "Mail",
        baseUrl: "17titou@gmail.com",
        type: "external",
        image: {
            url: "assets/svg/gmail.svg",
            format: "svg"
        }
    }
];
export const footerLinks = [
    // {
    //     label: "App",
    //     links: footerApplicationLinks,
    // },
    // {
    //     label: "Utilisateurs",
    //     links: footerUsersLinks,
    // },
    // {
    //     label: "Informations",
    //     links: footerInformationsLinks,
    // },
    {
        label: "Mes réseaux ",
        links: footerSocialNetworkLinks,
    },
];
