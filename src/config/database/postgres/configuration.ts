import { registerAs } from '@nestjs/config';
export default registerAs('postgres', () => ({
	type: process.env.POSTGRES_TYPE,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DATABASE,
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
}));
