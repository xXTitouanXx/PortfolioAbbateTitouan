import Link from "next/link";
import clsx from "clsx";
import {useRouter} from "next/router";
import {useMemo} from "react";

interface Props {
    href: string;
    children?: React.ReactNode;
}

export const ActiveLink = ({href, children}: Props) => {
    const router = useRouter();
    const isActive = useMemo(() => {
        return router.pathname === href;
    }, [router.pathname, href]);

    return (
        <Link href={href} target={"_blank"} className={clsx(isActive && "text-primary font-medium")}>
            {children}
        </Link>
    )
}