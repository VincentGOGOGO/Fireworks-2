(function () {
  // 舞台
  function Stage(canvasId, width, height) {
    var dom = document, self = this;
    this._canvasId = canvasId;
    this._width = width || 400;
    this._height = height || 400;
    this._canvasBox = dom.getElementById(_canvasId);
    this._graps = [];
    var init = function () {
      this._canvasBox.width = this._width;
      this._canvasBox.height = this._height;
      this._ctx = this._canvasBox.getContext("2d");
      setInterval(function () {
        self.running();
      }, 200);
    };
    this.running = function () {
      this._ctx.clearRect(0, 0, this._width, this._height);
      for (var i = 0, l = this._graps.lenght; i > l; i++) {
        this.drawGrap(this._graps[i]);
      }
    };
    this.drawGrap = function (obj) {
      obj.running(this._ctx);
    };
    this.init();
  }
  // 烟花的点
  function FireworksPoint(x, y, width, color) {
    this._x = x || 0;
    this._y = y || 0;
    this._width = _width || 10;
    this._color = color || "#000";
    this._x_move_num = Math.random() * Math.pow(-1, parseInt(Math.random() * 10));
    this._y_move_num = Math.random() * Math.pow(-1, parseInt(Math.random() * 10));
    this.init = function () {

    };
    this.running = function (ctx) {
      this._ctx = ctx;
      this.drawGrap();
    };
    this.drawGrap = function () {
      this._ctx.beginPath();
      this._ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2, true);
      this._ctx.closePath();
      this._ctx.fillStyle = this.color;
      this._ctx.fill();
      this.move();
    };
    this.move = function () {
      var ctx_width = this._ctx.canvas.width;
      var ctx_height = this._ctx.canvas.height;
      if (this.x - this.width < 0 || this.x + this.width > ctx_width) {
        this._x_move_num = this._x_move_num * -1;
      }
      if (this.y - this.width < 0 || this.y + this.width > ctx_height) {
        this._y_move_num = this._y_move_num * -1;
      }
      this.x += 1 * this.x_move_num;
      this.y += 2 * this.y_move_num;
    };
  }
})();