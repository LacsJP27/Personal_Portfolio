import { EXPERIENCE } from '../data/data.js';
import '../styles/Experience.css';
import CloseBtn from './CloseBtn.jsx';

export default function Experience({ setActiveSection }) {
	return (
		<div className="experience">
			<ul id="experience-list">
				{EXPERIENCE.map((job, index) => (
					<li key={index}>
						<h3 className="job-headline">
							<img src={job.icon} alt={job.company} /> {job.company}
							<span className="job-subtitle">{job.title}</span>
						</h3>
						<p>{job.description}</p>
					</li>
				))}
			</ul>
			<CloseBtn setActiveSection={setActiveSection} />
		</div>
	);
}
