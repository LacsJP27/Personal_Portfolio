export default function BlogPost({ post }) {
	return (
		<div className="blog-post">
			<h2>{post.title}</h2>
			<p>{post.text}</p>
		</div>
	);
}
