"use client";
import "./Spotlight.css";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spotlight = () => {
  const spotlightRef = useRef(null);
  const titlesContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const spotlightHeaderRef = useRef(null);
  const titlesContainerElementRef = useRef(null);
  const introTextElementsRef = useRef([]);
  const imageElementsRef = useRef([]);
  const titleElementsRef = useRef([]);
  const currentActiveIndexRef = useRef(0);
  const scrollTriggerRef = useRef(null);

  // NOTE: These values are interconnected - when speed changes, it affects when images finish their movement, which also affects the gap between images. When you change the number of items in spotlightItems array, you'll need to adjust these config settings together. Test different combinations until you find the right balance that looks good.
  const config = {
    gap: 0.08,
    speed: 0.5,
    arcRadius: 200,
  };

  const spotlightItems = [
    { name: "Abdelmottalib Qiouami", img: "/team-members/lwjoh/Abdelmottalib Qiouami.jpg", background: "/team-members/bg/bg-3.png" },
    { name: "Othmane BOUCHTA", img: "/team-members/lwjoh/Othmane BOUCHTA.JPG", background: "/team-members/bg/bg-3.png" },
    { name: "Said Oubella", img: "/team-members/lwjoh/Said Oubella.jpg", background: "/team-members/bg/bg-3.png" },
    { name: "Yahya Rhiba", img: "/team-members/lwjoh/Yahya Rhiba.png", background: "/team-members/bg/bg-3.png" },
    { name: "Yassine Oubihi", img: "/team-members/lwjoh/Yassine Oubihi.jpeg", background: "/team-members/bg/bg-1.png" },
    { name: "Younes Bouddou", img: "/team-members/lwjoh/Younes Bouddou.JPG", background: "/team-members/bg/bg-1.png" },
    { name: "Aymen Errafig", img: "/team-members/lwjoh/aymen errafig.jpg", background: "/team-members/bg/bg-1.png" },
    { name: "Brahim Chifour", img: "/team-members/lwjoh/brahim chifour.jpg", background: "/team-members/bg/bg-1.png" },
    { name: "Otmane Haimad", img: "/team-members/lwjoh/otmane haimad.JPG", background: "/team-members/bg/bg-1.png" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initializeSpotlight = () => {
      try {
        const titlesContainer = titlesContainerRef.current;
        const imagesContainer = imagesContainerRef.current;
        const spotlightHeader = spotlightHeaderRef.current;
        const titlesContainerElement = titlesContainerElementRef.current;
        const introTextElements = introTextElementsRef.current;
        const imageElements = imageElementsRef.current;

        if (
          !titlesContainer ||
          !imagesContainer ||
          !spotlightHeader ||
          !titlesContainerElement ||
          !titlesContainer.isConnected ||
          !imagesContainer.isConnected
        ) {
          return false;
        }

        titlesContainer.innerHTML = "";
        imagesContainer.innerHTML = "";
        imageElements.length = 0;

      spotlightItems.forEach((item, index) => {
        const titleElement = document.createElement("h1");
        titleElement.textContent = item.name;
        if (index === 0) titleElement.style.opacity = "1";
        titlesContainer.appendChild(titleElement);

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "spotlight-img";
        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = "";
        imgWrapper.appendChild(imgElement);
        imagesContainer.appendChild(imgWrapper);
        imageElements.push(imgWrapper);
      });

      const titleElements = titlesContainer.querySelectorAll("h1");
      titleElementsRef.current = titleElements;

      if (titleElements.length === 0) {
        return false;
      }

        return true;
      } catch (error) {
        console.warn('Spotlight initialization error:', error);
        return false;
      }
    };

    let initialized = initializeSpotlight();

    if (!initialized) {
      const initInterval = setInterval(() => {
        initialized = initializeSpotlight();
        if (initialized) {
          clearInterval(initInterval);
        }
      }, 10);

      setTimeout(() => {
        clearInterval(initInterval);
      }, 2000);
    }

    if (!initialized) {
      return;
    }

    const titlesContainer = titlesContainerRef.current;
    const imagesContainer = imagesContainerRef.current;
    const spotlightHeader = spotlightHeaderRef.current;
    const titlesContainerElement = titlesContainerElementRef.current;
    const introTextElements = introTextElementsRef.current;
    const imageElements = imageElementsRef.current;
    const titleElements = titleElementsRef.current;
    let currentActiveIndex = 0;

    const containerWidth = window.innerWidth * 0.3;
    const containerHeight = window.innerHeight;
    const arcStartX = containerWidth - 220;
    const arcStartY = -200;
    const arcEndY = containerHeight + 200;
    const arcControlPointX = arcStartX + config.arcRadius;
    const arcControlPointY = containerHeight / 2;

    function getBezierPosition(t) {
      const x =
        (1 - t) * (1 - t) * arcStartX +
        2 * (1 - t) * t * arcControlPointX +
        t * t * arcStartX;
      const y =
        (1 - t) * (1 - t) * arcStartY +
        2 * (1 - t) * t * arcControlPointY +
        t * t * arcEndY;
      return { x, y };
    }

    function getImgProgressState(index, overallProgress) {
      const startTime = index * config.gap;
      const endTime = startTime + config.speed;

      if (overallProgress < startTime) return -1;
      if (overallProgress > endTime) return 2;

      return (overallProgress - startTime) / config.speed;
    }

    imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: ".spotlight",
      start: "top top",
      end: `+=${window.innerHeight * 10}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.2) {
          const animationProgress = progress / 0.2;

          const moveDistance = window.innerWidth * 0.6;
          gsap.set(introTextElements[0], {
            x: -animationProgress * moveDistance,
          });
          gsap.set(introTextElements[1], {
            x: animationProgress * moveDistance,
          });
          gsap.set(introTextElements[0], { opacity: 1 });
          gsap.set(introTextElements[1], { opacity: 1 });

          gsap.set(".spotlight-bg-img", {
            transform: `scale(${animationProgress})`,
          });
          gsap.set(".spotlight-bg-img img", {
            transform: `scale(${1.5 - animationProgress * 0.5})`,
          });

          imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
          spotlightHeader.style.opacity = "0";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "0",
            "--after-opacity": "0",
          });
        } else if (progress > 0.2 && progress <= 0.25) {
          gsap.set(".spotlight-bg-img", { transform: "scale(1)" });
          gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });

          gsap.set(introTextElements[0], { opacity: 0 });
          gsap.set(introTextElements[1], { opacity: 0 });

          imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
          spotlightHeader.style.opacity = "1";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "1",
            "--after-opacity": "1",
          });
        } else if (progress > 0.25 && progress <= 0.95) {
          gsap.set(".spotlight-bg-img", { transform: "scale(1)" });
          gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });

          gsap.set(introTextElements[0], { opacity: 0 });
          gsap.set(introTextElements[1], { opacity: 0 });

          spotlightHeader.style.opacity = "1";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "1",
            "--after-opacity": "1",
          });

          const switchProgress = (progress - 0.25) / 0.7;
          const viewportHeight = window.innerHeight;
          const titlesContainerHeight = titlesContainer.scrollHeight;
          const startPosition = viewportHeight;
          const targetPosition = -titlesContainerHeight;
          const totalDistance = startPosition - targetPosition;
          const currentY = startPosition - switchProgress * totalDistance;

          gsap.set(".spotlight-titles", {
            transform: `translateY(${currentY}px)`,
          });

          imageElements.forEach((img, index) => {
            const imageProgress = getImgProgressState(index, switchProgress);

            if (imageProgress < 0 || imageProgress > 1) {
              gsap.set(img, { opacity: 0 });
            } else {
              const pos = getBezierPosition(imageProgress);
              gsap.set(img, {
                x: pos.x - 100,
                y: pos.y - 75,
                opacity: 1,
              });
            }
          });

          const viewportMiddle = viewportHeight / 2;
          let closestIndex = 0;
          let closestDistance = Infinity;

          titleElements.forEach((title, index) => {
            const titleRect = title.getBoundingClientRect();
            const titleCenter = titleRect.top + titleRect.height / 2;
            const distanceFromCenter = Math.abs(titleCenter - viewportMiddle);

            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter;
              closestIndex = index;
            }
          });

          if (closestIndex !== currentActiveIndex) {
            titleElements[currentActiveIndex].style.opacity = "0.35";
            titleElements[closestIndex].style.opacity = "1";
            document.querySelector(".spotlight-bg-img img").src =
              spotlightItems[closestIndex].background;
            currentActiveIndex = closestIndex;
          }
        } else if (progress > 0.95) {
          spotlightHeader.style.opacity = "0";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "0",
            "--after-opacity": "0",
          });
        }
      },
    });

    return () => {
      try {
        // Kill the main scroll trigger
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        }
        
        // Kill any remaining GSAP animations
        if (imageElementsRef.current.length > 0) {
          gsap.killTweensOf(imageElementsRef.current);
        }
        if (titleElementsRef.current.length > 0) {
          gsap.killTweensOf(titleElementsRef.current);
        }
        if (introTextElementsRef.current.length > 0) {
          gsap.killTweensOf(introTextElementsRef.current);
        }
        
        // Clear all refs
        imageElementsRef.current = [];
        titleElementsRef.current = [];
        introTextElementsRef.current = [];
        
        // Kill all ScrollTriggers to be safe
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && trigger.trigger.closest('.spotlight')) {
            trigger.kill();
          }
        });
        
      } catch (error) {
        console.warn('Spotlight cleanup error:', error);
      }
    };
  }, []);

  return (
    <section className="spotlight" ref={spotlightRef}>
      <div className="spotlight-inner">
        <div className="spotlight-intro-text-wrapper">
          <div
            className="spotlight-intro-text"
            ref={(el) => (introTextElementsRef.current[0] = el)}
          >
            <p>Team</p>
          </div>
          <div
            className="spotlight-intro-text"
            ref={(el) => (introTextElementsRef.current[1] = el)}
          >
            <p>Members</p>
          </div>
        </div>
        <div className="spotlight-bg-img">
          <img src={spotlightItems[0].background} alt="" />
        </div>
      </div>
      <div
        className="spotlight-titles-container"
        ref={titlesContainerElementRef}
      >
        <div className="spotlight-titles" ref={titlesContainerRef}></div>
      </div>
      <div className="spotlight-images" ref={imagesContainerRef}></div>
      <div className="spotlight-header" ref={spotlightHeaderRef}>
        <p>Leet Members</p>
      </div>
      <div className="spotlight-outline"></div>
    </section>
  );
};

export default Spotlight;