import { __prod__ } from './utils';

export * from './cloudinary';
export * from './token';
export * from './routes';
export * from './utils';
export * from './limits';

export const MONGODB_URI = process.env.MONGODB_URL as string;
export const DOMAIN = "https://sm-instagram.vercel.app"


// __prod__ ? process.env.NEXT_PUBLIC_DOMAIN : 'http://localhost:3000';
