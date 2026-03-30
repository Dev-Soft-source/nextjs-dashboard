import postgres from 'postgres';

const url = process.env.POSTGRES_URL!;
const isLocalHost = url.includes('localhost') || url.includes('127.0.0.1');

const globalForSql = globalThis as unknown as {
  sql: ReturnType<typeof postgres> | undefined;
};

function createClient() {
  return postgres(url, {
    ssl: isLocalHost ? false : 'require',
    connect_timeout: 30,
    max: 10,
  });
}

export const sql = globalForSql.sql ?? createClient();

if (process.env.NODE_ENV !== 'production') {
  globalForSql.sql = sql;
}
