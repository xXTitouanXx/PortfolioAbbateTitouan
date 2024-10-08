import {ProjectType} from "@/type/projectType";

export const projects: ProjectType[] = [
    {
        date: 2024,
        type: "School Project",
        title: "Android App",
        description:
            "I am currently developing my first Android application",
        tags: [
            {name: "Kotlin", url: "https://kotlinlang.org/"},
        ],
        links: [
            "https://github.com/xXTitouanXx/AppInfoMobile",
            "none",
            "none",
        ],
        image: "images/no-image.jpg",
        categories: ["Personal", "Web"],
        run: false,
        experience:false,
    },{
        date: 2024,
        type: "Personal Project",
        title: "Website",
        description:
            "A first-time web development experience with Next.js and React, simulating an online business or service-based website.",
        tags: [
            {name: "Javascript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript"},
            {name: "Typescript", url: "https://www.typescriptlang.org/"},
            {name: "React", url: "https://fr.react.dev/"},
            {name: "Next.js", url: "https://nextjs.org/"},
            {name: "Tailwind", url: "https://tailwindcss.com/"},
        ],
        links: [
            "https://github.com/xXTitouanXx/website",
            "none",
            "https://webstite-7c584.web.app/",
        ],
        image: "gifs/website.gif",
        categories: ["Personal", "Web"],
        run: true,
        experience:false,
    },
    {
        date: 2024,
        type: "School Project",
        title: "Chess AI",
        description:
            "This pair project, implemented in a Jupyter Notebook, consists of several AI chess-playing agents. These agents employ diverse search techniques (Alpha-Beta pruning, Minimax, Monte Carlo Tree Search) and diverse evaluation techniques (e.g. PeSTO) to engage in both player-versus-player and player-versus-AI matches.",
        tags: [
            {name: "Python", url: "https://www.python.org/"},
            {name: "Jupyter", url: "https://jupyter.org/"},
        ],
        links: [
            "https://github.com/GaufredeDouglas/Chess_AI",
            "none",
            "none",
        ],
        image: "gifs/chess.gif",
        categories: ["School", "IA"],
        run: false,
        experience:false,
    },
    {
        date: 2024,
        type: "School Project",
        title: "Bin Packing 2D",
        description:
            "A 2D bin packing algorithm, utilizing heuristics and metaheuristics to optimize the arrangement of items in fixed-size containers.",
        tags: [
            {name: "Java", url: "https://www.java.com/fr/"},
        ],
        links: [
            "https://github.com/xXTitouanXx/Bin-Packing-2D",
            "none",
            "none",
        ],
        image: "gifs/bin-packing-2D.gif",
        categories: ["School"],
        run: false,
        experience:false,
    },
    {
        date: 2024,
        type: "School Project",
        title: "Web API",
        description:
            "Movie database management web application based on a client-server architecture with an API. This approach promotes modularity, scalability, maintainability, and security of the application, while improving the user experience.",
        tags: [
            {name: "Java", url: "https://www.java.com/fr/"},
            {name: "Spring Boot", url: "https://spring.io/projects/spring-boot"},
        ],
        links: [
            "https://github.com/xXTitouanXx/API_Cinema_Dautrait_Petel_Abbate",
            "none",
            "none",
        ],
        image: "gifs/client-serveur-sb.gif",
        categories: ["School", "Web"],
        run: false,
        experience:false,
    },
    {
        date: 2024,
        type: "School Project",
        title: "Web Client",
        description:
            "Web client for the movie database project",
        tags: [
            {name: "Typescript", url: "https://www.typescriptlang.org/"},
            {name: "Angular", url: "https://angular.dev/"},
            {name: "Tailwind", url: "https://tailwindcss.com/"},
        ],
        links: [
            "https://github.com/xXTitouanXx/Client_Cinema_Dautrait_Petel_Abbate",
            "none",
            "none",
        ],
        image: "gifs/client-serveur-sb.gif",
        categories: ["School", "Web"],
        run: false,
        experience:false,
    },
    {
        date: 2023,
        type: "School Project",
        title: "TicTacToe3D",
        description:
            "This collaborative project aims to create a three-dimensional or two-dimensional tic-tac-toe game featuring an intuitive user interface.",
        tags: [
            {name: "Java", url: "https://www.java.com/fr/"},
        ],
        links: [
            "https://github.com/Mxtsxw/TicTacToe3D",
            "none",
            "none",
        ],
        image: "gifs/tictactoe.gif",
        categories: ["School", "Game"],
        run: false,
        experience:false,
    },
    {
        date: 2022,
        type: "Scool Project",
        title: "Online business website",
        description:
            "First service-based simulation website using MVC architecture to deliver a seamless and efficient user experience for our customers.",
        tags: [
            {name: "PHP", url: "https://www.php.net/manual/fr/intro-whatis.php"},
            {name: "CSS", url: "https://developer.mozilla.org/fr/docs/Web/CSS"},
            {name: "MySQL", url: "https://www.mysql.com/fr/"},
        ],
        links: [
            "https://github.com/Axellrn13/projetshop",
            "none",
            "none",
        ],
        image: "gifs/projetshop.gif",
        categories: ["School", "Web"],
        run: false,
        experience:false,
    },
    {
        date: 2022,
        type: "Scool Project",
        title: "BrickBreaker",
        description:
            "A miniature brick breaker game.",
        tags: [
            {name: "C#", url: "https://dotnet.microsoft.com/fr-fr/languages/csharp#:~:text=C%23%20est%20un%20langage%20de,langages%20de%20programmation%20sur%20GitHub."},
            {name: "Unity", url: "https://unity.com/fr"},
        ],
        links: [
            "https://github.com/xXTitouanXx/BrickBreaker",
            "none",
            "none",
        ],
        image: "gifs/brick-breaker.gif",
        categories: ["School", "Game"],
        run: false,
        experience:false,
    },
]