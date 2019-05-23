interface Graph {
  drawLine();

  drawPie();
}

class Canvas2D implements Graph {
  drawLine() {
    console.log("draw 2d line");
  }

  drawPie() {
    console.log("draw 2d pie");
  }
}

class Canvas3D {
  draw3DLine() {
    console.log("draw 3d line");
  }

  draw3DPie() {
    console.log("draw 3d pie");
  }
}

class Canvas3DAdapter implements Graph {
  private canvas3D: Canvas3D = new Canvas3D();

  drawLine() {
    this.canvas3D.draw3DLine();
  }

  drawPie() {
    this.canvas3D.draw3DPie();
  }
}

let canvas2D: Graph = new Canvas2D();
canvas2D.drawLine();
canvas2D.drawPie();

let canvas3D: Graph = new Canvas3DAdapter();
canvas3D.drawLine();
canvas3D.drawPie();
