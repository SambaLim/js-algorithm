/*
 * 삽입정렬
 */

var insertionSort = (array) => {
    let i = 1;
    let j, temp;

    // array가 비었는지 확인
    arrayIsEmpty(array);

    for(i; i<array.length; i++) {
        // 비교를 할 숫자를 선택
        temp = array[i];

        for(j = i-1; j=>0; j--) {

            if(array[j] > temp) {
                
            }
        }
    }
}

var arrayIsEmpty = (array) => {
    if(array.length == 0) {
        console.log("Empty Array", array);
        return ;
    }
}