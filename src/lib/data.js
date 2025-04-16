// const users = [
// 	{ id: '01JRGWT3XH1HJP75QH98XYAX70', name: 'John Doe' },
// 	{ id: '01JRGWT4KAX9JY0QWT4TQRSHPT', name: 'Jeen Rafter' },
// ];

import { Post, User } from './models';
import { connectDb } from './utils';

// const posts = [
// 	{
// 		id: 1,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Tuesdays with Morrie',
// 		body: 'Fracture of unspecified phalanx of right thumb, subsequent encounter for fracture with malunion',
// 	},
// 	{
// 		id: 2,
// 		userId: '01JRGWT4KAX9JY0QWT4TQRSHPT',
// 		title: 'Sunshine',
// 		body: 'Displaced fracture of medial phalanx of unspecified finger, initial encounter for closed fracture',
// 	},
// 	{
// 		id: 3,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Day of the Animals',
// 		body: 'Corrosion of unspecified degree of multiple left fingers (nail), including thumb, sequela',
// 	},
// 	{
// 		id: 4,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Fly II, The',
// 		body: 'Other nonpowered-aircraft accidents injuring occupant, initial encounter',
// 	},
// 	{
// 		id: 5,
// 		userId: '01JRGWT4KAX9JY0QWT4TQRSHPT',
// 		title: 'Extreme Justice',
// 		body: 'Nondisplaced subtrochanteric fracture of left femur, subsequent encounter for closed fracture with delayed healing',
// 	},
// 	{
// 		id: 6,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Finances of the Grand Duke, The (Die Finanzen des Großherzogs)',
// 		body: 'Osteitis deformans in neoplastic diseases, left hand',
// 	},
// 	{
// 		id: 7,
// 		userId: '01JRGWT4KAX9JY0QWT4TQRSHPT',
// 		title: 'Incredible Rocky Mountain Race',
// 		body: 'Maple-syrup-urine disease',
// 	},
// 	{
// 		id: 8,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Jarhead 2: Field of Fire',
// 		body: 'Subluxation of proximal interphalangeal joint of right thumb, sequela',
// 	},
// 	{
// 		id: 9,
// 		userId: '01JRGWT3XH1HJP75QH98XYAX70',
// 		title: 'Carol for Another Christmas',
// 		body: 'Injury of ulnar nerve at wrist and hand level of unspecified arm, subsequent encounter',
// 	},
// 	{
// 		id: 10,
// 		userId: '01JRGWT4KAX9JY0QWT4TQRSHPT',
// 		title: 'My Brother Tom',
// 		body: 'Unstable burst fracture of unspecified thoracic vertebra, initial encounter for closed fracture',
// 	},
// ];

export const getPosts = async () => {
	try {
		connectDb();
		const posts = await Post.find();
		return posts;
	} catch (error) {
		console.log('Error:', error);
	}
};

export const getPost = async (slug) => {
	try {
		connectDb();
		const post = await Post.findOne({ slug: slug });
		return post;
	} catch (error) {
		console.log('Error:', error);
	}
};

export const getUser = async (id) => {
	try {
		connectDb();
		const user = await User.findById(id);
		return user;
	} catch (error) {
		console.log('Error:', error);
	}
};

export const getUsers = async () => {
	try {
		connectDb();
		const users = await Post.find();
		return users;
	} catch (error) {
		console.log('Error:', error);
	}
};
