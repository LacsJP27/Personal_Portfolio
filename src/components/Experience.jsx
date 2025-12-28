import '../styles/Experience.css';
import Card from './Card';

// Sample experience data - replace with your actual experience
const experiences = [
    {
        id: 1,
        title: "William Kerber Scholar",
        company: "University of Oklahoma",
        period: "August 2025 - Present",
        description: "Help students understand core computer science concepts in a tutoring environment."
    },
    {
        id: 2,
        title: "Software Engineering Intern",
        company: "Microsoft",
        period: "Incoming Summer 2026",
        description: "Working on exciting projects in Microsoft's HQ in Redmond,WA and contributing to Microsoft's technology stack."
    },
    {
        id: 3,
        title: "Associated Software Developer Intern",
        company: "Google",
        period: "May 2025 - August 2025",
        description: "Worked with the search ads team to integrate Google Gemini into Google's programmable search engine."
    },
    {
        id: 4,
        title: "Software Developer Intern",
        company: "Momentus Technologies",
        period: "May 2024- August 2024",
        description: "Upgrading the frontend web components, using Vue.js, to utilize a newer of Vue addressing the companies tech."
    }
];

export default function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="experience-content">
                <h1>Experience</h1>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <Card
                            key={exp.id}
                            title={exp.title}
                            subtitle={exp.company}
                            period={exp.period}
                            description={exp.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}