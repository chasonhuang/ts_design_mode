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
// Node枚举
var NodeTypeEnum;
(function (NodeTypeEnum) {
    NodeTypeEnum["Folder"] = "folder";
    NodeTypeEnum["ImageFile"] = "image";
    NodeTypeEnum["TextFile"] = "text";
})(NodeTypeEnum || (NodeTypeEnum = {}));
// Node抽象类
var AbstractNode = /** @class */ (function () {
    function AbstractNode() {
    }
    return AbstractNode;
}());
// 文件和文件夹基础类
var BasicFile = /** @class */ (function (_super) {
    __extends(BasicFile, _super);
    function BasicFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicFile.prototype.add = function (file) {
        console.error("文件类型不支持添加");
        return this;
    };
    BasicFile.prototype.getFileDeep = function (name) {
        if (name === this.name) {
            return this;
        }
        return null;
    };
    return BasicFile;
}(AbstractNode));
var BasicFolder = /** @class */ (function (_super) {
    __extends(BasicFolder, _super);
    function BasicFolder() {
        var _this = _super.call(this) || this;
        _this.type = NodeTypeEnum.Folder;
        _this.children = [];
        return _this;
    }
    BasicFolder.prototype.add = function (file) {
        this.children.push(file);
        return this;
    };
    BasicFolder.prototype.getFileDeep = function (name) {
        if (this.name === name) {
            return this;
        }
        for (var index = 0; index < this.children.length; index++) {
            var node = this.children[index].getFileDeep(name);
            if (node) {
                return node;
            }
        }
        return null;
    };
    return BasicFolder;
}(AbstractNode));
// 文件类
var ImageFile = /** @class */ (function (_super) {
    __extends(ImageFile, _super);
    function ImageFile(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = NodeTypeEnum.ImageFile;
        return _this;
    }
    return ImageFile;
}(BasicFile));
var TextFile = /** @class */ (function (_super) {
    __extends(TextFile, _super);
    function TextFile(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = NodeTypeEnum.TextFile;
        return _this;
    }
    return TextFile;
}(BasicFile));
// 文件夹类
var SystemFolder = /** @class */ (function (_super) {
    __extends(SystemFolder, _super);
    function SystemFolder(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    return SystemFolder;
}(BasicFolder));
// 客户端
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.initTree = function () {
        var folder1 = new SystemFolder("根文件夹");
        var folder2 = new SystemFolder("图像文件夹");
        var folder3 = new SystemFolder("文本文件夹");
        var image1 = new ImageFile("a.jpg");
        var image2 = new ImageFile("b.jpg");
        var text1 = new TextFile("a.txt");
        var text2 = new TextFile("b.txt");
        folder2.add(image1).add(image2);
        folder3.add(text1).add(text2);
        folder1.add(folder2).add(folder3);
        return folder1;
    };
    return Client;
}());
var tree = Client.initTree();
var aJpg = tree.getFileDeep("a.jpg");
console.log(aJpg);
