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
var GunType;
(function (GunType) {
    GunType[GunType["AK"] = 0] = "AK";
    GunType[GunType["M4A1"] = 1] = "M4A1";
})(GunType || (GunType = {}));
// interface Shootable {
//   shoot();
// }
var Gun = /** @class */ (function () {
    function Gun() {
    }
    return Gun;
}());
var AK47 = /** @class */ (function (_super) {
    __extends(AK47, _super);
    function AK47() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //具体产品 - AK47
    AK47.prototype.shoot = function () {
        console.log("ak47 shoot.");
    };
    return AK47;
}(Gun));
var M4A1 = /** @class */ (function (_super) {
    __extends(M4A1, _super);
    function M4A1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //具体产品 - M4A1
    M4A1.prototype.shoot = function () {
        console.log("m4a1 shoot.");
    };
    return M4A1;
}(Gun));
var GunFactory = /** @class */ (function () {
    function GunFactory() {
    }
    GunFactory.createGun = function (type) {
        switch (type) {
            case GunType.AK:
                return new AK47();
            case GunType.M4A1:
                return new M4A1();
            default:
                throw Error("not support this gun yet");
        }
    };
    return GunFactory;
}());
GunFactory.createGun(GunType.AK).shoot();
GunFactory.createGun(GunType.M4A1).shoot();
