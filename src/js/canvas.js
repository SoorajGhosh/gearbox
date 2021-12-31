class CanvasObj {
  constructor(domCanvas) {
    this.width = domCanvas.width;
    this.height = domCanvas.height;
    this.ctx = domCanvas.getContext("2d");
  }
}

const canvasEl = document.querySelector("#canvas");

const updateCanvas = () => {
  canvasEl.width = window.innerWidth;
  canvasEl.height =
    window.innerHeight < 850 ? window.innerWidth : window.innerHeight;
};

updateCanvas();
window.addEventListener("resize", updateCanvas);
// canvasEl.width = window.innerWidth;
// canvasEl.height = window.innerHeight;
export const canvas = new CanvasObj(canvasEl);
