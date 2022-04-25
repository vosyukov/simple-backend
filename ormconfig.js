const { env } = process;

const options = {
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    entities: [__dirname+ '/**/entities/*.js'],
    synchronize: true,
    migrations: [__dirname+ '/**/migrations/*.js'],
    logging: true,
    connectTimeout: 30000,
    cli: { migrationsDir: 'migrations' },
};

module.exports = options;