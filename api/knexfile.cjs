/**
 * @type { import("knex").Config }
 */

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "brunadev12",
      database: "api-imdb",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "brunadev12",
      database: "api-imdb",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "brunadev12",
      database: "api-imdb",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
