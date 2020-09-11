exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Sit in front of computer",
          completed: true,
          project_id: 1,
          resource_id: 2,
        },
        {
          description: "Open VSCode",
          completed: true,
          project_id: 1,
          resource_id: 3,
        },
        {
          description: "Make tables using migrations",
          completed: true,
          project_id: 1,
        },
        {
          description: "Walk in front of shed",
          project_id: 2,
          resource_id: 1,
        },
        {
          description: "Open paint",
          project_id: 2,
          resource_id: 4,
        },
        {
          description: "Using paintbrush, paint the shed",
          project_id: 2,
          resource_id: 5,
        },
        {
          description: "Sit at table",
          project_id: 3,
          resource_id: 7,
        },
        {
          description: "Eat pizza",
          project_id: 3,
          resource_id: 6,
        },
      ]);
    });
};
