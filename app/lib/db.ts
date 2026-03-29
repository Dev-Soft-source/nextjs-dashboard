import postgres from 'postgres';

const url = process.env.POSTGRES_URL!;
const isLocalHost =
  url.includes('localhost') || url.includes('127.0.0.1');

export const sql = postgres(url, {
  ssl: isLocalHost ? false : 'require',
});
