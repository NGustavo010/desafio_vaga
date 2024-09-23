import dotenv from 'dotenv';

dotenv.config();

export default {
	port: process.env.PORT ?? 3333,
	mongoDbUri: process.env.MONGODB_URI ?? 'mongodb://localhost:27017',
	mongoDbUser: process.env.MONGODB_USER ?? 'root',
	mongoDbPassword: process.env.MONGODB_PASSWORD ?? 'pass',
};
