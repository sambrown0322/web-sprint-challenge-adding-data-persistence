exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "Myself" },
        { resource_name: "Computer" },
        { resource_name: "VSCode" },
        { resource_name: "Paint" },
        { resource_name: "Paintbrush" },
        { resource_name: "Pizza" },
        { resource_name: "Table" },
      ]);
    });
};
