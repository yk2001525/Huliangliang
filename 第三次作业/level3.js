function Animal() {   //父
    //this指向animal构造函数的对象实例
    this.species = "动物";
}

function Cat(name, color) {   //子
    //this指向cat构造函数的对象实例
    Animal.call(this) //首先调用animal，然后把animal里面的this改成了cat的this，
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物