/*
    This code creates represents the paths between each planet as graph adjacency list,
    it then traverses the graph using breath first search to find a route between user specified
    start and endpoints.
*/
const useRouteBetweenPlanets = (from, to) => {
    const planets =
        'Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune'.split(' ');
    const routes = [
        ['Mercury', 'Venus'],
        ['Venus', 'Earth'],
        ['Venus', 'Mercury'],
        ['Earth', 'Jupiter'],
        ['Earth', 'Uranus'],
        ['Mars', 'Venus'],
        ['Jupiter', 'Mars'],
        ['Jupiter', 'Venus'],
        ['Saturn', 'Earth'],
        ['Saturn', 'Neptune'],
        ['Uranus', 'Saturn'],
        ['Uranus', 'Neptune'],
        ['Neptune', 'Uranus'],
        ['Neptune', 'Mercury'],
    ];
    //graph
    const adjacencyList = new Map();

    const addNode = (planet) => {
        adjacencyList.set(planet, []);
    };

    const addEdge = (start, destination) => {
        adjacencyList.get(start).push(destination);
    };

    planets.forEach(addNode);
    routes.forEach((route) => addEdge(...route));

    const reconstructPath = (start, end, parent) => {
        const path = [end];
        while (path.at(-1) !== start) {
            path.push(parent[path.at(-1)]);
        }

        path.reverse();
        return path;
    };
    const bfs = (start, end) => {
        const visited = new Set();
        const queue = [start];
        const parent = {};
        while (queue.length > 0) {
            const planet = queue.shift();
            const destinations = adjacencyList.get(planet);

            if (planet === end) {
                return reconstructPath(start, end, parent);
            }
            for (const destination of destinations) {
                if (!visited.has(destination)) {
                    visited.add(destination);
                    parent[destination] = planet;
                    queue.push(destination);
                }
            }
        }
    };
    const route = bfs(from, to);

    return route;
};
export default useRouteBetweenPlanets;
