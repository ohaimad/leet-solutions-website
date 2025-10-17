"use client";
import "./LogoLoop.css";
import LogoLoop from "./LogoLoop";
import Copy from "../Copy/Copy";

const Partnership = () => {
    const logos = [
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },
        { src: '/logos/1337-green.png', alt: '1337 School', title: '1337 School' },
        { src: '/logos/LEET.svg', alt: 'LEET Solutions', title: 'LEET Solutions' },

    ];

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center text-center py-16">
                <Copy delay={0.1}>
                    <p style={{ color: '#AFDCB1' }} className="mb-4">Partnerships</p>
                </Copy>
                <Copy delay={0.15}>
                    <h2 className="text-white font-medium">Trusted by leading organizations</h2>
                </Copy>
            </div>
            <LogoLoop
                logos={logos}
            />
        </section >
    );
};

export default Partnership;