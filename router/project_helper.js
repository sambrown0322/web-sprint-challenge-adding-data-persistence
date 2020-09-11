const db = require("../data/db-config");

function getProjects() {
  return db("projects"); //CHANGE321
}

function addProject(project) {
  //CHANGE321
  return db("projects") //CHANGE321
    .insert(project); //CHANGE321
}

function findById(id) {
  return db("[TABLE]").where({ id }).first(); //CHANGE321
}

function getResources() {
  return db("resources"); //CHANGE321
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function getTasks() {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select(
      "tasks.id",
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "tasks.project_id",
      "tasks.resource_id",
      "projects.project_name",
      "projects.description as project_description"
    );
}

function addTask(task) {
  return db("tasks").insert(task);
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
};
