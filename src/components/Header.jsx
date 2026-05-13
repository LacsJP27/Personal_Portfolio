import { Mail, Linkedin, FileText, GitHub } from 'react-feather';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../constants/constants.js';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
	return (
		<div id="header">
			<div id="title">
				<h1 id="name">Joseph Lacsamana</h1>
				<h2 id="headline">Builder - Norman OK </h2>
			</div>
			<div id="right-side">
				<div id="contact-info">
					<a href={EMAIL} target="_blank" rel="noopener noreferrer">
						<Mail />
					</a>
					<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
						<Linkedin />
					</a>
					<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
						<GitHub />
					</a>
					{/* TODO: Replace with actual resume URL */}
					<a href="RESUME.PDF" target="_blank">
						<FileText />
					</a>
				</div>
				<div id="about-me">
					<Link to="/about-me">ABOUT ME →</Link>
				</div>
			</div>
		</div>
	);
}
