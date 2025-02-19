function FindMedian(arr1, arr2) {
    let combined = arr1.concat(arr2).sort();
    let lenght = combined.length;
    console.log(combined);

    if (lenght % 2 === 0) {
        mid1 = combined[lenght / 2 - 1];
        mid2 = combined[lenght / 2];
        return (mid1 + mid2) / 2;
    } else {
        return combined[lenght / 2];
    }
}

function NineDisplayInfo() {
    console.log("Восьмое заданиe");
    let arr1 = [1, 2, 5, 4, 6];
    let arr2 = [8, 2, 5, 9, 5];
    console.log(arr1);
    console.log(arr2);
    console.log(`Медиана двух масcивов одновременно: ${FindMedian(arr1, arr2)}`);
}

