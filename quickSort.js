/*
 * 퀵정렬
 */

var result = [];

var quickSort = (array, left, right, pivotIndex) => {

    console.log(`insert Array: ${array}`);

    if(isEmptyOROne(array)) {
        return array;
    }

    if((pivotIndex <= 0) || (right <= 0) || (left>=right) || (pivotIndex >= array.length-1)) {
        return array;
    }

    if(!left) left = 0;
    if(!right) right = array.length - 2;
    if(!pivotIndex) pivotIndex = array.length - 1;

    let pivot = array[pivotIndex];

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
        
        if(!(left==right)) {            
            array = changeArrayValByIndex(array, left, right);
            console.log(`[changeArrayValByIndex]: ${array}`);
        }
    }

    array = insertValInArrayWithIndex(array, left, pivot);

    console.log(`[insertValInArrayWithIndex]: ${array}`);

    array.splice(pivotIndex+1, 1);

    console.log(`[splice]: ${array}`);

    quickSort(array, 0, left-2, left-1);
    quickSort(array, left+1, array.length-2, array.length-1);

}
