import { PROJECTS } from '../data/data.js';
import ProjectItem from './ProjectItem.jsx';
import BackBtn from './BackBtn.jsx';
export default function ProjectList() {
	return (
		<>
			<BackBtn />
			{PROJECTS.map((project) => (
				<ProjectItem key={project.title} project={project} />
			))}
		</>
	);
}
