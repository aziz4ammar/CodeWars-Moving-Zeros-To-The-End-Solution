var moveZeros = function (arr) {
    for(var j = arr.length; j--;) {
        if(arr[j]===0) {
            arr.splice(j, 1);
            arr.push(0);
        }
    } return arr;
}