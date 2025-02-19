    function SumAndProductInMatrix(matrix) {
    let rowSum = 0;
    let colProduct = 1;

    for (let i = 0; i < matrix.length; i++) {
        let maxInRow = Math.max(...matrix[i]);
        rowSum += maxInRow;

        let minInCol = Infinity;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[j][i] < minInCol) {
                minInCol = matrix[j][i];
            }
        }
        colProduct *= minInCol;
    }
    return  {rowSum , colProduct};
}

function CreateRandomMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let ratio = Math.random() < 0.5 ? -1 : 1;
            row.push(Math.floor(Math.random() * 100 * ratio));
        }
        matrix.push(row);
    }
    return matrix;
}

function PrintMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

function FourteenDisplayInfo() {
    const rows = document.getElementById("FourteenInput1").value;
    const cols = document.getElementById("FourteenInput2").value;
    console.log("Четырнадцатое задание");
    let arr = CreateRandomMatrix(rows,cols);
    console.log("Данная мтрица:");
    PrintMatrix(arr);

    let result = SumAndProductInMatrix(arr);

    console.log("Сумма наибольших значений строк:", result.rowSum);
    console.log("Произведение наименьших значений столбцов:", result.colProduct);

}