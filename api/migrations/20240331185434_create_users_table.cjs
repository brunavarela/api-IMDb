exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("user_id").primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
    table.boolean("isAdmin").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};