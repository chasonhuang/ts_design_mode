var Singleton = /** @class */ (function () {
    function Singleton(name, age) {
        this.name = name;
        this.age = age;
    }
    Singleton.getInstance = function (name, age) {
        if (!this.instance) {
            this.instance = new Singleton(name, age);
        }
        return this.instance;
    };
    return Singleton;
}());
var singleton1 = Singleton.getInstance("Mary", 20);
var singleton2 = Singleton.getInstance("Jack", 20);
console.log(singleton1, singleton2);
