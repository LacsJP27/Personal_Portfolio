import '../styles/Home.css';
import Typewriter from './Typewriter';

export default function Home() {
    const phrases = [
        "Hi!",
        "I love to make things!",
        "I am a Computer Science Student at the University of Oklahoma",
        "I love to run and golf!",
        "Welcome to my site :)"
    ];

    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="about-me-section">
                    <Typewriter phrases={phrases} />
                </div>
            </div>
            <div className="container">
                <div className="big-name">Joseph Lacsamana</div>
            </div>
        </section>
    );
}