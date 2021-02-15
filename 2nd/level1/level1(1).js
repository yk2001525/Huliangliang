var arr = ['ABCDEEF,GHJKKM']
function recur(){
    arr = arr.toString(); 
    arr = arr.replace(',','')
    arr = arr.split(',');
    var arr1 = [];
    for(var i = 0;i<arr[0].length;i++)
    {
        arr1[i] = arr[0][i]
    }
    var arra = []
    var num = 0
    for(var i=0; i<arr1.length; i++){
        for(var j=i+1; j<arr1.length; j++){
            if(arr1[i]==arr1[j]){        
                arra[num] = arr1[i];
                num++;
                arra[num] = arr1[i];
                num++;
            }
        }
    }
    var arrb = arra.join(',')
    var a,b,c = '';
    a = arrb.substring(0,1)
    b = arrb.substring(2,5) 
    c = arrb.substring(6,7)   
    var arrc = a.concat(b,c) 
    var arrd = arrc.split(',')
    console.log(arrd)

}
recur(arr) 
