import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";

const ParticleAnimation = () => {
  const options = useMemo(() => {
    return {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#40a4c8",
          distance: 150,
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
          random: false,
          speed: { min: 1, max: 5 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    loadSlim(engine);
    // await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleAnimation;
