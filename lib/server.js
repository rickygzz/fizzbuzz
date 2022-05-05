// Usando objeto express
const express = require("express");

// App de Express
const app = express();

// Controllers
const ExplorerController = require("./controllers/ExplorerController");

// Use json
app.use(express.json());

// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// Path inicial, responderá a la url localhost:3000
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log("FizzBuzz API in localhost:" + port);
});