import { useState } from 'react';

export default function ProjectItem({ project }) {
	const [showGif, setShowGif] = useState(false);

	const toggleGif = () => {
		setShowGif((prev) => !prev);
	};
	return (
		<>
			<div className="project-headline-container">
				<a href={project.githubLink} target="_blank" rel="noopener noreferrer">
					<h3 className="project-headline">{project.title}</h3>
				</a>
				{project.gif || project.image ? (
					<span className="gif-toggle" onClick={toggleGif}>
						gif
					</span>
				) : null}
			</div>
			<p>{project.description}</p>
			<div className="project-gif">
				{showGif && project.gif ? (
					<img src={project.gif} alt={`${project.title} gif`} />
				) : showGif && project.image ? (
					<img src={project.image} alt={`${project.title} image`} />
				) : null}
			</div>
		</>
	);
}
