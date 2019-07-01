/*
 * 기수정렬
 */
var radixSort = (array, digit) => {

    // LSD
    if(isEmptyOROne(array)) {
        return array;
    }

    // 자리수를 판별하기 위함
    let mod = 10;
    let i;
    if(!digit) digit = 10;

    // 자리수가 몇인지 알아보기
    for(i=0; i < digit; mod *= 10) {
        
    }

    // 같은 자리수 친구들끼리 한 배열에
}