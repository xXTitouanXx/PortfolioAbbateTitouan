import BlurFade from "@/lib/magicui/components/blur-fade"
import {Typography} from "@/component/typography";
import PulsatingButton from "@/lib/magicui/components/ui/pulsating-button";
import {Container} from "@/component/container";

export const ShortPresentation = () => {
    const birthDate = new Date('2002-02-17'); // Date de naissance
    const today = new Date(); // Date actuelle
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    const handleClick = () => {
        window.location.href = "#presentation";
    };
    return (
        <section id="header" className="z-0">
            <Container className="relative pt-40 pb-52 overflow-hidden">
                <div className="w-full max-w-2xl space-y-5">
                    <BlurFade delay={0.25} inView>
                        <Typography variant="caption3" theme="Amethyst" component="span">
                            Hi, my name is
                        </Typography>

                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                        <Typography variant="h1" theme="LavenderBlush" component="span" className="max-w-xl">
                            Titouan Abbate
                        </Typography>
                    </BlurFade>
                    <BlurFade delay={0.25 * 4} inView>
                        <Typography variant="h1" theme="Amethyst" component="span" className="max-w-xl">
                            5th year of computer engineering.
                        </Typography>
                    </BlurFade>
                    <BlurFade delay={0.25 * 6} inView>
                        <Typography variant="caption1" theme="Amethyst" component="span" className="max-w-xl">
                            I’m a {age} year old french student engineer at Polytech Lyon and I also develop things on
                            my free time. l’m open to any opportunity.
                        </Typography>
                    </BlurFade>
                    <div className="pt-3">
                        <BlurFade delay={0.25 * 6} inView>
                            <PulsatingButton onClick={handleClick}>
                                Get Started
                            </PulsatingButton>
                        </BlurFade>
                    </div>
                </div>
            </Container>
        </section>
    );
}