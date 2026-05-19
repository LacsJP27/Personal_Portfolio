import { EXPERIENCE } from '../data/data.js';
import '../styles/Experience.css';

export default function Experience({ setDisplay }) {
	return (
		<div className="experience">
			<button className="close-btn" onClick={() => setDisplay(false)}>
				X
			</button>
			{/* <h2>Experience</h2> */}
			<ul id="experience-list">
				{EXPERIENCE.map((job, index) => (
					<li key={index}>
						<h3 id="job-title">
							{job.company} - {job.title}
							<span id="job-subtitle">
								{job.location} | {job.duration}
							</span>
						</h3>
						<p>{job.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
