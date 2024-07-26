import {Seo} from "@/component/seo";
import {Header} from "@/component/structure/header";
import {FooterV2} from "@/component/structure/footer-v2";
import {ShortPresentation} from "@/component/structure/short-presentation";
import {Presentation} from "@/component/structure/presentation";
import {Projects} from "@/component/structure/projects";
import {Skills} from "@/component/structure/skills";
import {Experience} from "@/component/structure/experiences";
import {ParticlesBackground} from "@/component/particles-background";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <Seo title="Home" description="Home page"/>
            <ParticlesBackground/>
                <Header/>
                <ShortPresentation/>
            <div className="relative z-10 pt-20">
                <Presentation/>
                <Projects/>
                <Skills/>
                <Experience/>
                <FooterV2/>
            </div>
        </div>
    );
}
