/*
 * 퀵정렬
 */

var quickSort = (array) => {

    let pivotIndex = array.length - 1;

    if(isEmptyOROne(array)) {
        return array;
    }

    return partition(array, pivotIndex);


}

var partition = (array, pivotIndex) => {

    if(isEmptyOROne(array)) {
        return array;
    }
    
    // pivot
    let pivotVal = array[pivotIndex];
    // 좌, 우로 나눔
    let leftSide = [], rightSide = [];

    rightSide.push(pivotVal);

    for(i=0; i<array.length-1;i++) {

        if(array[i] < pivotVal) {
            leftSide.push(array[i]);
        } else {
            rightSide.push(array[i]);
        }

    }

    return partition(leftSide, leftSide.length-1);
}