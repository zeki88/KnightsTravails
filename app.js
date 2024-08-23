function knightMoves(startIndex, endIndex) {
    // Movimientos posibles del caballo
    const posiblesMovimientos = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // BFS
    const bfs = (startIndex, endIndex) => {
        const queue = [[startIndex]];
        const visited = new Set();
        visited.add(startIndex.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === endIndex[0] && y === endIndex[1]) {
                return path;
            }

            for (const [dx, dy] of posiblesMovimientos) {
                const newX = x + dx;
                const newY = y + dy;
                const newIndex = [newX, newY];

                if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(newIndex.toString())) {
                    visited.add(newIndex.toString());
                    queue.push([...path, newIndex]);
                }
            }
        }

        return null; 
    };

    const path = bfs(startIndex, endIndex);

    console.log(`El caballo llega de [${startIndex}] a [${endIndex}] en ${path.length - 1} movimientos:`, path);


    return path;
}

knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);

