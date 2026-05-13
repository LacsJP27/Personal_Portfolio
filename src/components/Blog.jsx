import { BLOG_POSTS } from '../data/data.js';
import BackBtn from './BackBtn.jsx';
import BlogPost from './BlogPost.jsx';

export default function Blog() {
	return (
		<>
			<BackBtn />
			<h1>Test</h1>
			{BLOG_POSTS.map((post) => (
				<BlogPost key={post.title} post={post} />
			))}
		</>
	);
}
