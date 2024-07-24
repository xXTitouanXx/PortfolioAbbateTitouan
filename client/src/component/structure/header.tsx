import { Button } from "@/component/button";
import { Typography } from "@/component/typography";
import { ActiveLink } from "@/component/active-link";
import { Container } from "@/component/container";
import { RiArrowRightLine } from "react-icons/ri";
import { Logo } from "@/component/logo";

export const Header = () => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex flex-col md:flex-row items-center justify-between py-1.5 gap-7">
                <div className="flex items-center gap-2.5">
                    <Logo size="small" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-7 w-full md:w-auto">
                    <Typography variant="caption3" component="div" className="flex flex-col md:flex-row items-center gap-4 md:gap-7 w-full md:w-auto">
                        <ActiveLink href="/home">Home</ActiveLink>
                        <ActiveLink href="/about">About</ActiveLink>
                        <ActiveLink href="/projects">Projects</ActiveLink>
                        <ActiveLink href="/skills">Skills</ActiveLink>
                        <ActiveLink href="/works">Experience</ActiveLink>
                    </Typography>
                    <Button baseUrl="/contact" size="small" icon={{ icon: RiArrowRightLine }} iconPosition="right">
                        Contact
                    </Button>
                </div>
            </Container>
        </div>
    );
};
