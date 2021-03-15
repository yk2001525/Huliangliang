var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
        { name: "summer", sex: "woman" },
        { name: "daWen", sex: "woman" },
        { name: "yang", sex: "man" }],
    work: {
        time: "2019",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function () { console.log("玩滑板"); }
}

function deepClone (origin){
    var tar = {};
    var toStr = Object.prototype.toString;
    var arrType = '[object Array]'
    for(var k in origin){
        if(origin.hasOwnProperty(k)){
            if(typeof origin[k] === 'object' && origin[k] !== null){
                tar[k] = toStr.call(origin[k]) === arrType ? [] : {}
                deepClone(origin[k],tar[k])

            }else{
                tar[k] = origin[k];
            }
        }
    }

    return tar
}
const newObj = deepClone(data)

console.log(data,newObj);