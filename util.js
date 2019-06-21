var isEmptyOROne = (array) => {
    if(array.length <= 1) {
        return true;
    }
    return false;
}

var getSmallOne = (left, right) => {
    if(left < right) {
        return left;
    }
    return right;
}