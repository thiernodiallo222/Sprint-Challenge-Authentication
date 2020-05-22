module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/users.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
    testing: {
    client: 'sqlite3',
    connection: { filename: './database/users-test.db3'},
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
      seeds: { directory: './database/seeds' },
  },
};
