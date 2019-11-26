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
var ClothesTypeEnum;
(function (ClothesTypeEnum) {
    ClothesTypeEnum[ClothesTypeEnum["Vest"] = 0] = "Vest";
    ClothesTypeEnum[ClothesTypeEnum["Shirt"] = 1] = "Shirt";
    ClothesTypeEnum[ClothesTypeEnum["Jacket"] = 2] = "Jacket";
    ClothesTypeEnum[ClothesTypeEnum["Hoodies"] = 3] = "Hoodies";
    ClothesTypeEnum[ClothesTypeEnum["Sweater"] = 4] = "Sweater";
})(ClothesTypeEnum || (ClothesTypeEnum = {}));
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["White"] = 0] = "White";
    ColorEnum[ColorEnum["Red"] = 1] = "Red";
    ColorEnum[ColorEnum["Yellow"] = 2] = "Yellow";
    ColorEnum[ColorEnum["Black"] = 3] = "Black";
})(ColorEnum || (ColorEnum = {}));
// 类型的抽象类
var AbstractClothesClass = /** @class */ (function () {
    function AbstractClothesClass() {
    }
    AbstractClothesClass.prototype.setColor = function (color) {
        this.color = color;
    };
    return AbstractClothesClass;
}());
//类型的扩充抽象类
var JacketProducer = /** @class */ (function (_super) {
    __extends(JacketProducer, _super);
    function JacketProducer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JacketProducer.prototype.getClothes = function () {
        var color = this.color.getColor();
        console.log(color + "jacket");
    };
    return JacketProducer;
}(AbstractClothesClass));
var ShirtProducer = /** @class */ (function (_super) {
    __extends(ShirtProducer, _super);
    function ShirtProducer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShirtProducer.prototype.getClothes = function () {
        var color = this.color.getColor();
        console.log(color + "shirt");
    };
    return ShirtProducer;
}(AbstractClothesClass));
// 颜色的实现类;
var BlackColor = /** @class */ (function () {
    function BlackColor() {
    }
    BlackColor.prototype.getColor = function () {
        return "black";
    };
    return BlackColor;
}());
var WhiteColor = /** @class */ (function () {
    function WhiteColor() {
    }
    WhiteColor.prototype.getColor = function () {
        return "white";
    };
    return WhiteColor;
}());
// 桥接具体实现类;
var CloseShop = /** @class */ (function () {
    function CloseShop() {
    }
    CloseShop.getInstance = function () {
        if (!this._instance) {
            this._instance = new CloseShop();
        }
        return this._instance;
    };
    CloseShop.prototype.getClothes = function (type, color) {
        var clothes;
        switch (type) {
            case ClothesTypeEnum.Jacket:
                clothes = new JacketProducer();
                break;
            case ClothesTypeEnum.Shirt:
                clothes = new ShirtProducer();
                break;
            default:
                throw new Error("not support type" + type);
        }
        switch (color) {
            case ColorEnum.White:
                clothes.setColor(new WhiteColor());
                break;
            case ColorEnum.Black:
                clothes.setColor(new BlackColor());
                break;
            default:
                throw new Error("not support color" + color);
        }
        return clothes;
    };
    return CloseShop;
}());
var clothes = CloseShop.getInstance().getClothes(ClothesTypeEnum.Shirt, ColorEnum.Black);
console.log(clothes);
