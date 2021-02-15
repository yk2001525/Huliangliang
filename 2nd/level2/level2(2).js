var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
function even(arr){
  var result = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i] instanceof Array){
      result = result.concat(even(arr[i]));
    }else{
      result.push(arr[i])
    }
  }
  return result;
}
console.log(even(arr)) 