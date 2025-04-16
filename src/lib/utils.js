import mongoose from 'mongoose';

const connection = {};

export const connectDb = async () => {
	try {
		if (connection.isConnected) {
			console.log('Existing Database connected');
			return true;
		}

		const DB = await mongoose.connect(process.env.MONGO_URI);

		connection.isConnected = DB.connections[0].readyState;
		console.log('MongoDBconnected');
	} catch (error) {
		console.log('Error:', error);
	}
};
