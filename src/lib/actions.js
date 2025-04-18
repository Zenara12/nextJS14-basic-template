'use server';
import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectDb } from './utils';

export const addBlog = async (formData) => {
	const { title, description, slug, userId } = Object.fromEntries(formData);
	console.log(title, description, slug, userId);
	try {
		connectDb();
		const newPost = new Post({
			title,
			description,
			slug,
			userId,
		});

		const res = await newPost.save();
		res ? console.log('Post created') : console.log('Error');
		revalidatePath('/blog');
	} catch (error) {
		console.error('Error:', error);
		return { error: 'Something went wrong' };
	}
};

export const deleteBlog = async (formData) => {
	const { id } = Object.fromEntries(formData);
	try {
		connectDb();
		await Post.findByIdAndDelete(id);
		revalidatePath('/blog');
	} catch (error) {
		console.error('Error:', error);
		return { error: 'Something went wrong' };
	}
};
