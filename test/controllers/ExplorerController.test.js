const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => 
{
    test("Requerimiento: getExplorersByMission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });

    test("Requerimiento: getExplorersUsernamesByMission", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("Requerimiento: getExplorersAmountByMission", () => {
        const usernamesInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(usernamesInNode).toStrictEqual(10);
    });

    test("Requerimiento: getExplorersAmountByMission", () => {
        const usernamesInNode = ExplorerController.getExplorersAmountByMission("java");
        expect(usernamesInNode).toStrictEqual(5);
    });
});