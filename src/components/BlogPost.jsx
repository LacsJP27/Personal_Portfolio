import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../data/data.js';
import { BLOG_ROUTE } from '../constants/constants.js';
import BackBtn from './BackBtn.jsx';
import '../styles/BlogPost.css';

export default function BlogPost() {
	const { slug } = useParams();
	const post = BLOG_POSTS.find((p) => p.slug === slug);

	if (!post) return <div>post not found</div>;

	return (
		<div className="blog-post-container">
			<BackBtn route={BLOG_ROUTE} />
			<div id="blog-title">JP's Blog</div>
			<div className="blog-post-content">
				<ReactMarkdown>{post.content}</ReactMarkdown>
			</div>
		</div>
	);
}
