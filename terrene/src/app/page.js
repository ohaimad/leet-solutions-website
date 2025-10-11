"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      const counts = document.querySelectorAll(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-100%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () =>
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 }),
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Leet</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Solutions</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          {/* <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div> */}
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <img src="/home/background.jpg" alt="" />
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={showPreloader ? 4 : 0.85}>
                <h1>Place where <span style={{color: '#AFDCB1'}}>solutions</span> runs at <span style={{color: '#AFDCB1'}}>1337</span> speed</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={showPreloader ? 4.5 : 1}>
                <p>
                  At Leet Solution, we turn complexity into clarity, power ideas with code, and move faster than the digital world itself
                </p>
              </Copy>
            </div>
            {/* <AnimatedButton
              label="Discover More"
              route="/studio"
              animateOnScroll={false}
              delay={showPreloader ? 10.3 : 1.15}
            /> */}
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>80+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Client satisfied</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>36+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Project completed</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>04+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Departments service</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>98%</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Return rate across commissions</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                <span className="spacer">&nbsp;</span>
                LEET Solutions emerged from Morocco's revolutionary 1337 coding school ecosystem, where peer-to-peer
                learning and project-based education create exceptional developers. We're not just another tech
                company – we're industrial AI pioneers.
              </h1>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p style={{color: '#AFDCB1'}}>How we work</p>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Our mission is to transform traditional industries through intelligent automation, machine learning,
                  and cutting-edge technology solutions that drive sustainable growth across Morocco, Africa, and beyond.
                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>AR & VR</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Cyber Security</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>FullStack & Mobile</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>AI & Machine Learning</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout" style={{color:'#AFDCB1'}}>
            <Copy delay={0.1}>
              <p>Departments</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>A selection of leet solution departments</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section>
      <section className="client-reviews-container">
        <div className="container">
          <div className="client-reviews-header-callout">
            <p style={{color:'#AFDCB1'}}>Leet Leads</p>
          </div>
          <ClientReviews />
        </div>
      </section>
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/home/projects/project-2.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/home/projects/project-1.jpg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>36+</h3>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/home/projects/project-3.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/home/projects/project-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  Showcases our innovative work across diverse industries, including
                  collaborations with major organizations such as OCP and TANGER-MED.
                  Each project reflects our expertise, creativity, and commitment to transforming
                  deas into impactful results.
                </h3>
              </Copy>
              <AnimatedButton label="Explore Projects" route="blueprints" />
            </div>
          </div>
        </div>
      </section>
      <CTAWindow
        img="/home/1337.jpg"
        header="1337"
        callout="I CODE, YOU CODE, WE CODE…"
        description="1337 is the first to provide IT training in Morocco, completely free of charge, open and accessible to anyone between the ages of 18 and 30. No need for an IT degree, or of having undergone extensive IT training."
      />
      <ConditionalFooter />
    </>
  );
}
