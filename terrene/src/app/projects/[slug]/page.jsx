"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";
import { getProjectBySlug } from "./project-data";
import "./project-detail.css";

const ProjectDetail = () => {
    const params = useParams();
    const { navigateWithTransition } = useViewTransition();
    const [project, setProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true);

    useEffect(() => {
        if (params?.slug) {
            const projectData = getProjectBySlug(params.slug);
            if (projectData) {
                setProject(projectData);
            }
        }
    }, [params]);

    // Auto-slide effect
    useEffect(() => {
        if (!project || !project.image || !Array.isArray(project.image) || project.image.length <= 1 || !isAutoSliding) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [project, isAutoSliding]);

    const nextImage = () => {
        if (project && project.image && Array.isArray(project.image)) {
            setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
            setIsAutoSliding(false); // Pause auto-slide on manual interaction
            // Resume auto-slide after 8 seconds of inactivity
            setTimeout(() => setIsAutoSliding(true), 8000);
        }
    };

    const prevImage = () => {
        if (project && project.image && Array.isArray(project.image)) {
            setCurrentImageIndex((prev) => (prev - 1 + project.image.length) % project.image.length);
            setIsAutoSliding(false); // Pause auto-slide on manual interaction
            // Resume auto-slide after 8 seconds of inactivity
            setTimeout(() => setIsAutoSliding(true), 8000);
        }
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
        setIsAutoSliding(false); // Pause auto-slide on manual interaction
        // Resume auto-slide after 8 seconds of inactivity
        setTimeout(() => setIsAutoSliding(true), 8000);
    };



    if (!project) {
        return (
            <>
                <Nav />
                <div className="project-detail-container">
                    <div className="container">
                        <div className="project-not-found">
                            {/* <h1>Project Not Found</h1> */}
                            <p>loading</p>
                        </div>
                    </div>
                </div>
                <ConditionalFooter />
            </>
        );
    }

    return (
        <>
            <Nav />
            <div className="project-detail-container">
                <div className="back-button-container">
                    <button
                        className="back-button"
                        onClick={() => navigateWithTransition('/projects')}
                        aria-label="Back to Projects"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Projects
                    </button>
                </div>
                <section className="project-hero">
                    <div className="container">
                        <div className="project-hero-content">
                            <div className="project-meta">
                                <Copy delay={0.1}>
                                    <p style={{ color: 'var(--base-600)' }}>Entity</p>
                                    <p className="project-entity">{project.entity}</p>
                                </Copy>
                                <Copy delay={0.15}>
                                    <p style={{ color: 'var(--base-600)' }}>Progress</p>
                                    <p className="project-progress">{project.progress}</p>
                                </Copy>
                                <Copy delay={0.2}>
                                    <p style={{ color: 'var(--base-600)' }}>Next step</p>
                                    <p className="project-nextstep">{project.nextstep}</p>
                                </Copy>
                            </div>
                            <div className="project-title">
                                <Copy delay={0.3}>
                                    <h1>{project.title}</h1>
                                </Copy>
                                <Copy delay={0.4}>
                                    <h2 className="project-subtitle">{project.subtitle}</h2>
                                </Copy>
                            </div>
                            {/* <div className="project-description">
                                <Copy delay={0.5}>
                                    <p className="project-short-desc">{project.description}</p>
                                </Copy>
                            </div> */}
                        </div>
                        <div className="project-hero-image-slider">
                            <Copy delay={0.6}>
                                <div className="slider-container">
                                    <div 
                                        className="slider-main"
                                        onMouseEnter={() => setIsAutoSliding(false)}
                                        onMouseLeave={() => setIsAutoSliding(true)}
                                    >
                                        {project.image && Array.isArray(project.image) ? (
                                            <img 
                                                src={project.image[currentImageIndex]} 
                                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                                className="slider-main-image"
                                            />
                                        ) : (
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className="slider-main-image"
                                            />
                                        )}
                                        
                                        {project.image && Array.isArray(project.image) && project.image.length > 1 && (
                                            <>
                                                <button className="slider-btn slider-btn-prev" onClick={prevImage}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                                <button className="slider-btn slider-btn-next" onClick={nextImage}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </button>
                                                <button 
                                                    className="slider-btn slider-btn-play-pause" 
                                                    onClick={() => setIsAutoSliding(!isAutoSliding)}
                                                    title={isAutoSliding ? 'Pause slideshow' : 'Play slideshow'}
                                                >
                                                    {isAutoSliding ? (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M6 4H10V20H6V4Z" fill="currentColor"/>
                                                            <path d="M14 4H18V20H14V4Z" fill="currentColor"/>
                                                        </svg>
                                                    ) : (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                                                        </svg>
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    
                                    {project.image && Array.isArray(project.image) && project.image.length > 1 && (
                                        <div className="slider-thumbnails">
                                            {project.image.map((img, index) => (
                                                <button
                                                    key={index}
                                                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                                    onClick={() => goToImage(index)}
                                                >
                                                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Copy>
                        </div>
                    </div>
                </section>

                <section className="project-details">
                    <div className="container">
                        <div className="project-details-grid">
                            <div className="project-details-content">
                                {/* <Copy delay={0.1}> */}
                                <h3>Project Overview</h3>
                                {/* </Copy> */}
                                {/* <Copy delay={0.2}> */}
                                <p dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
                                {/* </Copy> */}
                            </div>
                            {/* <div className="project-details-sidebar">
                                <div className="project-tech">
                                    <Copy delay={0.3}>
                                        <h4>Technologies Used</h4>
                                    </Copy>
                                    <div className="tech-tags">
                                        {project.technologies.map((tech, index) => (
                                            <Copy key={tech} delay={0.4 + index * 0.05}>
                                                <span className="tech-tag">{tech}</span>
                                            </Copy>
                                        ))}
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
            {/* <ConditionalFooter /> */}
        </>
    );
};

export default ProjectDetail;