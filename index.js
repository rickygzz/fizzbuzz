const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
// esto regresa la lista de explorers del archivo

// console.log(explorers);

const ExplorerService = require("./lib/services/ExplorerService")

// Aplicación del ExplorerService sobre la lista de explorers
filtered = ExplorerService.filterByMission(explorers, "node");
amount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// console.log(filtered);
// console.log(amount);
// console.log(usernames);

const FizzbuzzService = require("./lib/services/FizzbuzzService")


const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

console.log(explorer1);
console.log(explorer3);
console.log(explorer5);
console.log(explorer15);