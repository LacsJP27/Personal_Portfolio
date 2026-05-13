import { PROJECTS } from '../data/data.js';

export default function ProjectItem({ project }) {
	return (
		<>
			<div className="project-card">
				<h2>{project.title}</h2>
				{project.gif ? (
					<img src={project.gif} alt={`${project.title} gif`} />
				) : project.image ? (
					<img src={project.image} alt={`${project.title} image`} />
				) : null}
				<p>{project.description}</p>
			</div>
		</>
	);
}
