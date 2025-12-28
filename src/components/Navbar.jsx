import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Hi!</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}