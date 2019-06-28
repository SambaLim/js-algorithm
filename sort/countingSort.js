/*
 * 계수정렬
 */
var countingSort = (array ,k) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    let i;
    let countingArray = [];
    let countSumArray = [];
    let resultArray = [];

    // k개 만큼의 0이 있는 counting Array를 생성
    for(i=0; i<k+1; i++) {
        countingArray.push(0);
        countSumArray.push(0);
    }

    // countingArray에 index에 index와 같은 수가 있다면 1씩 추가
    for(i=0; i<array.length; i++) {
        countingArray[array[i]] += 1;
    }

    // 누적합 배열 만들기
    for(i=0; i<countingArray.length; i++) {

        if(i >= 1) {
            countSumArray[i] = countingArray[i] + countSumArray[i-1];
        } else {
            countSumArray[i] = countingArray[i];
        }

    }

    // countingArray, countingSumArray를 사용하여 결과 resultArray 만들기

    for(i=0; i < array.length; i++) {
        resultArray[countSumArray[array[i]] - 1] = array[i];
        countSumArray[array[i]] -= 1;
    }
    return resultArray;
}