import { BLOG_POSTS } from '../data/data.js';
import { BLOG_POST_ROUTE } from '../constants/constants.js';
import BackBtn from './BackBtn.jsx';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

export default function Blog() {
	return (
		<>
			<BackBtn route={'/'} />
			<div id="blog-container">
				<div id="blog-title">JP's Blog</div>
				<div id="blog-list">
					{BLOG_POSTS.map((post) => (
						<div className="blog-post" key={post.slug}>
							<div className="blog-post-date">{post.date}</div>
							<div className="blog-post-title">
								<Link to={`/blog/${post.slug}`} post={post}>
									{post.title}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
