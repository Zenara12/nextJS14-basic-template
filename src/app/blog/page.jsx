import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';

// FETCH DATA WITH AN API
// const getData = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 		next: { revalidate: 3600 },
// 	});

// 	if (!res.ok) {
// 		throw new Error('Something went wrong');
// 	}

// 	return res.json();
// };

const BlogPage = async () => {
	// FETCH DATA WITH AN API
	// const posts = await getData();

	// FETCH DATA WITHOUT AN API
	const posts = await getPosts();

	return (
		<div className={styles.container}>
			{posts && posts.length > 0
				? posts.map((post, index) => (
						<div className={styles.post} key={index}>
							<PostCard post={post} />
						</div>
				  ))
				: 'No Post'}
		</div>
	);
};

export default BlogPage;
