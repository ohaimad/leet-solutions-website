"use client";
import "./Partnership.css";
import LogoLoop from "./LogoLoop";
import Copy from "../Copy/Copy";

const Partnership = () => {
    const logos = [
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/Ai.svg', alt: 'AI Solutions', title: 'AI Solutions' },
        { src: '/logos/AR.svg', alt: 'AR Technology', title: 'AR Technology' },
        { src: '/logos/Cyber.svg', alt: 'Cybersecurity', title: 'Cybersecurity' },
        { src: '/logos/dev.svg', alt: 'Development', title: 'Development' },
        { src: '/logos/VR.svg', alt: 'VR Solutions', title: 'VR Solutions' },
        { src: '/logos/terrene-logo.png', alt: 'Terrene', title: 'Terrene' },
        { src: '/logos/terrene-logo.png', alt: 'Terrene', title: 'Terrene' },
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
                <LogoLoop
                    logos={logos}
                />
        </section>
    );
};

export default Partnership;