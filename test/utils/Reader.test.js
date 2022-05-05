const Reader = require("../../lib/utils/Reader");

describe("Tests para Reader", () => 
{
    test("Requerimiento 1: Leer archivo", () => {
        const explorers = Reader.readJsonFile("./explorers.json");

        expect(explorers.length).toBe(15);
    });
});