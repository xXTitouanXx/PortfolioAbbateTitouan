import clsx from "clsx";

interface TypographyProps {
    variant?: "display"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "lead"
        | "body-lg"
        | "body-base"
        | "body-sm"
        | "caption1"
        | "caption2"
        | "caption3"
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "div" | "p" | "span";
    theme?: "LavenderBlush" | "LavenderMist" | "Mauve" | "LightOrchid" | "Orchid" | "MediumPurple" | "PurpleHeart" | "DarkPurple"| "Amethyst"| "DeepPurple"| "MidnightPurple";
    weight?: "regular" | "medium" | "semibold";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
                               variant = "h3",
                               component: Component = "div",
                               theme = "PurpleHeart",
                               weight = "regular",
                               className,
                               children
                           }: TypographyProps) => {
    let variantStyles: string = "", colorStyles: string = "";
    switch (variant) {
        case "display":
            variantStyles = "text-8xl"
            break;
        case "h1":
            variantStyles = "text-7xl"
            break;
        case "h2":
            variantStyles = "text-6xl"
            break;
        case "h3":
            variantStyles = "text-5xl"
            break;
        case "h4":
            variantStyles = "text-4xl"
            break;
        case "h5":
            variantStyles = "text-3xl"
            break;
        case "lead":
            variantStyles = "text-2xl"
            break;
        case "body-lg":
            variantStyles = "text-lg"
            break;
        case "body-base":
            variantStyles = "text-base"
            break;
        case "body-sm":
            variantStyles = "text-sm"
            break;
        case "caption1":
            variantStyles = "text-caption1"
            break;
        case "caption2":
            variantStyles = "text-caption2"
            break;
        case "caption3":
            variantStyles = "text-caption3"
            break;
        case "caption4":
            variantStyles = "text-caption4"
            break;
    }
    switch (theme) {
        case "LavenderBlush":
            colorStyles = "text-purple-50";
            break;
        case "LavenderMist":
            colorStyles = "text-purple-100";
            break;
        case "Mauve":
            colorStyles = "text-purple-200";
            break;
        case "LightOrchid":
            colorStyles = "text-purple-300";
            break;
        case "Orchid":
            colorStyles = "text-purple-400";
            break;
        case "MediumPurple":
            colorStyles = "text-purple-500";
            break;
        case "PurpleHeart":
            colorStyles = "text-purple-600";
            break;
        case "DarkPurple":
            colorStyles = "text-purple-700";
            break;
        case "Amethyst":
            colorStyles = "text-purple-800";
            break;
        case "DeepPurple":
            colorStyles = "text-purple-900";
            break;
        case "MidnightPurple":
            colorStyles = "text-purple-950";
            break;
    }
    return <Component
        className={clsx(variantStyles, colorStyles, weight === "medium" && "font-medium", className)}>{children}</Component>;
}