/*
 * 삽입정렬
 */

var insertionSort = (array) => {
    var i = 1;
    var j, temp;

    // array가 비었는지 확인
    arrayIsEmpty(array);

    for(i; i<array.length; i++) {
        // 비교를 할 숫자를 선택
        temp = array[i];

        for(j = i-1; j>=0 && temp < array[j]; j--) {
            // 비교를 할 숫자와 그 앞의 수들과 비교
            array[j+1] = array[j];
        }

        array[j+1] = temp;
    }
    console.log(array);

    return array;
}

var arrayIsEmpty = (array) => {
    if(array.length == 0) {
        console.log("Empty Array", array);
        return ;
    }
}