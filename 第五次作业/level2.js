// 1.------------------------------
for (var i = 0; i < 5; i++) {
    (function(j){
        setTimeout(function() {
            console.log(new Date, j);
            
        }, 1000);
    })(i)
   
}
console.log(new Date, i);
// 2.------------------------------
var flag = true
for (var i = 0; i < 5; i++) {
    let j
    if(flag){
         console.log(new Date, i);
         flag=false
         j = i
         j++
        }
   else{ 
       (function(j){
            setTimeout(function() {
             console.log(new Date, j);
        }, 1000);
        })(i)

}
}