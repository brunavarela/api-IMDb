import Knex from "knex";

const knex = Knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "brunadev12",
    database: "api-imdb",
  },
});

export default knex;
