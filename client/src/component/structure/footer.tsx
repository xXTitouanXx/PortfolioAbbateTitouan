import {Container} from "@/component/container";
import {Typography} from "@/component/typography";
import {footerLinks} from "@/component/footer-links";
import {ActiveLink} from "@/component/active-link";
import {Footerlinks} from "@/type/linkType";
import {LinkRepository} from "@/repository/linkRepository";
import {v4 as uuidv4} from "uuid";
import {Button} from "@/component/button";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerNavigationList = footerLinks.map((columnLinks) => (
        <FooterLink key={uuidv4()} data={columnLinks}/>
    ));
    return (
        <div className="py-40 bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex gap-7">{footerNavigationList}</div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800"/>
                <div className="flex items-center justify-between">
                    {/*<Typography variant="caption4" theme="gray">*/}
                    {/*    {`Copyright © ${currentYear} | Par `}*/}
                    {/*    <a href="https://www.linkedin.com/in/titouan-abbate-13ba10240/">Titouan Abbate</a>*/}
                    {/*</Typography>*/}
                </div>
            </Container>
        </div>
    );
};

interface FooterLinkProps {
    data: Footerlinks;
}

const FooterLink = ({data}: FooterLinkProps) => {
    const linksList = data.links.map((link) => (
        <div key={uuidv4()} className="flex items-center justify-center">
            {link.type === LinkRepository.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkRepository.EXTERNAL && (
                <Button
                    size="large"
                    variant="accent"
                    baseUrl={link.baseUrl}
                    image={link.image?.url}
                />
            )}
        </div>
    ));
    return (
        <div className="min-w-[190px]">
            {/*<Typography theme="white" variant="caption2" weight="medium" className="pb-5">*/}
            {/*    {data.label}*/}
            {/*</Typography>*/}
            <div className="flex gap-4">{linksList}</div>
        </div>
    );
};
