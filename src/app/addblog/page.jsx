import { addBlog, deleteBlog } from '@/lib/actions';
const addPost = () => {
	return (
		<div>
			<form action={addBlog}>
				<input type='text' placeholder='title' name='title' />
				<input type='text' placeholder='description' name='description' />
				<input type='text' placeholder='slug' name='slug' />
				<input type='text' placeholder='userId' name='userId' />
				<button>Save</button>
			</form>

			<form action={deleteBlog}>
				<input type='text' placeholder='postId' name='id' />
				<button>Delete</button>
			</form>
		</div>
	);
};

export default addPost;
