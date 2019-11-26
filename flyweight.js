"use strict";
exports.__esModule = true;
var FontFamilyEnum;
(function (FontFamilyEnum) {
    FontFamilyEnum["Song"] = "\u5B8B\u4F53";
    FontFamilyEnum["Hei"] = "\u9ED1\u4F53";
})(FontFamilyEnum = exports.FontFamilyEnum || (exports.FontFamilyEnum = {}));
// 默认构建方法
var LanguageClass = /** @class */ (function () {
    function LanguageClass(type, name) {
        this.type = type;
        this.name = name;
    }
    return LanguageClass;
}());
var FontFamilyClass = /** @class */ (function () {
    function FontFamilyClass(type) {
        this.fontFamily = type;
    }
    return FontFamilyClass;
}());
// 基础类
var CharacterRegistry = /** @class */ (function () {
    function CharacterRegistry() {
        this._fontFamilyMap = new Map();
    }
    Object.defineProperty(CharacterRegistry, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new CharacterRegistry();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    CharacterRegistry.prototype.language = function () {
        if (!this._language) {
            // 懒汉策略，延时创建对象
            this._language = new LanguageClass("Chinese", "中文");
        }
        return this._language;
    };
    CharacterRegistry.prototype.getFontFamilyByType = function (type) {
        // 懒汉策略，延时创建对象
        if (!this._fontFamilyMap.has(type)) {
            this._fontFamilyMap.set(type, new FontFamilyClass(type));
        }
        return this._fontFamilyMap.get(type);
    };
    return CharacterRegistry;
}());
var FlyweightCharacterClass = /** @class */ (function () {
    function FlyweightCharacterClass(index, type) {
        this.language = CharacterRegistry.instance.language; // 内部共享属性
        this.index = index; // 外部属性
        this.fontFamily = CharacterRegistry.instance.getFontFamilyByType(type);
    }
    return FlyweightCharacterClass;
}());
var SaveCharacters = /** @class */ (function () {
    function SaveCharacters() {
    }
    SaveCharacters.flyweightWay = function () {
        var charactersList = [];
        for (var i = 0; i < 200000; i++) {
            // 模拟随机生成类型
            var type = Math.random() > 0.5 ? FontFamilyEnum.Song : FontFamilyEnum.Hei;
            charactersList.push(new FlyweightCharacterClass(i, type));
        }
        return charactersList;
    };
    return SaveCharacters;
}());
var flyweightWayCharacters = SaveCharacters.flyweightWay();
console.log(flyweightWayCharacters);
