function CalculatingPerimeter(coords) {
    console.log(coords);

    if (coords.length % 2 !== 0) {
        alert("Колличество координат должно быть четным!");
        return;
    }

    const vertexes = [];
    for (let i = 0; i < coords.length; i += 2) {
        vertexes.push([coords[i], coords[i + 1]]);
    }

    console.log(vertexes.length);

    let perimeter = 0;
    for (let i = 0; i < vertexes.length; i += 1) {
        if (vertexes[i] !== undefined) {
            console.log(vertexes[i]);
        }
        const x1 = vertexes[i][0];
        const y1 = vertexes[i][1];
        const x2 = vertexes[(i + 1) % vertexes.length][0];
        const y2 = vertexes[(i + 1) % vertexes.length][1];
        const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        perimeter += distance;
    }

    return perimeter;
}

function SixDisplayInfo() {
    const xInputs = document.querySelectorAll(".x");
    const yInputs = document.querySelectorAll(".y");
    const coords = [];

    xInputs.forEach((input,index) => {
        const x = parseFloat(input.value);
        const y = parseFloat(yInputs[index].value);
        if (!isNaN(x) && !isNaN(y)) {
            coords.push(x, y);
        }
    })

    if (coords.length < 4) {
        alert("Введите координаты как минимум двух вершин!");
        return;
    }

    try {
        const perimeter = CalculatingPerimeter(coords);
        document.getElementById("SixOutput").textContent = `Периметр n-угольника: ${perimeter}`
    } catch (e) {
        alert(e.message);
    }


}

function SixAddInput() {
    const inputDiv = document.getElementById("SixInputs");
    const newInputs = document.createElement("div");
    newInputs.innerHTML = `
        <label>Вершина: ${inputDiv.children.length + 1}</label>
        <input type="number" class="x" placeholder="x">
        <input type="number" class="y" placeholder="y">
    `
    inputDiv.appendChild(newInputs);
}

SixAddInput();
SixAddInput();