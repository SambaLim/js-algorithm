var isEmptyOROne = (array) => {
    if(array.length <= 1) {
        console.log(`[isEmptyOROne] Array Length: ${array.length}`);
        return true;
    }
    return false;
}

var changeArrayValByIndex = (array, valOne, valTwo) => {

    if(isEmptyOROne(array)) {
        return array;
    }

    if(valOne==valTwo) {
        console.log(`Two Values are Same! valOne: ${valOne} valTwo: ${valTwo}`);
        return array;
    }

    console.log(`[changeArrayValByIndex] Change Two Values valOne: ${valOne} valTwo: ${valTwo}`);

    let temp;

    temp = array[valOne];
    array[valOne] = array[valTwo];
    array[valTwo] = temp;

    return array;
}

var getSmallOne = (left, right) => {
    if(left < right) {
        return left;
    }
    return right;
}

var getBigOne = (left, right) => {
    if(left > right) {
        return left;
    }
    return right;
}