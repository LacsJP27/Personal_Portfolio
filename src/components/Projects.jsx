import { PROJECTS } from '../data/data.js';
import { ArrowLeft } from 'react-feather';
import CloseBtn from './CloseBtn.jsx';
import '../styles/Project.css';
import { useState } from 'react';

export default function ProjectList({ setActiveSection }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="projects">
			<ul id="project-list">
				{PROJECTS.map((project, index) => (
					<li key={index}>
						<h3
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{project.title}
						</h3>
						<p>{project.description}</p>
						{isHovered && (
							<div className="project-gif">
								{project.gif ? (
									<img src={project.gif} alt={`${project.title} gif`} />
								) : project.image ? (
									<img src={project.image} alt={`${project.title} image`} />
								) : null}
							</div>
						)}
					</li>
				))}
			</ul>
			<CloseBtn setActiveSection={setActiveSection} />
		</div>
	);
}
