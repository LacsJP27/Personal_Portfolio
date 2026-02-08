import { motion } from 'motion/react';
import '../styles/Projects.css';

const projects = [
    {
        id: 2,
        title: "SkillSprout",
        description: "AI-powered platform for skill path routing.",
        gif: "/skillsprout_demo.gif",
        url: "https://skillsprout-beige.vercel.app/landing-page"
    },
    {
        id: 0,
        title: "CanvasToTasks",
        description: "A JavaScript program leveraging Google's developer tools and APIs to automate the conversion of Canvas homework assignments to Google Tasks.",
        gif: "/canvasToTasks_demo.gif",
    },
    {
        id: 1,
        title: "Pantry Pilot Pro",
        description: "A Java web application using Maven to generate personalized grocery lists and recipe recommendations based on user preferences and on-hand ingredients.",
    }
]

export default function Projects() {
    return (
        <motion.div
            id="projects"
            className="projects"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.gif && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.gif} alt={project.title} className="project-gif" />
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
