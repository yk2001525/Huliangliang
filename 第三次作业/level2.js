var ary = [1, [2, [3, [4, 5]]], 6];
let ary1 = [];
let counter = 0;
function even (arr) {
    for(var i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           even(arr[i])
    }else{
        ary1.push(arr[i])
    }
}
}

even(ary) //[1,2,3,4,5,6]