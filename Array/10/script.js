function SwapMinMax(arr) {
    let maxIndex = arr.indexOf(Math.max(...arr));
    let minIndex = arr.indexOf(Math.min(...arr));

    [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];

    return arr;
}

function TenDisplayInfo() {
    output = document.getElementById("TenOutput");
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    output.innerHTML = '';
    output.innerHTML += `<p>Изначальный массив: ${arr.join(", ")}</p>`;
    output.innerHTML += `<p>Измененный массив: ${SwapMinMax(arr).join(", ")}</p>`;
}
