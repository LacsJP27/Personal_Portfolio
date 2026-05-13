export default function PictureItem({ picture }) {
	return (
		<div className="picture-item">
			<img src={picture.image} alt={picture.title} />
			<p>{picture.title}</p>
		</div>
	);
}
