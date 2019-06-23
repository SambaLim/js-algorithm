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

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

var merge = (leftSide, rightSide) => {
    let result = [];
    
    while(leftSide.length == rightSide.length) {

        // 비교 후, 작은 수 부터 결과에 넣어줌
        if(leftSide[0] <= rightSide[0]) {
            result.push(leftSide.shift());
        } else {
            result.push(rightSide.shift());
        }

        // 남은 애들 넣기
        while(leftSide.length) {
            result.push(leftSide.shift());
        }

        while(rightSide.length) {
            result.push(rightSide.shift());
        }

        console.log(result);

        return result;
    }
}