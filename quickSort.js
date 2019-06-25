/*
 * 퀵정렬
 */

var quickSort = (array, left, right) => {

    console.log(`insert Array: ${array}`);
    if(isEmptyOROne(array)) {
        return array;
    }

    let leftArray, rightArray, result;
    let pivotIndex = array.length - 1;
    let pivot = array[pivotIndex];
    let temp;

    if(!left) left = 0;
    if(!right) right = pivotIndex;

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

    leftArray = array.slice(0, left);
    rightArray = array.slice(left, array.length);

    quickSort(leftArray)
    quickSort(rightArray)
}