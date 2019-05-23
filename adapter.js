var Canvas2D = /** @class */ (function () {
    function Canvas2D() {
    }
    Canvas2D.prototype.drawLine = function () {
        console.log("draw 2d line");
    };
    Canvas2D.prototype.drawPie = function () {
        console.log("draw 2d pie");
    };
    return Canvas2D;
}());
var Canvas3D = /** @class */ (function () {
    function Canvas3D() {
    }
    Canvas3D.prototype.draw3DLine = function () {
        console.log("draw 3d line");
    };
    Canvas3D.prototype.draw3DPie = function () {
        console.log("draw 3d pie");
    };
    return Canvas3D;
}());
var Canvas3DAdapter = /** @class */ (function () {
    function Canvas3DAdapter() {
        this.canvas3D = new Canvas3D();
    }
    Canvas3DAdapter.prototype.drawLine = function () {
        this.canvas3D.draw3DLine();
    };
    Canvas3DAdapter.prototype.drawPie = function () {
        this.canvas3D.draw3DPie();
    };
    return Canvas3DAdapter;
}());
var canvas2D = new Canvas2D();
canvas2D.drawLine();
canvas2D.drawPie();
var canvas3D = new Canvas3DAdapter();
canvas3D.drawLine();
canvas3D.drawPie();
