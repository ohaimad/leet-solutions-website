"use client";
import "./HowWeWork.css";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const stepsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

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
              <div
                className={`how-we-work-step ${activeStep === 0 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Project</p>
                <p className="how-we-work-step-index">1</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 1 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Project</p>
                <p className="how-we-work-step-index">2</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 2 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Project</p>
                <p className="how-we-work-step-index">3</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 3 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Project</p>
                <p className="how-we-work-step-index">4</p>
              </div>
              <div
                className={`how-we-work-step ${activeStep === 4 ? "active" : ""
                  }`}
              >
                <p className="how-we-work-step-label">Project</p>
                <p className="how-we-work-step-index">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-we-work-col how-we-work-cards" ref={cardsRef}>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-1.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>OCP-MineTalents</h3>
            </div>
            <p className="md">
              TalentAI: A platform that helps organizations and HR quickly
              find and manage the expertise they need just with one message
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-2.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>AMFD-Dashboard</h3>
            </div>
            <p className="md">
              AMFD oversees several educational and operational entities with varying
              budget structures. This system replaces
              spreadsheets with a structured, version-controlled budget register.
            </p>
          </div>
        </div>
        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-3.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>Granulens</h3>
            </div>
            <p className="md">
              This projects acts as a granulometry and coloration analyzer, where a sample of the
              fertilizers will go thru a hardware device, so that images of
              grains can be captured in a (calibrated) lighting controlled environment.
            </p>
          </div>
        </div>

        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-4.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>TMSA-Marhaba-2077</h3>
            </div>
            <p className="md">
              Marhaba is a full-stack web application that helps harbour/port operators to:
              ingest, clean and analyse passenger traffic data (IN / OUT)
              manage ferry ticket prices & historical evolution
              schedule events & holidays that impact traffic forecasts
              visualise forecasts v.s. real figures through interactive dashboards
            </p>
          </div>
        </div>

        <div className="how-we-work-card">
          <div className="how-we-work-card-img">
            <img src="/how-we-work/process-4.jpg" alt="" />
          </div>
          <div className="how-we-work-card-copy">
            <div className="how-we-work-card-index-label">
              <h3>LS-DeepVisionStream</h3>
            </div>
            <p className="md">
              DeepVisionStream is a modular DeepStream-based platform for real-time video analytics
              using custom models like YOLO, SAM, and D-Fine. It includes C++ parsers, Python bindings,
              and RabbitMQ to stream frames and metadata for easy integration with external apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
