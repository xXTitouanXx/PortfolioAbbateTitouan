import BlurFade from "@/lib/magicui/components/blur-fade"
import {Typography} from "@/component/typography";
import PulsatingButton from "@/lib/magicui/components/ui/pulsating-button";

export const ShortPresentation = () => {
    const birthDate = new Date('2002-02-17'); // Date de naissance
    const today = new Date(); // Date actuelle
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (
        <section id="header">
            <BlurFade delay={0.25} inView>
                <Typography>
                    Hi, my name is
                </Typography>

            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
                <Typography>
                    Titouan Abbate
                </Typography>
            </BlurFade>
            <BlurFade delay={0.25 * 4} inView>
                <Typography>
                    I'm in my 5th year of computer engineering.
                </Typography>
            </BlurFade>
            <BlurFade delay={0.25 * 6} inView>
                <Typography>
                    I’m a {age} years old french student engineer at Polytech Lyon and I also develop things on my free time. l’m open to any opportunity.
                </Typography>
            </BlurFade>
            <BlurFade delay={0.25 * 6} inView>
                <PulsatingButton>
                    Get Started
                </PulsatingButton>
            </BlurFade>
        </section>
    );
}
