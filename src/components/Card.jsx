import { motion } from 'motion/react';
import '../styles/Card.css';

/**
 * Reusable Card component for displaying various types of content
 * Can be used for Experience, Education, Projects, etc.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main title (e.g., job title, school name, project name)
 * @param {string} props.subtitle - Subtitle (e.g., company, school, tech stack)
 * @param {string} props.period - Time period (optional)
 * @param {string} props.description - Description text (optional)
 * @param {number} props.index - Index for animation delay (optional, defaults to 0)
 * @param {string} props.className - Additional CSS classes (optional)
 */
export default function Card({
    title,
    subtitle,
    period,
    description,
    gif,
    url,
    index = 0,
    className = ''
}) {
    const content = (
        <motion.div
            className={`card-wrapper ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1
            }}
            whileHover={{
                y: -10,
                scale: 1.02
            }}
        >
            <div className="card">
                {gif && <img src={gif} alt={title} className="card-gif" />}
                <h2>{title}</h2>
                {subtitle && <h3>{subtitle}</h3>}
                {period && <p className="period">{period}</p>}
                {description && <p className="description">{description}</p>}
            </div>
        </motion.div>
    );

    if (url) {
        return <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">{content}</a>;
    }

    return content;
}
