import '../styles/Experience.css';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { FaUniversity } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// import { FaGraduationCap, FaCode } from 'react-icons/fa';

function MicrosoftIcon() {
    return (
        <svg viewBox="0 0 100 100" width="1em" height="1em" style={{ flexShrink: 0 }}>
            <rect x="0" y="0" width="47" height="47" fill="#F25022" />
            <rect x="53" y="0" width="47" height="47" fill="#7FBA00" />
            <rect x="0" y="53" width="47" height="47" fill="#00A4EF" />
            <rect x="53" y="53" width="47" height="47" fill="#FFB900" />
        </svg>
    );
}

function MomentusIcon() {
    return (
        <svg viewBox="0 0 100 100" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
            <image href="Momentus.png" x="0" y="0" width="100" height="100"/>
        </svg>
    );
}

const experiences = [
    {
        id: 1,
        icon: <FaUniversity />,
        title: "William Kerber Scholar",
        company: "University of Oklahoma",
        period: "August 2025 - Present",
        description: "Help students understand core computer science concepts in a tutoring environment."
    },
    {
        id: 2,
        icon: <MicrosoftIcon />,
        title: "Software Engineering Intern",
        company: "Microsoft",
        period: "Incoming Summer 2026",
        description: "Working on exciting projects in Microsoft's HQ in Redmond, WA and contributing to Microsoft's technology stack."
    },
    {
        id: 3,
        icon: <FcGoogle />,
        title: "Associated Software Developer Intern",
        company: "Google",
        period: "May 2025 - August 2025",
        description: "Worked with the search ads team to integrate Google Gemini into Google's programmable search engine."
    },
    {
        id: 4,
        icon: <MomentusIcon />,
        title: "Software Developer Intern",
        company: "Momentus Technologies",
        period: "May 2024 - August 2024",
        description: "Upgrading the frontend web components, using Vue.js, to utilize a newer version of Vue addressing the company's tech debt."
    }
];

export default function Experience() {
    const [selected, setSelected] = useState(0);

    return (
        <section id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience-tabs-layout">
                <div className="tabs-list">
                    {experiences.map((job, i) => {
                        return (
                            <button
                                key={job.id}
                                className={`tab-btn ${selected === i ? 'active-tab' : ''}`}
                                onClick={() => setSelected(i)}
                            >
                                {job.icon ? <span className="icon">{job.icon}</span> : null}
                                {job.company}
                                {selected === i && (
                                    <motion.div
                                        className="active-indicator"
                                        layoutId="active-tab"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="tabs-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="content-title-row">
                                <h3>{experiences[selected].title}</h3>
                            </div>
                            <p className="company">{experiences[selected].company}</p>
                            <p className="period">{experiences[selected].period}</p>
                            <p className="job-description">{experiences[selected].description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
