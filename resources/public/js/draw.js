module.exports = function(canvas) {
    var coords = {};
    var prevCoords = {};
    
    this.canvas = canvas;
    
    this.setCoords = function(x,y) {
        this.prevCoords = this.coords;
        this.coords = {left: x, top: y};

        return this;
    };

    this.getCoords = function() {
        return this.coords;
    };

    this.setOnDrawing = function(bool) {
        this.onDrawing = bool;
    };

    this.isOnDrawing = function() {
        return this.onDrawing === true;
    };

    this.draw = function() {
        var ctx = canvas.getContext();

        ctx.beginPath();
        ctx.moveTo(this.prevCoords.left, this.prevCoords.top);
        ctx.lineTo(this.coords.left, this.coords.top);
        ctx.closePath();
        ctx.stroke();
    };

    this.erase = function() {
        dimension = this.canvas.getDimension()

        canvas.getContext().clearRect(0, 0, dimension.width, dimension.height);
    };
};
