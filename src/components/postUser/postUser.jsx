//import { getUser } from '@/lib/data';
import { getUser } from '@/lib/data';
import styles from './postUser.module.css';
import Image from 'next/image';

// FETCH DATA WITH AN API
// const getData = async (userId) => {
// 	// const res = await fetch(
// 	// 	`https://jsonplaceholder.typicode.com/users/${userId}`,
// 	// 	{ cache: 'no-store' }
// 	// );

// 	// if (!res.ok) {
// 	// 	throw new Error('Something went wrong');
// 	// }

// 	// return res.json();
// 	return {
// 		id: 5,
// 		title: 'Post5345345345345345',
// 		body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.5345345',
// 		img: 'https://media.istockphoto.com/id/2164764645/photo/students-giving-exam-test-in-university.jpg?s=1024x1024&w=is&k=20&c=TqtlGrsm31v-29sO1ZhkuB8aji23exrq12M-GtKBoTA=',
// 		slug: 5,
// 		username: 'rumor',
// 	};
// };

const PostUser = async ({ userId }) => {
	// FETCH DATA WITH AN API
	// const user = await getData(userId);

	// FETCH DATA WITHOUT AN API
	const user = await getUser(userId);
	// console.log(user);
	return (
		<div className={styles.container}>
			<Image
				className={styles.avatar}
				src={user?.img ? user.img : '/noavatar.png'}
				alt=''
				width={50}
				height={50}
			/>
			<div className={styles.texts}>
				<span className={styles.title}>Author</span>
				<span className={styles.username}>{user?.username || ''}</span>
			</div>
		</div>
	);
};

export default PostUser;
