"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";
import "./project-detail.css";

// Project data mapping
const projectsData = {
    "ocp-minetalents": {
        title: "OCP-MineTalents",
        subtitle: "TalentAI Platform",
        description: "TalentAI: A platform that helps organizations and HR quickly find and manage the expertise they need just with one message",
        fullDescription: "The OCP-MineTalents project is a comprehensive talent management platform designed specifically for OCP Group. This AI-powered solution revolutionizes how organizations identify, engage, and manage internal expertise. The platform leverages advanced natural language processing to match queries with the most relevant experts within the organization, significantly reducing the time spent on expertise discovery and project staffing.",
        image: "/how-we-work/process-1.jpg",
        progress: "OCP Group",
        nextstep: "2024",
        technologies: ["React", "Node.js", "AI/ML", "MongoDB", "NLP"],
        entity: "Enterprise Software"
    },
    "amfd-dashboard": {
        title: "AMFD-Dashboard",
        subtitle: "Budget Management System",
        description: "AMFD oversees several educational and operational entities with varying budget structures. This system replaces spreadsheets with a structured, version-controlled budget register.",
        fullDescription: "The AMFD-Dashboard is a comprehensive budget management system developed for the Agence Marocaine de Financement du Développement. This platform transforms traditional spreadsheet-based budget tracking into a modern, version-controlled system that provides real-time insights and collaborative budget management across multiple educational and operational entities.",
        image: "/how-we-work/process-2.jpg",
        progress: "AMFD",
        nextstep: "2024",
        technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
        entity: "Financial Management"
    },
    "granulens": {
        title: "Granulens",
        subtitle: "Granulometry & Coloration Analyzer",
        description: "This projects acts as a granulometry and coloration analyzer, where a sample of the fertilizers will go thru a hardware device, so that images of grains can be captured in a (calibrated) lighting controlled environment.",
        fullDescription: "Granulens is an innovative computer vision system that analyzes fertilizer granules for quality control. The system combines specialized hardware with advanced image processing algorithms to provide accurate granulometry and coloration analysis. This solution ensures consistent fertilizer quality and helps optimize production processes.",
        image: "/how-we-work/process-3.jpg",
        progress: "OCP Group",
        nextstep: "2023",
        technologies: ["Python", "OpenCV", "TensorFlow", "IoT", "Hardware Integration"],
        entity: "Computer Vision"
    },
    "tmsa-marhaba-2077": {
        title: "TMSA-Marhaba-2077",
        subtitle: "Port Traffic Management System",
        description: "Marhaba is a full-stack web application that helps harbour/port operators to: ingest, clean and analyse passenger traffic data (IN / OUT) manage ferry ticket prices & historical evolution schedule events & holidays that impact traffic forecasts visualise forecasts v.s. real figures through interactive dashboards",
        fullDescription: "TMSA-Marhaba-2077 is a sophisticated port management system developed for Tanger Med Special Agency. This comprehensive platform handles passenger traffic analytics, pricing management, and forecasting for one of Africa's largest ports. The system processes millions of data points to provide actionable insights for port operations and strategic planning.",
        image: "/how-we-work/process-4.jpg",
        progress: "TMSA",
        nextstep: "2024",
        technologies: ["React", "Django", "PostgreSQL", "Apache Kafka", "D3.js"],
        entity: "Transportation & Logistics"
    },
    "ls-deepvisionstream": {
        title: "LS-DeepVisionStream",
        subtitle: "Real-time Video Analytics Platform",
        description: "DeepVisionStream is a modular DeepStream-based platform for real-time video analytics using custom models like YOLO, SAM, and D-Fine. It includes C++ parsers, Python bindings, and RabbitMQ to stream frames and metadata for easy integration with external apps.",
        fullDescription: "LS-DeepVisionStream represents the cutting edge of real-time video analytics. Built on NVIDIA's DeepStream framework, this platform provides modular, scalable video processing capabilities for industrial and security applications. The system supports multiple AI models and provides seamless integration with existing infrastructure through message queuing systems.",
        image: "/how-we-work/process-4.jpg",
        progress: "LEET Solutions",
        nextstep: "2024",
        technologies: ["C++", "Python", "NVIDIA DeepStream", "YOLO", "RabbitMQ"],
        entity: "AI & Computer Vision"
    }
};

const ProjectDetail = () => {
    const params = useParams();
    const { navigateWithTransition } = useViewTransition();
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (params?.slug) {
            const projectData = projectsData[params.slug];
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
                                <Copy delay={0.1}>
                                    <h3>Project Overview</h3>
                                </Copy>
                                <Copy delay={0.2}>
                                    <p>{project.fullDescription}</p>
                                </Copy>
                            </div>
                            <div className="project-details-sidebar">
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ConditionalFooter />
        </>
    );
};

export default ProjectDetail;