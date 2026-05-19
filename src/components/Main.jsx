import Tab from './Tab';
import Cube from './Cube';
import Experience from './Experience';
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

	const onClickRedirect = (path) => {
		navigate(path);
	};

	const onClickPopup = () => {
		if (displayExperience) {
			setDisplayExperience(!displayExperience);
			return;
		}
		setShouldExplode(true);
	};

	const onExplosionComplete = () => {
		setShouldExplode(false);
		setDisplayExperience(!displayExperience);
	};

	return (
		<div id="main">
			<div id="tabs">
				<Tab
					number={1}
					name="Experience"
					isActive={displayExperience}
					onClick={onClickPopup}
				/>
				<Tab
					number={2}
					name="Projects"
					onClick={() => onClickRedirect(PROJECTS_ROUTE)}
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
			<div id="right-container">
				{displayExperience ? (
					<Experience setDisplay={setDisplayExperience} />
				) : (
					<div id="cube-container">
						<Cube
							shouldExplode={shouldExplode}
							onExplosionComplete={onExplosionComplete}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
