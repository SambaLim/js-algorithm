/*
 * 합병정렬
 */

var mergeSort = (array) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    let pivot = array.length/2;
    let leftSide = array.slice(0, pivot);
    let rightSide = array.slice(pivot, array.length);
}

var merge = (leftSide, rightSide) => {
    let result = [];
    
}