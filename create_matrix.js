function createMatrix(rows, cols) {
    const matrix = [];
    for (let row = 0; row < rows; row++) {
        const rowArray = []
        for (let col = 0; col < cols; col++) {
            rowArray.push(Math.round(Math.random() * 10));
        }
        matrix.push(rowArray)
    }  
    return matrix
}

console.log(createMatrix(4, 4))