import { Post } from '@/lib/models';
import { connectDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
	const { slug } = params;
	try {
		connectDb();

		const post = await Post.findOne({ slug: slug });
		return NextResponse.json(post);
	} catch (error) {
		throw new Error('Error');
	}
};

export const DELETE = async (request, { params }) => {
	const { slug } = params;
	try {
		connectDb();

		await Post.deleteOne({ slug: slug });
		return NextResponse.json('Post Deleted');
	} catch (error) {
		throw new Error('Error');
	}
};
