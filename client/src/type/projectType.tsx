export interface ProjectType {
    date: number;
    type: string;
    title: string;
    description: string;
    tags: { name: string; url: string }[];
    links: string[];
    video: string;
    image: string;
    logo: string;
    categories: string[];
    run:boolean
}