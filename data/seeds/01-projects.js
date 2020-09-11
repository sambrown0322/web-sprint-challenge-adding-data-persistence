exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "Set up tables", completed: true },
        { project_name: "Paint shed" },
        { project_name: "Eat" },
      ]);
    });
};
