import Image from 'next/image';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { Suspense } from 'react';
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
	// const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

	// if (!res.ok) {
	//   throw new Error("Something went wrong");
	// }

	// return res.json();

	return {
		userId: 5,
		title: 'Post5345345345345345',
		body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.5345345',
		img: 'https://media.istockphoto.com/id/2164764645/photo/students-giving-exam-test-in-university.jpg?s=1024x1024&w=is&k=20&c=TqtlGrsm31v-29sO1ZhkuB8aji23exrq12M-GtKBoTA=',
		slug: 5,
		username: 'rumor',
		createdAt: new Date(),
	};
};

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
	const { slug } = params;

	// FETCH DATA WITH AN API
	const post = await getData(slug);

	// FETCH DATA WITHOUT AN API
	// const post = await getPost(slug);

	return (
		<div className={styles.container}>
			{post.img && (
				<div className={styles.imgContainer}>
					<Image src={post.img} alt='' fill className={styles.img} />
				</div>
			)}
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.detail}>
					{post && (
						<Suspense fallback={<div>Loading...</div>}>
							<PostUser userId={post.userId} />
						</Suspense>
					)}
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>
							{post.createdAt && post.createdAt.toString().slice(4, 16)}
						</span>
					</div>
				</div>
				<div className={styles.content}>{post.body}</div>
			</div>
		</div>
	);
};

export default SinglePostPage;
