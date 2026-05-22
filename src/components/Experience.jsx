import { EXPERIENCE } from '../data/data.js';
import '../styles/Experience.css';
import { ArrowLeft, X } from 'react-feather';

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
			<button className="close-btn" onClick={() => setActiveSection(null)}>
				<ArrowLeft size={16} />
			</button>
		</div>
	);
}
