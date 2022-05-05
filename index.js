const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
// esto regresa la lista de explorers del archivo

// console.log(explorers);

const ExplorerService = require("./lib/services/ExplorerService")

// Aplicación del ExplorerService sobre la lista de explorers
filtered = ExplorerService.filterByMission(explorers, "node");
amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(filtered);
console.log(amount);
console.log(usernames);