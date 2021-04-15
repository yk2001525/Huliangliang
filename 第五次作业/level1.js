let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on�?�May ?Day."
var reg = /[a-z,A-Z,\',\.,\?]/g;
str = str.match(reg,'').toString().replace(/\?/g,' ').replace(/,/g,'').replace('d','D').replace(' to','to').replace(' a','a')

console.log(str) // 'I'm going to take a trip to Daocheng on May Day.'