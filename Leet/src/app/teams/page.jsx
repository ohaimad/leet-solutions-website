"use client";
// import "./spaces.css";
// import { spacesData } from "./spaces.js";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";
import Spotlight from "@/components/Spotlight/Spotlight";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const spacesRef = useRef(null);
  const scrollTriggerInstances = useRef([]);
  const { navigateWithTransition } = useViewTransition();

  const cleanupScrollTriggers = () => {
    scrollTriggerInstances.current.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances.current = [];
  };

  const setupAnimations = () => {
    cleanupScrollTriggers();

    if (!spacesRef.current) return;

    const spaces = spacesRef.current.querySelectorAll(".space");
    if (spaces.length === 0) return;

    spaces.forEach((space, index) => {
      gsap.set(space, {
        opacity: 0,
        scale: 0.75,
        y: 150,
      });

      if (index === 0) {
        gsap.to(space, {
          duration: 0.75,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 1.4,
        });
      } else {
        const trigger = ScrollTrigger.create({
          trigger: space,
          start: "top 100%",
          onEnter: () => {
            gsap.to(space, {
              duration: 0.75,
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "power3.out",
            });
          },
        });

        scrollTriggerInstances.current.push(trigger);
      }
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setupAnimations();

    const handleResize = () => {
      setupAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="page spaces">
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
