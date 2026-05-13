import { EXPERIENCE } from '../data/data.js';

export default function Experience({ setDisplay }) {
	return (
		<div className="experience">
			<button className="close-btn" onClick={() => setDisplay(false)}>
				X
			</button>
			<h2>Experience</h2>
			<ul>
				{EXPERIENCE.map((job, index) => (
					<li key={index}>
						<h3>{job.title}</h3>
						<p>
							{job.company} • {job.location}
						</p>
						<p>{job.duration}</p>
						<p>{job.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
