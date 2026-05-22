import BackBtn from './BackBtn.jsx';
import { PICTURES } from '../data/data.js';
import PictureItem from './PictureItem.jsx';
import '../styles/Pictures.css';

export default function Pictures() {
	return (
		<>
			<BackBtn />
			<div className="pictures-container">
				<span id="pictures-title">Pictures</span>

				<div id="picture-list">
					{PICTURES.map((picture) => (
						<PictureItem key={picture.title} picture={picture} />
					))}
				</div>
			</div>
		</>
	);
}
