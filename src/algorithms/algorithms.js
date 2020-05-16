export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

///////////////////////////////////////////////////////////////////////////////

// export const mergeSort = array => {
//     if (array.length === 1) return array;

//     const midIdx = Math.floor(array.length / 2);
//     const left = mergeSort(array.slice(0, midIdx));
//     const right = mergeSort(array.slice(midIdx));
//     const sortedArray = [];
//     let i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[i]) {
//             sortedArray.push(left[i++]);
//         } else {
//             sortedArray.push(right[j++]);
//         };
//     };

//     while (i < left.length) sortedArray.push(left[i++]);
//     while (i < right.length) sortedArray.push(right[j++]);
//     return sortedArray;
// }

///////////////////////////////////////////////////////////////////////////////

// export const mergeSort = (arr) => {
//     if (arr.length <= 1) return arr;

//     let midIdx = Math.floor(arr.length / 2);
//     let left = arr.slice(0, midIdx);
//     let right = arr.slice(midIdx);

//     let leftSorted = mergeSort(left);
//     let rightSorted = mergeSort(right);

//     return merge(leftSorted, rightSorted);
// }

// const merge = (arr1, arr2) => {
//     let merged = [];

//     while (arr1.length || arr2.length) {
//         let ele1 = arr1.length ? arr1[0] : Infinity;
//         let ele2 = arr2.length ? arr2[0] : Infinity;

//         let nextEle;
//         if (ele1 < ele2) {
//             nextEle = arr1.shift();
//         } else {
//             nextEle = arr2.shift();
//         };

//         merged.push(nextEle);
//     }
//     return merged;
// }