import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(() => ({
        background: {
            color: {
                value: "#06000D",
            },
        },
        fpsLimit: 120,
        fullScreen: {
            enable: true,
            zIndex: 0,
        },
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#f3e8ff",
            },
            links: {
                color: "#9333ea",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                speed: 1.5,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 40,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 0.3, max: 1},
            },
        },
        detectRetina: true,
    }), []);

    if (!init) return null;

    return (
        <div>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    );
};