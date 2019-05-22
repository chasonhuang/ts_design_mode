var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 发布类
var Subject = /** @class */ (function () {
    function Subject() {
        // 缓存列表，用以存放回调函数，以便通知订阅者
        this.observers = new Array();
    }
    // 新增订阅者
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    // 改变状态，通知订阅者
    Subject.prototype.setState = function (state) {
        console.log("Warning: State changed: " + state);
        this.state = state;
        this.publish();
    };
    // 获取状态
    Subject.prototype.getState = function () {
        return this.state;
    };
    // 发布事件
    Subject.prototype.publish = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update();
        }
    };
    // 取消订阅
    Subject.prototype.unsubscribe = function (observer) {
        // 如果没传参数，则清空订阅者
        if (!observer) {
            this.observers = new Array();
        }
        else {
            this.observers.splice(this.observers.indexOf(observer), 1);
        }
    };
    return Subject;
}());
// 订阅者抽象类
var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());
var AObserver = /** @class */ (function (_super) {
    __extends(AObserver, _super);
    // 构造方法里订阅
    function AObserver(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.subscribe(_this);
        return _this;
    }
    AObserver.prototype.update = function () {
        console.log("AObserver: " + this.subject.getState());
    };
    return AObserver;
}(Observer));
var BObserver = /** @class */ (function (_super) {
    __extends(BObserver, _super);
    // 构造方法里订阅
    function BObserver(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subject.subscribe(_this);
        return _this;
    }
    BObserver.prototype.update = function () {
        console.log("BObserver: " + this.subject.getState());
    };
    return BObserver;
}(Observer));
var subject = new Subject();
var aObserver = new AObserver(subject);
var bObserver = new BObserver(subject);
