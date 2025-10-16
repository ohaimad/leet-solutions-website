"use client";
import "./HowWeWork.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Copy from "../Copy/Copy";
import { getAllProjectsArray } from "@/app/projects/[slug]/project-data";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const { navigateWithTransition } = useViewTransition();
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

  // Get projects data
  const projectsData = getAllProjectsArray();

  const handleProjectClick = (slug) => {
    if (slug) {
      navigateWithTransition(`/projects/${slug}`);
    }
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useGSAP(
    () => {
      if (!stepsRef.current) return;

      const steps = stepsRef.current.querySelectorAll(".how-we-work-step");
      gsap.set(steps, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: stepsRef.current,
        start: "top 75%",
        once: true,
        animation: gsap.to(steps, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: -0.1,
          ease: "none",
        }),
      });
    },
    { scope: stepsRef }
  );

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!container || !header || !cards) return;

    if (!isMobile) {
      const mainTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        endTrigger: cards,
        end: "bottom bottom",
        pin: header,
        pinSpacing: false,
      });
      scrollTriggersRef.current.push(mainTrigger);

      const cardElements = cards.querySelectorAll(".how-we-work-card");

      cardElements.forEach((card, index) => {
        const cardTrigger = ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
          onLeave: () => {
            if (index < cardElements.length - 1) {
              setActiveStep(index + 1);
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              setActiveStep(index - 1);
            }
          },
        });
        scrollTriggersRef.current.push(cardTrigger);
      });
    }

    return () => {
      scrollTriggersRef.current.forEach((trigger) => trigger.kill());
      scrollTriggersRef.current = [];
    };
  }, [isMobile]);

  return (
    <div className="how-we-work" ref={containerRef}>
      <div className="how-we-work-col how-we-work-header" ref={headerRef}>
        <div className="container">
          <div className="how-we-work-header-content">
            <div className="how-we-work-header-callout">
              <Copy delay={0.1}>
                <p>Projects Overview</p>
              </Copy>
            </div>
            <Copy delay={0.15}>
              <h3>
                A showcase of our projects developed for OCP and TANGER-MED,
                reflecting our commitment to reliability, and excellence.
              </h3>
            </Copy>
            <div className="how-we-work-steps" ref={stepsRef}>
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className={`how-we-work-step ${activeStep === index ? "active" : ""}`}
                >
                  {/* <p className="how-we-work-step-label">Project</p> */}
                  <p className="how-we-work-step-index">{index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="how-we-work-col how-we-work-cards" ref={cardsRef}>
        {projectsData.map((project) => (
          <div key={project.id} className="how-we-work-card">
            <div className="how-we-work-card-img">
              <img src={project.image[0]} alt={project.title} />
            </div>
            <div className="how-we-work-card-copy">
              <div
                className="how-we-work-card-index-label hoverable-project"
                onClick={() => handleProjectClick(project.slug)}
              >
                <h3>{project.title}</h3>
              </div>
              <p className="md">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
