import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';
import { formatDate } from '@/lib/formatdate';

const PostCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && (
					<div className={styles.imgContainer}>
						<Image src={post.img} alt='' fill className={styles.img} />
					</div>
				)}
				{/* <div className={styles.imgContainer}>
					<Image
						src={`https://media.istockphoto.com/id/2164764645/photo/students-giving-exam-test-in-university.jpg?s=1024x1024&w=is&k=20&c=TqtlGrsm31v-29sO1ZhkuB8aji23exrq12M-GtKBoTA=`}
						alt=''
						fill
						className={styles.img}
					/>
				</div> */}
				<span className={styles.date}>
					{post?.createdAt && formatDate(post?.createdAt)}
				</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.body}</p>
				<Link className={styles.link} href={`/blog/${post.slug}`}>
					READ MORE
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
