import { Mail, Linkedin, FileText, GitHub } from 'react-feather';
import {
	GITHUB_URL,
	LINKEDIN_URL,
	EMAIL,
	HEADLINE,
	ABOUT_ME_ROUTE,
} from '../constants/constants.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
	const navigate = useNavigate();
	return (
		<div id="header">
			<div id="title">
				<h1 id="name">JP Lacsamana</h1>
				<h2 id="headline">{HEADLINE}</h2>
			</div>
			<div id="right-side">
				<div id="contact-info">
					<a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
						<Mail size={22} />
					</a>
					<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
						<Linkedin size={22} />
					</a>
					<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
						<GitHub size={22} />
					</a>
					{/* TODO: Replace with actual resume URL */}
					<a href="/#/resume" target="_blank" rel="noreferrer">
						<FileText size={22} />
					</a>
				</div>
				<div id="about-me">
					<Link to={ABOUT_ME_ROUTE}>ABOUT ME →</Link>
				</div>
			</div>
		</div>
	);
}
