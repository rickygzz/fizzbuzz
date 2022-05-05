class ExplorerService
{
    static filterByMission(explorers, mission)
    {
        return explorers.filter(
            (explorer) => explorer.mission == mission
        );
    }

    static getAmountOfExplorersByMission(explorers, mission)
    {
        const amountOfExplorers = explorers.filter(
            (explorer) => explorer.mission == mission
        );

        return amountOfExplorers.length;
    }

    static getExplorersUsernamesByMission(explorers, mission)
    {
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        
        return explorersInNodeToGetUsernames.map(
            (explorer) => explorer.githubUsername
        );
    }
}

module.exports = ExplorerService;