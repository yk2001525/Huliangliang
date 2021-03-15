function Animal() {
    this.species = "动物";
}
Animal.prototype.species = "动物"

function Cat(name, color) {
    this.name = name;
    this.color = color;
} 
// for(var key in Animal.prototype){
//     Cat[key] = Animal.prototype[key]
// }
var cat1 = new Cat("大毛","黄色");
for(var key in Animal.prototype){
    cat1[key] = Animal.prototype[key]
}
console.log(cat1.species); // 动物