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

// Stretch
function getProjectTasks(id) {
  return db("tasks").where({ project_id: id });
}

function getProjectResources(id) {
  return db("tasks")
    .join("resources", "tasks.resource_id", "resources.id")
    .select("resources.resource_name")
    .where({ project_id: id });
}

function getAllProjectsUsingResource(id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("projects.project_name")
    .where({ resource_id: id });
}

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
  getProjectTasks,
  getProjectResources,
  getAllProjectsUsingResource,
};
