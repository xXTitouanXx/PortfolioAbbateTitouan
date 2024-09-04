import clsx from "clsx";
import React from "react";
import {IconProps} from "@/type/iconType";
import {Spinner} from "@/component/spinner";
import {LinkType, LinkRepository} from "@/repository/linkRepository";
import Link from "next/link";

type ImageFormat = 'svg' | 'png' | 'jpg' | 'jpeg' | 'gif';

interface ButtonProps {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "ico" | "success" | "danger" | "black";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType;
    action?: () => void;
    type?: "button" | "submit";
    fullWith?: boolean;
    image?: string; // Propriété image toujours une chaîne
    imagePosition?: "left" | "center" | "right"; // Nouvelle propriété pour la position de l'image
}

const isValidImage = (url: string): boolean => {
    const allowedExtensions: ImageFormat[] = ['svg', 'png', 'jpg', 'jpeg', 'gif'];
    const extension = url.split('.').pop()?.toLowerCase();
    return extension ? allowedExtensions.includes(extension as ImageFormat) : false;
};

export const Button = ({
                           size = "medium",
                           variant = "accent",
                           icon,
                           iconTheme = "accent",
                           iconPosition = "right",
                           disabled,
                           isLoading,
                           children,
                           baseUrl,
                           linkType = "internal",
                           type = "button",
                           fullWith,
                           action,
                           image,
                           imagePosition = "center"
                       }: ButtonProps) => {
    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;
    switch (variant) {
        case "accent":
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "success":
            variantStyles = "bg-secondary hover:bg-secondary-400 text-white rounded";
            break;
        case "danger":
            variantStyles = "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
            break;
        case "black":
            variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded";
            break;
        case "ico":
            if (iconTheme === "accent") {
                variantStyles = "bg-transparent border-2 border-purple-600 hover:text-green hover:border-green text-purple-200 rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 text-purple-200 rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
            }
            break;
    }
    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${variant === "ico" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"} `;
            icoSize = 18;
            break;
        case "medium":
            sizeStyles = `text-caption2 font-medium ${variant === "ico" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"} `;
            icoSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${variant === "ico" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"} `;
            icoSize = 24;
            break;
    }

    const handleClick = () => {
        if (action) {
            action();
        }
    }

    const buttonContent = (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === "ico"
                        ? (<Spinner size="small" variant="white"/>)
                        : (<Spinner size="small"/>)}
                </div>
            )}
            <div
                className={clsx(isLoading && "invisible", "flex", imagePosition === "center" ? "justify-center" : imagePosition === "right" ? "justify-end" : "justify-start")}>
                {image && isValidImage(image) ? (
                    <img src={image} alt="button image"
                         className={`w-6 h-6 ${imagePosition === "center" ? "mx-auto" : ""}`}/>
                ) : (
                    <>
                        {icon && variant === "ico" && !image
                            ? (<icon.icon size={icoSize}/>)
                            : (
                                <div className={clsx(icon && "flex items-center gap-1")}>
                                    {icon && iconPosition === "left" && (
                                        <icon.icon size={icoSize}/>
                                    )}
                                    {children}
                                    {icon && iconPosition === "right" && (
                                        <icon.icon size={icoSize}/>
                                    )}
                                </div>
                            )}
                    </>
                )}
            </div>
        </>
    )

    const buttonElement = (
        <button
            type={type}
            className={clsx(
                variantStyles,
                sizeStyles,
                icoSize,
                isLoading && "cursor-wait",
                fullWith && "w-full",
                "relative animate"
            )}
            onClick={handleClick}
            disabled={disabled || isLoading ? true : false}
        >
            {buttonContent}
        </button>
    )

    if (baseUrl) {
        if (linkType === LinkRepository.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            )
        } else {
            return (
                <Link href={baseUrl}>{buttonElement}</Link>
            )
        }
    }
    return buttonElement
};
