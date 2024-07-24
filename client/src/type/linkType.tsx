import {IconType} from "react-icons";
import {LinkType} from "@/repository/linkRepository";

export type ImageFormat = 'svg' | 'png' | 'jpg' | 'jpeg' | 'gif';

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType;
    image?: {
        url: string;
        format: ImageFormat;
    }
}

export interface Footerlinks {
    label: string;
    links: AppLinks[];
}