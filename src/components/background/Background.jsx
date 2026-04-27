import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const Background = () => {
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(REDUCE_MOTION_QUERY).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(REDUCE_MOTION_QUERY);
    const handler = () => setReduceMotion(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(() => {
    const particleCount = reduceMotion ? 40 : 72;
    const linkDistance = reduceMotion ? 95 : 108;

    return {
      autoPlay: true,
      background: {
        color: { value: "transparent" },
        image:
          "linear-gradient(105deg, #070f1c 0%, #0a1628 28%, #082a32 62%, #063240 100%)",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: false,
      fpsLimit: reduceMotion ? 30 : 60,
      motion: {
        disable: reduceMotion,
        reduce: { factor: 1, value: true },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: { enable: !reduceMotion, mode: "push" },
          onHover: {
            enable: !reduceMotion,
            mode: "grab",
            parallax: { enable: false, force: 10, smooth: 5 },
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              blink: false,
              consent: false,
              opacity: 0.75,
              color: { value: "#5eead4" },
            },
          },
          push: { quantity: 2 },
          repulse: { distance: 120, duration: 0.35, speed: 0.8 },
        },
      },
      particles: {
        color: {
          value: ["#22d3ee", "#06b6d4", "#38bdf8", "#67e8f9", "#2dd4bf"],
        },
        links: {
          blink: false,
          color: { value: "#5eead4" },
          consent: false,
          distance: linkDistance,
          enable: true,
          frequency: 1,
          opacity: 0.42,
          shadow: {
            blur: 0,
            color: { value: "#000000" },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
            opacity: 0.06,
            color: { value: "#06b6d4" },
          },
          width: 1,
          warp: false,
        },
        move: {
          angle: { offset: 0, value: 360 },
          attract: { enable: false, rotate: { x: 600, y: 1200 } },
          direction: "none",
          enable: !reduceMotion,
          outModes: { default: "bounce" },
          random: true,
          speed: { min: 0.12, max: 0.45 },
          straight: false,
          drift: 0,
          decay: 0,
          gravity: { enable: false },
          path: { enable: false },
          trail: { enable: false },
          vibrate: false,
          warp: false,
        },
        number: {
          density: { enable: true, area: 1100, factor: 1000 },
          value: particleCount,
        },
        opacity: {
          random: { enable: true, minimumValue: 0.25 },
          value: { min: 0.35, max: 0.88 },
          animation: {
            enable: false,
            speed: 0,
            sync: false,
            destroy: "none",
            minimumValue: 0.2,
            startValue: "random",
          },
        },
        reduceDuplicates: true,
        shape: { type: "circle" },
        size: {
          random: { enable: true, minimumValue: 0.8 },
          value: { min: 1.1, max: 2.8 },
          animation: {
            enable: false,
            speed: 0,
            sync: false,
            destroy: "none",
            minimumValue: 0.8,
            startValue: "random",
          },
        },
        shadow: {
          blur: 0,
          color: { value: "#000000" },
          enable: false,
          offset: { x: 0, y: 0 },
        },
        collisions: { enable: false },
        rotate: { value: 0, animation: { enable: false } },
        stroke: { width: 0 },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    };
  }, [reduceMotion]);

  return (
    <div>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default Background;
