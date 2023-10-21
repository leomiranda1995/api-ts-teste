import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const connectionString = 'postgres://root:root@localhost:5432/agendaai';
const db = pgp(connectionString);

export default db;