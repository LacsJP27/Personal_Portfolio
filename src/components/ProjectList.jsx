import { PROJECTS } from '../data/data.js';
import CloseBtn from './CloseBtn.jsx';
import ProjectItem from './ProjectItem.jsx';
import '../styles/Project.css';

export default function ProjectList({ setActiveSection }) {
	return (
		<div className="projects">
			<ul id="project-list">
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
