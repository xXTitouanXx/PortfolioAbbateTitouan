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
            <Seo title="Home" description="Home page" />
            <ParticlesBackground />
            <Header />
            <div id="short-presentation">
                <ShortPresentation />
            </div>
            <div className="relative z-10 pt-20">
                <div id="presentation">
                    <Presentation />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="experience">
                    <Experience />
                </div>
                <FooterV2 />
            </div>
        </div>
    );
}
