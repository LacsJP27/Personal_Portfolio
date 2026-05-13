import BackBtn from './BackBtn.jsx';
import { PICTURES } from '../data/data.js';
import PictureItem from './PictureItem.jsx';

export default function Pictures() {
	const pictures = PICTURES;
	return (
		<>
			<BackBtn />
			<h1>Pictures</h1>
			<div className="pictures-container">
				{pictures.map((picture) => (
					<PictureItem key={picture.title} picture={picture} />
				))}
			</div>
		</>
	);
}
