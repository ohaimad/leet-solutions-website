"use client";
import "./Partnership.css";
import LogoLoop from "./LogoLoop";
import Copy from "../Copy/Copy";

const Partnership = () => {
    const logos = [
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/terrene-logo.png', alt: 'Terrene', title: 'Terrene' },
        { src: '/logos/Ai.svg', alt: 'AI Technology', title: 'AI Technology' },
        { src: '/logos/Cyber.svg', alt: 'Cyber Security', title: 'Cyber Security' },
        { src: '/logos/dev.svg', alt: 'Development', title: 'Development' },
        { src: '/logos/VR.svg', alt: 'Virtual Reality', title: 'Virtual Reality' },
        { src: '/logos/AR.svg', alt: 'Augmented Reality', title: 'Augmented Reality' },
    ];

    return (
        <section className="partnerships-section">
            <div className="container">
                <div className="partnerships-header-callout">
                    <Copy delay={0.1}>
                        <p style={{ color: '#AFDCB1' }}>Partnerships</p>
                    </Copy>
                </div>
                <div className="partnerships-header">
                    <Copy delay={0.15}>
                        <h2>Trusted by leading organizations</h2>
                    </Copy>
                </div>
            </div>
            <div >
                <LogoLoop
                    logos={logos}
                />
            </div>
        </section>
    );
};

export default Partnership;