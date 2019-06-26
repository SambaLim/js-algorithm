/*
 * 퀵정렬
 */
var quickSort = (array, left, right) => {

    console.log(`insert Array: ${array}`);

    if(isEmptyOROne(array)) {
        return array;
    }

    if(!left) left = 0;
    if(!right) right = array.length - 1;
    let pivotIndex = right;

    pivotIndex = partition(array, left, right-1, pivotIndex);

    console.log(`After Partition: ${array}`);

    if(left < pivotIndex - 1) {
        quickSort(array, left, pivotIndex-1);
    }
    if(pivotIndex + 1 < right) {
        quickSort(array, pivotIndex + 1, array.length - 1)
    }

    return array;
}

var partition = (array, left, right, pivotIndex) => {
    let pivot = array[pivotIndex];

    while(left <= right) {
        while(array[left] < pivot) left++;
        while(array[right] > pivot) right--;

        if(left <= right) {
            array = changeArrayValByIndex(array, left, right);
            left++;
            right--;
        }
    }

    array = changeArrayValByIndex(array, left, pivotIndex);
    return left;
}
