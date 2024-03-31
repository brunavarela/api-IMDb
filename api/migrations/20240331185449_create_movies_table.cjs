exports.up = function (knex) {
  return knex.schema.createTable("movies", function (table) {
    table.uuid("movie_id").primary();
    table.string("title", 255).notNullable();
    table.string("director", 255).notNullable();
    table.string("cast", 500).notNullable();
    table.string("genre", 255).notNullable();
    table.string("resume", 500).notNullable();
    table.string("image");
    table.integer("rating");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};