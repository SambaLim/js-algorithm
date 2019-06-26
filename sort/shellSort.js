/*
 * 셸정렬
 */
var shellSort = (array) => {

    console.log(`insert Array: ${array}`);

    if(isEmptyOROne(array)) {
        return array;
    }

    // 전체 리스트를 일정한 간격(gap)의 부분 리스트로 나누고,

    // 나눠진 각각의 부분 리스트를 삽입정렬함

    // 간격을 줄임

    // 간격이 1이 될 때까지 부분 리스트의 삽입정렬 과정을 반복

}