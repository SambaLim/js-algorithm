/*
 * 퀵정렬
 */

var quickSort = (array) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    let left = 0, right;
    let leftArray, rightArray, result;
    let pivotIndex = array.length - 1;
    let pivot = array[pivotIndex];
    let temp;

    right = pivotIndex;

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
    
    return insertValInArrayWithIndex(array, left, pivot);


}