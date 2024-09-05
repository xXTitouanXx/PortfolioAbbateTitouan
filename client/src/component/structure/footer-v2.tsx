import {Dock, DockIcon} from "@/lib/magicui/components/dock";
import {ActiveLink} from "@/component/active-link";
import {Icons} from "@/type/dock-icon-type";
import React from "react";
import {Container} from "@/component/container";
import {Typography} from "@/component/typography";

export const FooterV2 = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t to-purple-1500 from-purple-800 grap-4">
            <Container className="flex flex-col items-center space-y-4">
                <Dock magnification={100} distance={100}>
                    <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                        <ActiveLink href="https://www.linkedin.com/in/titouan-abbate-13ba10240/">
                            <Icons.linkedin className="size-full"/>
                        </ActiveLink>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                        <ActiveLink href="https://github.com/xXTitouanXx">
                            <Icons.github className="size-full"/>
                        </ActiveLink>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                        <ActiveLink href="https://www.instagram.com/titouanabt/">
                            <Icons.instagram className="size-full"/>
                        </ActiveLink>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                        <ActiveLink href="mailto:titouan.abbate.pro@gmail.com">
                            <Icons.gmail className="size-full"/>
                        </ActiveLink>
                    </DockIcon>
                    <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                        <ActiveLink href="https://discord.gg/uaXXvhCx">
                            <Icons.discord className="size-full"/>
                        </ActiveLink>
                    </DockIcon>
                </Dock>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800"/>
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="LavenderBlush">
                        {`Copyright © ${currentYear} | Par `}
                        <a href="https://www.linkedin.com/in/titouan-abbate-13ba10240/">Titouan Abbate</a>
                    </Typography>
                </div>
            </Container>
        </footer>
    );
}