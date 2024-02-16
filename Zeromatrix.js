/*Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.*/

function zeroMatrix(matrix){
    const rows = matrix.length
    const cols = matrix[0].length
    const zeroRows = new Set()
    const zeroCols = new Set()

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j]===0){
                zeroRows.add(i)
                zeroCols.add(j)
            }
        }
    }

    zeroRows.forEach(rows=>{
        for(let j = 0; j < cols; j++){
            matrix[rows][j] = 0
        }
    })

    zeroCols.forEach(rows=>{
        for(let i = 0; i < rows; i++){
            matrix[i][cols] = 0
        }
    })

    console.log(matrix)
}

zeroMatrix([
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
]);
