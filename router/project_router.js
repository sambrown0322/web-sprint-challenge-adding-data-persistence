const express = require("express");

const project = require("./project_helper"); //CHANGE321

const router = express.Router();

router.get("/", (req, res) => {
  project
    .getProjects()
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  project
    .getProjectTasks(id)
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id/resources", (req, res) => {
  const id = req.params.id;
  project
    .getProjectResources(id)
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id/projects", (req, res) => {
  const id = req.params.id;
  project
    .getAllProjectsUsingResource(id)
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/resources", (req, res) => {
  project
    .getResources()
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/tasks", (req, res) => {
  project
    .getTasks()
    .then((rez) => {
      res.status(200).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  project
    .addProject(projectData)
    .then((rez) => {
      res.status(201).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;
  project
    .addResource(resourceData)
    .then((rez) => {
      res.status(201).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;
  project
    .addTask(taskData)
    .then((rez) => {
      res.status(201).json(rez);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.put("/:id", (req, res) => {
//   res.status(200).json({ msg: "working" });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ msg: "working" });
// });

module.exports = router;
