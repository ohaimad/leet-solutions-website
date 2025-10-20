"use client";
import "./LogoLoop.css";
import LogoLoop from "./LogoLoop";
import Copy from "../Copy/Copy";

const Partnership = () => {
    const logos = [
        { src: '/Partnership/Apm.svg', alt: 'APM', title: 'APM' },
        { src: '/Partnership/Tangermed.svg', alt: 'Tanger Med', title: 'Tanger Med' },
        { src: '/Partnership/UM6P.svg', alt: 'UM6P', title: 'UM6P' },
        { src: '/Partnership/marsa-maroc-seeklogo.svg', alt: 'Marsa Maroc', title: 'Marsa Maroc' },
        { src: '/Partnership/ocp.svg', alt: 'OCP', title: 'OCP' },
        { src: '/Partnership/reneau.svg', alt: 'Reneau', title: 'Reneau' },
        // { src: '/Partnership/te-connect.png', alt: 'TE Connect', title: 'TE Connect' },
        { src: '/Partnership/wizara.png', alt: 'Wizara', title: 'Wizara' },
    ];

    return (
        <section className="py-32">
            <div className="flex flex-col items-center justify-center text-center mb-20">
                <Copy delay={0.1}>
                    <p style={{ color: '#AFDCB1' }} className="mb-4">Partnerships</p>
                </Copy>
                <Copy delay={0.15}>
                    <h2 className="text-white font-medium">Trusted by leading organizations</h2>
                </Copy>
            </div>
            <LogoLoop
                logos={logos}
                speed={80}
                direction="left"
                pauseOnHover={true}
                logoHeight={50}
                gap={60}
                fadeOut={false}
                width="100%"
                className="partnership-logos"
            />
        </section >
    );
};

export default Partnership;