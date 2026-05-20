import { PROJECTS } from '../data/data.js';
import { ArrowLeft } from 'react-feather';
import CloseBtn from './CloseBtn.jsx';
import '../styles/Project.css';
import { useState } from 'react';
import ProjectItem from './ProjectItem.jsx';

export default function ProjectList({ setActiveSection }) {
	return (
		<div className="projects">
			<ul id="project-list">
				<div id="project-instructions">
					hover over project title to see demo (if available)
				</div>
				{PROJECTS.map((project, index) => (
					<li key={index}>
						<ProjectItem project={project} />
					</li>
				))}
			</ul>
			<CloseBtn setActiveSection={setActiveSection} />
		</div>
	);
}
