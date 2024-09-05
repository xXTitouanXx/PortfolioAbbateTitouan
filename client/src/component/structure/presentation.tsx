import {Typography} from "@/component/typography";
import {Container} from "@/component/container";
import Image from "next/image";

export const Presentation = () => {
    const birthDate = new Date('2002-02-17'); // Date de naissance
    const today = new Date(); // Date actuelle
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (
        <div className="">
            <Container className="flex flex-col items-center justify-center pt-16">
                <div className="w-full p-4 text-center">
                    <Typography variant="h2" theme="Mauve">Who am I ?</Typography>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                    <div className="p-4 space-y-4 flex-1">
                        <Typography variant="caption1" theme="Mauve" className="max-w-xl">
                            I'm Abbate Titouan, a dedicated {age}-year-old developer driven by a passion for technology
                            and innovation. My love for the intersection of science, math, and programming fuels my
                            desire to create impactful solutions.
                        </Typography>
                        <Typography variant="caption1" theme="Mauve" className="max-w-xl">
                            Throughout my academic journey, I've honed my technical skills at Polytech Montpellier,
                            where I deepened my understanding of mathematics, physics, chemistry, and computer science.
                            This solid foundation has enabled me to successfully tackle a wide range of projects, from
                            developing artificial intelligence to designing intricate websites and engaging games.
                        </Typography>
                        <Typography variant="caption1" theme="Mauve" className="max-w-xl">
                            My practical experience, gained through internships and personal projects, has equipped me
                            with the ability to bridge the gap between theoretical knowledge and real-world application.
                            I'm excited to continue exploring new technologies and contributing to cutting-edge
                            projects.
                        </Typography>
                    </div>
                    <div className="p-4 flex items-start justify-center flex-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                            <Image
                                src="/assets/images/avatar.jpg"
                                width={500}
                                height={500}
                                alt="Avatar"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}