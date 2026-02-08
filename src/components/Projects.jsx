import { motion } from 'motion/react';
import Card from "./Card"
const projects = [
    {
        id: 2,
        title: "Project Title",
        subtitle: "",
        period: "",
        description: "",
        gif: "/skillsprout_demo.gif",
        url: "https://example.com"
    },
    {
        id: 0,
        title: "Pantry Pilot Pro",
        subtitle: "Git, Maven, Java",
        period: "May 2025",
        description: "Developed Pantry Pilot, a Java web application utilizing" + 
        " Maven to generate personalized grocery lists and recipe" +
        " recommendations based on user preferences and on-hand ingredients." +
        " Implemented comprehensive unit testing with Maven, achieving over 80%" + 
        " code coverage to ensure high code quality and reliability for the web server application."
    },
    {
        id: 1,
        title: "CanvasToTasks",
        subtitle: "Chrome Extensions, JavaScript, Google APIs",
        period: "Jan 2025",
        description: "Developed a JavaScript program leveraging Google's developer tools, the Google" + 
        " Calendar API, and the Google Tasks API to automate the conversion of Canvas" +
        " homework assignments to Google Tasks"
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
                <h1>Projects (Gifs coming soon)</h1>
                <div className="projects-card">
                        {projects.map((project, index) => (
                            <Card
                                key={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                gif={project.gif}
                                url={project.url}
                                index={index}
                            />
                        ))}
                </div>
        </motion.div>
    )
}