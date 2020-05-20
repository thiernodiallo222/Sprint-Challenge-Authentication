module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: '../Sprint-Challenge-Authentication/seeds' },
  },
  //   testing: {
  //   client: 'sqlite3',
  //   connection: { filename: '' },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations',
  //   },

  //     seeds: { directory: '../Sprint-Challenge-Authentication/seeds' },
  // },
};
