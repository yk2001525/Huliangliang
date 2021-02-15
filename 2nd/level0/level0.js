var str = 'today is a happy day'
function change(){
    var arr = [];
    var arr1 = [];
    arr = str.split(' ')
    for(var i = 0;i<arr.length;i++)
    {
        arr1.push(arr[i][0].toUpperCase() + arr[i] . substring(1));
    }
    str = arr1.toString();
    for(var i = 0;i<arr.length;i++)
    {
        str = str.replace(',',' ')
    }
}

change(str)     //'Today Is A Happy Day'
console.log(str);