exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments();
      table.string("project_name").notNullable();
      table.string("description");
      table.bool("completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments();
      table.string("resource_name").notNullable();
      table.string("description");
    })
    .createTable("tasks", (table) => {
      table.increments();
      table.string("description").notNullable();
      table.string("notes");
      table.bool("completed").defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
