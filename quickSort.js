/*
 * 퀵정렬
 */

var result = [];

var quickSort = (array, left, right, pivotIndex) => {

    console.log(`insert Array: ${array}`);

    if(isEmptyOROne(array)) {
        result.push(array[0]);
        return array;
    }

    let pivotIndex = array.length - 1;
    let pivot = array[pivotIndex];

    if(!left) left = 0;
    if(!right) right = array.length - 1;

    while(left < right) {
        for(left; left < pivotIndex; left++) {

            if(array[left] > pivot) {
                break;
            }
        }
    
        for(right; right > left; right--) {
    
            if(array[right] < pivot) {
                break;
            }
        }
    
        array = changeArrayValByIndex(array, left, right);
    }

    array = insertValInArrayWithIndex(array.slice(0, array.length-1), left, pivot);
}

var partition = (array) => {

    let leftArray, rightArray;

    leftArray = array.slice(0, left);
    rightArray = array.slice(left, array.length);

    quickSort(leftArray);
    quickSort(rightArray);
}