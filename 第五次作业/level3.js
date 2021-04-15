function Student(name) { 
  
    function People(name) {
        this.tasks = [];
        var that = this;
        var fn = (function (name) {
            return function () {
                console.log('Hi! This is ',name+'!');
                that.next();
            }
        })(name);
    
        this.tasks.push(fn);
    
        setTimeout(function () { that.next() }, 0) 
    }

    People.prototype.next = function(){
        var fn = this.tasks.shift();
        fn && fn();
    }
    
  
    People.prototype.sleep = function(time) {
        var that = this;
        var fn = (function (time) {
            return function () {
                console.log('Wake up after', time);
                setTimeout(function () {
                    that.next();
                }, time*1000)
            }
        })(time);
        this.tasks.push(fn);

        return this; 
    }
  
  People.prototype.sleepFirst = function(time) {
    var that = this;
        var fn = (function (time) {
            return function () {
                console.log('Wake up after', time);
                setTimeout(function () {
                    that.next();
                }, time * 1000)
            }
        })(time);
        this.tasks.unshift(fn);
        return this;
    }
  People.prototype.study = function(course) {

    var that = this;
    var fn = (function (course) {
        return function () {
            console.log("Study " + course);
            that.next();
        }
    })(course)
    this.tasks.push(fn);
    return this;
    }
  
    return new People(name);
  }
// Student('fxy');
// Student('fxy').sleep(3).study('javascript',3);
// Student('fxy').study('javascript').study('Vue');
// Student('fxy').sleepFirst(5).study('Ajax');