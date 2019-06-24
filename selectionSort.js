/*
 * 선택정렬
 */

 var selectionSort = (array) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    let i, j, minVal, minIndex;

    for(i=0; i<array.length-1; i++) {

        minVal = array[i];
        minIndex = i;

        for(j=i+1; j<array.length; j++) {

            if(array[j] < minVal) {
                minIndex = j;
                minVal = array[j];
            }

        }

        array[minIndex] = array[i];
        array[i] = minVal;
    }

    return array;
 }