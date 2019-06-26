/*
 * 셸정렬
 */
var shellSort = (array, gap) => {

    console.log(`insert Array: ${array}, gap: ${gap}`);

    if(isEmptyOROne(array)) {
        return array;
    }

    let i,j = 0;
    let tempArray = [];
    let result = [];

    if(!gap) gap = 5;

    for(i=0; i < gap-1; i++) {
        // 초기화
        j=i;
        tempArray = [];

        while(j < array.length) {

            tempArray.push(array[j]);
            j += gap-1;
    
        }
        result = result.concat(insertionSort(tempArray));
    }
    if(gap==1) {
        result = insertionSort(array);
    }

    console.log(`result: ${result}`);

    if(gap <= 1) {
        return result;
    } else {
        gap = gap - 2;
        return shellSort(result, gap);
    }

}