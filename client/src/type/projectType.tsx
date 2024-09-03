export interface ProjectType {
    date: number;
    type: string;
    title: string;
    description: string;
    tags: { name: string; url: string }[];
    links: string[];
    image?: string;
    categories: string[];
    run: boolean
    experience: boolean
}