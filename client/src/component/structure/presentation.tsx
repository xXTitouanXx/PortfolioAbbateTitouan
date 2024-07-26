import {Typography} from "@/component/typography";
import {Container} from "@/component/container";
import Image from "next/image";

export const Presentation = () => {
    return (
        <div className="bg-purple-50">
            <Container className="flex flex-col items-center justify-center pb-16 pt-16">
                {/* Div central en haut du conteneur */}
                <div className="w-full p-4 bg-blue-500 text-white text-center">
                    <Typography variant="h3">Who am I ?</Typography>
                </div>
                {/* Conteneur pour les deux divs */}
                <div className="flex flex-col md:flex-row w-full justify-center items-center">
                    {/* Premier div */}
                    <div className="p-4 bg-green-500 text-white space-y-4 flex-1">
                        <Typography variant="caption1" className="max-w-xl">
                            Hi! My name is Angel Uriot, I’m 23 and I develop things on my free time. I like mixing
                            science and math with programming and I’m always looking for new challenges. I made
                            simulations, artificial intelligence, websites, games and more... (see the project part of
                            the site).
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            In 2018, I entered in the Polytech Paris-Saclay French engineering school in IT major to
                            learn more about math, science and software development. I discovered a lot of technologies
                            and theoretical concepts, but I also put my knowledge into practice in various projects and
                            internships, one of which took place in Singapore and greatly expanded my cultural and
                            technical horizons.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            I’m now a software engineer at BlaBlaCar, the most widely used car-sharing application in
                            the world. I work on the backend of BlaBlaCar Daily, a secondary application targeting
                            short-distance carpooling.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            Besides all this, I'm a content creator on the Internet where I simplify scientific and
                            computer science concepts across various social media platforms like YouTube under the
                            pseudonym Dimension.
                        </Typography><Typography variant="caption1" className="max-w-xl">
                            Hi! My name is Angel Uriot, I’m 23 and I develop things on my free time. I like mixing
                            science and math with programming and I’m always looking for new challenges. I made
                            simulations, artificial intelligence, websites, games and more... (see the project part of
                            the site).
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            In 2018, I entered in the Polytech Paris-Saclay French engineering school in IT major to
                            learn more about math, science and software development. I discovered a lot of technologies
                            and theoretical concepts, but I also put my knowledge into practice in various projects and
                            internships, one of which took place in Singapore and greatly expanded my cultural and
                            technical horizons.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            I’m now a software engineer at BlaBlaCar, the most widely used car-sharing application in
                            the world. I work on the backend of BlaBlaCar Daily, a secondary application targeting
                            short-distance carpooling.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            Besides all this, I'm a content creator on the Internet where I simplify scientific and
                            computer science concepts across various social media platforms like YouTube under the
                            pseudonym Dimension.
                        </Typography><Typography variant="caption1" className="max-w-xl">
                            Hi! My name is Angel Uriot, I’m 23 and I develop things on my free time. I like mixing
                            science and math with programming and I’m always looking for new challenges. I made
                            simulations, artificial intelligence, websites, games and more... (see the project part of
                            the site).
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            In 2018, I entered in the Polytech Paris-Saclay French engineering school in IT major to
                            learn more about math, science and software development. I discovered a lot of technologies
                            and theoretical concepts, but I also put my knowledge into practice in various projects and
                            internships, one of which took place in Singapore and greatly expanded my cultural and
                            technical horizons.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            I’m now a software engineer at BlaBlaCar, the most widely used car-sharing application in
                            the world. I work on the backend of BlaBlaCar Daily, a secondary application targeting
                            short-distance carpooling.
                        </Typography>
                        <Typography variant="caption1" className="max-w-xl">
                            Besides all this, I'm a content creator on the Internet where I simplify scientific and
                            computer science concepts across various social media platforms like YouTube under the
                            pseudonym Dimension.
                        </Typography>
                    </div>
                    {/* Deuxième div */}
                    <div className="p-4 bg-red-500 text-white flex items-start justify-center flex-1">
                        <Image src="/assets/images/avatar.jpg" width={500} height={500} alt="Avatar"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
