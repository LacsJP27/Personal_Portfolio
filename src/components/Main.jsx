import Tab from './Tab';
import Cube from './Cube';
import Experience from './Experience';
import Projects from './Projects';
import '../styles/Main.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
	PROJECTS_ROUTE,
	PICTURES_ROUTE,
	BLOG_ROUTE,
} from '../constants/constants.js';

export default function Main() {
	// TODO: Need to pass callback to cube, pass shouldExplode to cube.
	// when callback is called, set shouldExplode back to false and display the experience card
	const navigate = useNavigate();
	let [displayExperience, setDisplayExperience] = useState(false);
	const [shouldExplode, setShouldExplode] = useState(false);
	const [pendingSection, setPendingSection] = useState(null);
	const tabs = ['experience', 'projects'];
	const [activeSection, setActiveSection] = useState(null);

	const onClickRedirect = (path) => {
		navigate(path);
	};

	const onClickPopup = (clickedSection) => {
		if (activeSection !== null) {
			setActiveSection(null);
			return;
		}
		setPendingSection(clickedSection);
		setShouldExplode(true);
	};

	const onExplosionComplete = () => {
		setShouldExplode(false);
		setActiveSection(pendingSection);
		setPendingSection(null);
	};

	const renderRightPanel = () => {
		if (activeSection === tabs[0]) {
			return <Experience setActiveSection={setActiveSection} />;
		}

		if (activeSection === tabs[1]) {
			return <Projects setActiveSection={setActiveSection} />;
		}

		return (
			<div id="cube-container">
				<Cube
					shouldExplode={shouldExplode}
					onExplosionComplete={onExplosionComplete}
				/>
			</div>
		);
	};

	return (
		<div id="main">
			<div id="tabs">
				<Tab
					number={1}
					name="Experience"
					isActive={activeSection === tabs[0]}
					onClick={() => onClickPopup(tabs[0])}
				/>
				<Tab
					number={2}
					isActive={activeSection === tabs[1]}
					name="Projects"
					onClick={() => onClickPopup(tabs[1])}
				/>
				<Tab
					number={3}
					name="Pictures"
					onClick={() => onClickRedirect(PICTURES_ROUTE)}
				/>
				<Tab
					number={4}
					name="Blog"
					onClick={() => onClickRedirect(BLOG_ROUTE)}
				/>
			</div>
			<div id="right-container">{renderRightPanel()}</div>
		</div>
	);
}
