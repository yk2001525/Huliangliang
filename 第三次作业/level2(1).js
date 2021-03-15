var arr = [1, [2, [3, [4, 5]]], 6];
function even (arr) {
    return arr.toString().split(',').map(function(item){
        return Number(item)
    })
}
even(arr) //[1,2,3,4,5,6]