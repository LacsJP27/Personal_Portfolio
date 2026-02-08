import { motion } from 'motion/react';
import Card from "./Card"
import '../styles/Education.css'

const degrees = [
    {
        id: 0,
        title: "Bachelor of Science in Computer Science",
        subtitle: "University of Oklahoma (GPA: 4.0)",
        period: "August 2023 - May 2027 (expected)",
        description: "I am currently pursuing a B.S. in Computer Science at " + 
        "the University of Oklahoma’s Gallogly College of Engineering. My " + 
        "coursework focuses on building a strong foundation in software engineering" + 
        " and algorithmic theory, with an emphasis on solving complex technical" + 
        " problems through modern development practices."
    }
]

export default function Education() {
    return (
        <motion.div
            id="education"
            className="education"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="education-content">
                <div className="education-classes">
                    <h1>Education</h1>
                    <h2>Classes:</h2>
                    <ul>
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning Fundamentals</li>
                        <li>Applied Statistics</li>
                        <li>Database Management Systems</li>
                        <li>Algorithm Analysis</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Software Engineering</li>
                        <li>Computer Security</li>
                        <li>Parallel Distributed Network Programming</li>
                        <li>Intro to Intelligent Robotics</li>
                        <li>Operating Systems</li>
                        <li>Discrete Mathematical Structures</li>
                        <li>Calculus I - III</li>
                    </ul>
                </div>
                <div className="education-card">
                    {degrees.map((degrees, index) => (
                        <Card
                            key={degrees.id}
                            title={degrees.title}
                            subtitle={degrees.subtitle}
                            description={degrees.description}
                            index={index}
                        />

                    ))}
                </div>
            </div>
        </motion.div>
    )
}
