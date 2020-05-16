export const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let midIdx = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIdx);
    let right = arr.slice(midIdx);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
}

const merge = (arr1, arr2) => {
    let merged = [];

    while (arr1.length || arr2.length) {
        let ele1 = arr1.length ? arr1[0] : Infinity;
        let ele2 = arr2.length ? arr2[0] : Infinity;

        let nextEle;
        if (ele1 < ele2) {
            nextEle = arr1.shift();
        } else {
            nextEle = arr2.shift();
        };

        merged.push(nextEle);
    }
    return merged;
}