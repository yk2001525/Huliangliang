function bubble(arr){
    for(var j=0; j<arr.length-1;j++)
    {
        for(var i = 0;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1])
            {
                var t = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = t;
                console.log(arr[i],arr[i+1]);
            }
        }
        console.log(arr);
    }
}
var arr = [9,8,7,6,5,4,3,2,1]
bubble(arr)
