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

    useEffect(() => {
        if (params?.slug) {
            const projectData = getProjectBySlug(params.slug);
            if (projectData) {
                setProject(projectData);
            }
        }
    }, [params]);

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
                        <div className="project-hero-image">
                            <Copy delay={0.6}>
                                <img src={project.image} alt={project.title} />
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