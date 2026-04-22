import '../styles/About.css';
import { motion } from 'motion/react';
import { Mail, Linkedin, FileText } from 'react-feather';
import image3 from '../assets/IMG_0578 2.JPG';

export default function About() {
    // TODO: Use these images for a carousel
    return (
        <motion.div
            id="about"
            className="about"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="about-content">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        {'I was born in Dallas, TX but go to school in Norman, OK (OU) but still consider myself a Texan at heart. ' +
                        'I love to run and am a fanatic for Oklahoma football. I\'m regularly involved on campus and am super interested in the evolving world of technology.\n' +
                        'I am majoring in Computer Science at the University of Oklahoma (OU) and pursuing a minor Math too. ' +
                        'I work as a CS tutor currently, and I am interning for Microsoft in Seattle this summer.\n' +
                        'I love my field and hope to one day make a huge impact on the tech world, but for right now I\'m taking things one step at a time and trying to learn as much as possible.\n' +
                        'Races I\'ve run: Too Hot to Handle! (Dallas, TX), Oklahoma Memorial Half Marathon (OKC, OK), BMW Marathon (Dallas, TX)'}
                    </p>
                    <div id="contact" className="contact-links">
                        <a href="mailto:jplacsamana@gmail.com"><Mail /></a>
                        <a href="https://www.linkedin.com/in/joseph-lacsamana/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        <a href="/#/resume" target="_blank" rel="noreferrer"><FileText /></a>
                    </div>
                </div>
                <div className="about-image">
                    <img src={image3} alt="Joseph Lacsamana" />
                </div>
            </div>
        </motion.div>
    )
}