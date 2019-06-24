/*
 * 버블정렬
 */
var bubbleSort = (array) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    let i, j, temp;

    for(i=0; i<array.length-1; i++) {
        for(j=0; j<array.length-1-i; j++) {
            
            if(array[j] > array[j + 1]) {
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }

        }
    }

    console.log(array);
    return array;
}