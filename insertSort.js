/*
 * 삽입정렬
 */

var insertionSort = (array) => {
    let i = 1;
    let j, temp;

    // array가 비었거나 하나만 있는 경우, 그대로 출력
    if(isEmptyOROne(array)) {
        return array;
    }

    for(i; i<array.length; i++) {
        // 비교를 할 숫자를 선택
        temp = array[i];

        for(j = i-1; j>=0 && temp < array[j]; j--) {
            array[j+1] = array[j];
        }

        array[j+1] = temp;
    }

    return array;
}

var isEmptyOROne = (array) => {
    if(array.length <= 1) {
        return true;
    }
    return false;
}